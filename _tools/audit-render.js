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
eval(fs.readFileSync(path.join(ROOT, 'reader/public/typeset.js'), 'utf8'));
const T = window.Typeset;

const SUBJECTS = ['Maths', 'Physics', 'Chemistry'];
const showAll = process.argv.includes('--all');

const issues = {
  boxLeak: { desc: 'box drawing characters leaked into typeset output', hits: [] },
  emptyExpr: { desc: 'row has a note but no formula', hits: [] },
  missedMath: { desc: 'left as monospace but looks like formulas', hits: [] },
  hugeNote: { desc: 'note column suspiciously long (bad split)', hits: [] },
  rawCaret: { desc: 'caret or sqrt( survived into prose output', hits: [] },
  rawSymbol: { desc: 'greek name, arrow or relation left as plain text', hits: [] },
  artSymbol: { desc: 'greek name left as a word inside a diagram', hits: [] },
  wideArt: { desc: 'diagram wider than 100 columns (will scroll on phones)', hits: [] }
};

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
      const isArt = html.startsWith('<pre');
      if (isArt) art++; else typeset++;

      if (isArt) {
        const body = buf.filter((l) => l.trim());
        const eq = body.filter((l) => l.includes('=')).length;
        if (body.length && eq / body.length > 0.6 && !/[\\]/.test(code)) {
          issues.missedMath.hits.push({ rel, line: start, code });
        }
        const widest = Math.max(...buf.map((l) => l.length));
        if (widest > 100) issues.wideArt.hits.push({ rel, line: start, code: `${widest} columns` });
        const drawn = html.replace(/<[^>]+>/g, ' ');
        if (GREEK_WORDS.test(drawn)) issues.artSymbol.hits.push({ rel, line: start, code });
      } else {
        // stray box drawing that should have been consumed by the parser
        // (a bare | is not counted: |x| is an absolute value)
        const text = html.replace(/<[^>]+>/g, ' ');
        if (/\+--|--\+/.test(text)) {
          issues.boxLeak.hits.push({ rel, line: start, code });
        }
        if (GREEK_WORDS.test(text) || RELATIONS.test(text)) {
          issues.rawSymbol.hits.push({ rel, line: start, code });
        }
        const rows = [...html.matchAll(/<div class="expr">(.*?)<\/div><div class="note">(.*?)<\/div>/gs)];
        for (const r of rows) {
          const expr = r[1].replace(/<[^>]+>/g, '').trim();
          const note = r[2].replace(/<[^>]+>/g, '').trim();
          if (!expr && note) issues.emptyExpr.hits.push({ rel, line: start, code: note.slice(0, 90) });
          if (note.length > 190) issues.hugeNote.hits.push({ rel, line: start, code: note.slice(0, 110) });
        }
      }
      continue;
    }

    // prose lines
    const l = lines[i];
    if (!l.trim() || /^\s*[|+]/.test(l)) continue;
    const out = T.inline(l).replace(/<[^>]+>/g, '');
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
