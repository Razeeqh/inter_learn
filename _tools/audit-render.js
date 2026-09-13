/* Renders every chapter file through the reader's typesetter and reports
 * formatting defects, so the whole corpus can be checked without clicking
 * through 564 pages by hand.
 *
 *   node _tools/audit-render.js            summary + samples
 *   node _tools/audit-render.js --all      every offending block
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
global.window = {};
// the reader converts to LaTeX before it typesets, so the audit must too, or it
// only ever sees the plain text fallback
eval(fs.readFileSync(path.join(ROOT, 'reader/public/tex.js'), 'utf8'));
window.katex = require(path.join(ROOT, 'reader/public/vendor/katex/katex.min.js'));
eval(fs.readFileSync(path.join(ROOT, 'reader/public/typeset.js'), 'utf8'));
eval(fs.readFileSync(path.join(ROOT, 'reader/public/md.js'), 'utf8'));
const T = window.Typeset;
const renderMd = window.renderMarkdown;

const SUBJECTS = ['Maths', 'Physics', 'Chemistry'];
const showAll = process.argv.includes('--all');

const issues = {
  boxLeak: { desc: 'box drawing characters leaked into typeset output', hits: [] },
  frameLeak: { desc: 'panel frame printed instead of being stripped', hits: [] },
  emptyExpr: { desc: 'row has a note but no formula', hits: [] },
  missedMath: { desc: 'left as monospace but looks like formulas', hits: [] },
  hugeNote: { desc: 'note column suspiciously long (bad split)', hits: [] },
  rawCaret: { desc: 'caret or sqrt( survived into prose output', hits: [] },
  rawSymbol: { desc: 'greek name, arrow or relation left as plain text', hits: [] },
  artSymbol: { desc: 'greek name left as a word inside a diagram', hits: [] },
  brokenJoin: { desc: 'connector in a diagram that joins nothing', hits: [] },
  falseTimes: { desc: 'a variable x turned into a multiplication sign', hits: [] },
  proseMath: { desc: 'a sentence set as algebra (italic, mashed words)', hits: [] },
  mixedFont: { desc: 'monospace and typeset rows inside one card', hits: [] },
  wideArt: { desc: 'diagram wider than 100 columns (will scroll on phones)', hits: [] }
};

// words no formula uses, so three of them means the line is being read, not
// solved. Single letters stay out of the list: A and B are sets, not articles.
const STOP = /\b(the|that|this|with|from|have|has|are|was|were|but|you|your|every|when|then|than|into|onto|over|under|about|which|what|how|there|their|they|them|can|will|must|should|would|use|used|using|make|makes|take|takes|give|gives|get|gets|put|puts|write|read|look|show|shows|find|know|same|both|other|another|first|last|next|before|after|because|let|lets|means|happens|holds|called|says|here|also|just|still|again|does|did|done)\b/gi;

const GREEK_WORDS = /\b(alpha|beta|gamma|delta|epsilon|theta|lambda|mu|nu|pi|rho|sigma|tau|phi|chi|psi|omega|Delta|Sigma|Omega|Phi|Lambda|Theta|Gamma)\b/;
const RELATIONS = /(^|[^-<>])(->|<-|<=|>=|!=|\+\/-)([^->]|$)/;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const files = SUBJECTS.flatMap((s) => {
  const d = path.join(ROOT, s);
  return fs.existsSync(d) ? walk(d) : [];
});

let blocks = 0, typeset = 0, art = 0;

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');

  for (let i = 0; i < lines.length; i++) {
    // fenced blocks
    if (/^\s*```/.test(lines[i])) {
      const start = i + 1;
      i++;
      const buf = [];
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      const code = buf.join('\n');
      if (!code.trim()) continue;
      blocks++;

      const html = T.block(code);
      const isArt = html.startsWith('<div class="artwrap"');
      if (isArt) art++; else typeset++;

      if (isArt) {
        const body = buf.filter((l) => l.trim());
        const eq = body.filter((l) => l.includes('=')).length;
        if (body.length && eq / body.length > 0.6 && !/[\\]/.test(code)) {
          issues.missedMath.hits.push({ rel, line: start, code });
        }
        const widest = Number((html.match(/--cols:(\d+)/) || [])[1] || 0);
        if (widest > 100) issues.wideArt.hits.push({ rel, line: start, code: `${widest} columns` });
        const drawn = html.replace(/<[^>]+>/g, ' ');
        if (GREEK_WORDS.test(drawn)) issues.artSymbol.hits.push({ rel, line: start, code });
        // a junction prettyTree could not read: the rails it joins do not line up
        if (/\+[-\u2500]|[-\u2500]\+/.test(drawn)) {
          issues.brokenJoin.hits.push({ rel, line: start, code });
        }
      } else {
        // a sentence pushed through LaTeX: italic letters with the spaces eaten
        for (const m of html.matchAll(/<annotation encoding="application\/x-tex">([\s\S]*?)<\/annotation>/g)) {
          const tex = m[1];
          const plain = tex.replace(/\\(text|mathrm|mathbf)\{([^{}]*)\}/g, ' $2 ')
            .replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}\\]/g, ' ');
          if ((plain.match(STOP) || []).length >= 3) {            issues.proseMath.hits.push({ rel, line: start, code: tex.slice(0, 150) + '\n' + code });
            break;
          }
        }
        // a single monospace line among typeset ones is a font accident; a
        // multi-line one is an aligned table, which is meant to look different
        const algn = [...html.matchAll(/<div class="expr wide algn">([\s\S]*?)<\/div>/g)];
        const lone = algn.filter((m) => !m[1].includes('\n'));
        if (lone.length && /class="katex"/.test(html)) {
          issues.mixedFont.hits.push({
            rel, line: start,
            code: 'ROW: ' + lone.map((m) => m[1].replace(/<[^>]+>/g, '')).join(' / ') + '\n' + code
          });
        }
        // stray box drawing that should have been consumed by the parser
        // (a bare | is not counted: |x| is an absolute value)
        // a block may mix diagrams and cards; borders inside a <pre> are meant
        // to be there, so only the card part is checked
        const cards = html.replace(/<pre[\s\S]*?<\/pre>/g, ' ');
        // KaTeX keeps the TeX source and a MathML copy in the markup; neither is
        // shown to the reader, so neither counts as output
        const shown = cards.replace(/<span class="katex-mathml">[\s\S]*?<\/span><span class="katex-html"/g, '<span class="katex-html"');
        const text = shown.replace(/<[^>]+>/g, ' ');
        // a times sign followed by a verb was really the variable x
        if (/\u00d7\s+(is|are|was|were|be|not|must|can|cannot|will|would|does|has|have|lies|belongs)\b/.test(text) ||
            /\b(and|or|if|then|when|where)\s+\u00d7/.test(text)) {
          issues.falseTimes.hits.push({
            rel, line: start, code: text.replace(/\s+/g, ' ').slice(0, 120)
          });
        }
        if (/\+--|--\+/.test(text)) {
          issues.boxLeak.hits.push({
            rel, line: start,
            code: 'OUT: ' + text.replace(/\s+/g, ' ').trim().slice(0, 200) + '\n' + code
          });
        }
        // a panel whose frame the parser could not strip. Matrices also use
        // +---+ and bars, but the parser turns those into real brackets. A
        // surviving frame shows up as a cell wrapped in bars end to end; bars
        // that pair up inside a cell are absolute values.
        const framed = buf.filter((l) => /^\s*\|.*\|\s*$/.test(l)).length >= 3 &&
          buf.some((l) => /^\s*\+[-=]+\+\s*$/.test(l));
        const wrapped = [...html.matchAll(/<div class="(?:expr|cap)[^"]*">([\s\S]*?)<\/div>/g)]
          .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
          .filter((c) => /^\|/.test(c) && /\|$/.test(c) && c.length > 20).length;
        if (framed && !/class="mat"/.test(html) && !/expr wide algn/.test(html) &&
            !T.unframe(buf.map((l) => l.replace(/\r/g, ''))) && wrapped >= 1) {
          issues.frameLeak.hits.push({ rel, line: start, code });
        }
        if (GREEK_WORDS.test(text) || RELATIONS.test(text)) {
          issues.rawSymbol.hits.push({ rel, line: start, code });
        }
        const rows = [...shown.matchAll(/<div class="expr">(.*?)<\/div><div class="note">(.*?)<\/div>/gs)];
        for (const r of rows) {
          const expr = r[1].replace(/<[^>]+>/g, '').trim();
          const note = r[2].replace(/<[^>]+>/g, '').trim();
          if (!expr && note) issues.emptyExpr.hits.push({ rel, line: start, code: note.slice(0, 90) });
          if (note.length > 190) issues.hugeNote.hits.push({ rel, line: start, code: note.slice(0, 110) });
        }
      }
      continue;
    }

    // prose lines, rendered the way the reader renders them
    const l = lines[i];
    if (!l.trim() || /^\s*[|+]/.test(l)) continue;
    const md = renderMd(l).html || renderMd(l);
    const out = String(md)
      .replace(/<span class="katex-mathml">[\s\S]*?<\/span><span class="katex-html"/g, '<span class="katex-html"')
      .replace(/<[^>]+>/g, ' ');
    if (/\^|sqrt\(/.test(out)) {
      issues.rawCaret.hits.push({ rel, line: i + 1, code: l.trim().slice(0, 110) });
    }
    if (GREEK_WORDS.test(out) || RELATIONS.test(out)) {
      issues.rawSymbol.hits.push({ rel, line: i + 1, code: l.trim().slice(0, 110) });
    }
  }
}

console.log(`files ${files.length}   fenced blocks ${blocks}   typeset ${typeset}   monospace ${art}`);
console.log(`typeset share: ${(100 * typeset / blocks).toFixed(1)}%\n`);

for (const [key, info] of Object.entries(issues)) {
  console.log(`${String(info.hits.length).padStart(5)}  ${key.padEnd(11)} ${info.desc}`);
}

for (const [key, info] of Object.entries(issues)) {
  if (!info.hits.length) continue;
  console.log(`\n===== ${key} (${info.hits.length}) =====`);
  const show = showAll ? info.hits : info.hits.slice(0, 3);
  for (const h of show) {
    console.log(`\n-- ${h.rel}:${h.line}`);
    console.log(h.code.split('\n').slice(0, 10).join('\n'));
  }
}
