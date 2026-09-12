/* Turns the plain-text notation used in the notes into textbook typography.
 *
 * The source lines formulas up against their explanatory notes in columns:
 *
 *     C(i,j)    =  (-1)^(i+j) x M(i,j)          <- always apply the sign
 *     |__________________________|                |___________________|
 *               the formula                              the note
 *
 * Centring that as a single line makes it unreadable, so each block is parsed
 * into (formula, note) rows and laid out as a two column sheet. Stacked
 * fractions and +---+ matrices are rebuilt as real typeset objects.
 *
 * Anything that is genuinely a drawing - mind maps, ray diagrams, graphs,
 * circuits - is left as untouched monospace, because substituting
 * variable width glyphs into it would destroy the alignment it depends on.
 */

const GREEK = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'Δ', epsilon: 'ε', zeta: 'ζ',
  eta: 'η', theta: 'θ', iota: 'ι', kappa: 'κ', lambda: 'λ', mu: 'μ', nu: 'ν',
  xi: 'ξ', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', phi: 'φ', chi: 'χ',
  psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Pi: 'Π', Sigma: 'Σ',
  Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω'
};

const OPS = [
  [/&lt;--&gt;/g, '⟷'], [/&lt;=&gt;/g, '⇔'], [/&lt;-&gt;/g, '↔'],
  [/--&gt;/g, '⟶'], [/-&gt;/g, '→'], [/&lt;--/g, '⟵'], [/&lt;-/g, '←'],
  [/=&gt;/g, '⇒'], [/&lt;=/g, '≤'], [/&gt;=/g, '≥'],
  [/!=/g, '≠'], [/~=/g, '≈'], [/\+\/-/g, '±'],
  [/\.\.\./g, '…'],
  [/\bINT\b/g, '∫'], [/\bSUM\b/g, '∑'],
  [/\binfinity\b/g, '∞'],
  [/\bangstrom\b/g, 'Å'],
  [/(\d)\s*degrees\b/g, '$1°'],
  [/(\d)\s*deg\b/g, '$1°']
];

// "m x n", "n1 x u1", "2 x 3". Both sides must be short tokens so ordinary
// prose such as "the x axis" is left alone.
const MUL = [
  [/\b([A-Za-z0-9]{1,3})\s+x\s+([A-Za-z0-9]{1,3})\b/g, '$1 × $2'],
  [/\b(\d)x(\d)\b/g, '$1 × $2'],
  [/(\))\s+x\s+(?=[A-Za-z0-9(])/g, '$1 × ']
];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------------------------------------------------------------- inline */

/** Rewrite name(...) using bracket matching, so nested calls survive. */
function replaceCall(s, name, wrap) {
  const re = new RegExp('\\b' + name + '\\s*\\(');
  let out = '';
  let rest = s;
  for (let guard = 0; guard < 200; guard++) {
    const m = re.exec(rest);
    if (!m) break;
    const start = m.index + m[0].length;
    let depth = 1;
    let i = start;
    for (; i < rest.length && depth; i++) {
      if (rest[i] === '(') depth++;
      else if (rest[i] === ')') depth--;
    }
    if (depth) break;                                  // unbalanced: leave as written
    out += rest.slice(0, m.index) + wrap(rest.slice(start, i - 1));
    rest = rest.slice(i);
  }
  return out + rest;
}

/** Exponents written with brackets, which may nest: (det A)^((n-1)^2). */
function supBrackets(s) {
  let out = '';
  let rest = s;
  for (let guard = 0; guard < 200; guard++) {
    const m = /\^\s*(-?)\(/.exec(rest);
    if (!m) break;
    const start = m.index + m[0].length;
    let depth = 1;
    let i = start;
    for (; i < rest.length && depth; i++) {
      if (rest[i] === '(') depth++;
      else if (rest[i] === ')') depth--;
    }
    if (depth) break;
    out += rest.slice(0, m.index) + '<sup>' + m[1] + rest.slice(start, i - 1) + '</sup>';
    rest = rest.slice(i);
  }
  return out + rest;
}

/** Everything that happens after escaping and after code spans are lifted out. */
function applyRules(s) {
  for (const [re, to] of OPS) s = s.replace(re, to);
  // twice, because the first pass consumes the middle operand of "1 x 1 x cos"
  for (let pass = 0; pass < 2; pass++) for (const [re, to] of MUL) s = s.replace(re, to);

  s = s.replace(/\b(\d[spdf])(\d+)\b/g, '$1<sup>$2</sup>');          // 3d5, 4s1

  // polyatomic ions keep the digit as a subscript: NH4+, OH-, MnO4-
  s = s.replace(/\b((?:[A-Z][a-z]?\d*){2,})([+-])(?![A-Za-z0-9])/g,
    (_, f, sign) => f.replace(/(\d+)/g, '<sub>$1</sub>') + '<sup>' + sign + '</sup>');

  // ion charges: Fe2+, Cu2+, Na+, Cl-. A digit or letter after the sign means it
  // is arithmetic (A2+B), not a charge.
  s = s.replace(/\b([A-Z][a-z]?)(\d*)([+-])(?![A-Za-z0-9])/g,
    (_, el, n, sign) => el + '<sup>' + n + sign + '</sup>');

  s = s.replace(/(\([A-Za-z0-9]*[A-Z][A-Za-z0-9]*\))(\d+)\b/g,   // Ca(OH)2
    '$1<sub>$2</sub>');

  s = s.replace(/\b((?:[A-Z][a-z]?\d*){2,})\b/g, (tok) =>            // H2SO4
    /\d/.test(tok) ? tok.replace(/(\d+)/g, '<sub>$1</sub>') : tok);
  s = s.replace(/\b([A-Z][a-z]?)(\d+)\b/g, '$1<sub>$2</sub>');       // O2, Cl2
  s = s.replace(/\b([A-Za-z])(\d)\b/g, '$1<sub>$2</sub>');           // n1, T2, S1

  // indexed symbols: a(i,j) -> a with a double subscript
  s = s.replace(/\b([A-Za-z])\(\s*([A-Za-z0-9]{1,2})\s*,\s*([A-Za-z0-9]{1,2})\s*\)/g,
    '$1<sub>$2$3</sub>');

  // sqrt() and abs() may be nested any number of levels deep, so the argument is
  // found by matching brackets rather than by a regular expression
  for (let pass = 0; pass < 4; pass++) {
    const before = s;
    s = replaceCall(s, 'abs', (x) => '<span class="abs">' + x + '</span>');
    s = replaceCall(s, 'sqrt', (x) => '<span class="sqrt">√<span class="rad">' + x + '</span></span>');
    if (s === before) break;
  }

  // sqrt2, sqrt n: written without brackets
  s = s.replace(/\bsqrt\s*([A-Za-z0-9]+)\b/g,
    (_, inner) => '<span class="sqrt">\u221a<span class="rad">' + inner + '</span></span>');

  s = supBrackets(s);
  // a base may already carry markup, as in d<sub>1</sub>^k, or be a bar or a prime.
  // digits are taken alone so that a^2e^2 does not swallow the e; a trailing sign is
  // an ion charge (MnO4^-, C2O4^2-) only when no digit or letter follows it.
  s = s.replace(
    /([A-Za-z0-9\)\]\}|>'\u2032])\^(-?\d+(?:[+-](?![A-Za-z0-9]))?|[+-]\d+|\d*[+-](?![A-Za-z0-9])|-?[A-Za-z]+\d*|\u221e)/g,
    (_, base, ex) => base + '<sup>' + ex + '</sup>');

  return s.replace(/\b([A-Za-z]+)\b/g, (w) =>
    Object.prototype.hasOwnProperty.call(GREEK, w) ? GREEK[w] : w);
}

/** A code span holding any of these is typeset as maths rather than left as code. */
const MATHY = new RegExp(
  '[=^]|\\bsqrt|&lt;=|&gt;=|\\bINT\\b|--?&gt;|\\+\\/-|\\b(' + Object.keys(GREEK).join('|') + ')\\b');

/** Spans that really are code, not algebra. "const" is left out on purpose: in
 *  these notes it means constant. */
const CODEY = /\.(md|ps1|js|py|cmd|json|html|css|txt)\b|\/\/|[{}$]|\b(npm|git|python|node)\b/;

/** A short span of nothing but algebra characters reads better set as maths
 *  than as monospace code in the middle of a sentence. */
const ALGEBRAIC = /^[A-Za-z0-9+\-*/^_().,';![\]\s]+$/;

const unesc = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/** Set an expression with KaTeX when it can be read as LaTeX, otherwise fall
 *  back to the plain HTML typesetter. `display` stacks fractions full size. */
function math(raw, display) {
  if (window.Tex && window.katex) {
    const tex = window.Tex.toTeX(raw);
    if (tex) {
      try {
        return window.katex.renderToString(tex, {
          displayMode: !!display, throwOnError: true, strict: false
        });
      } catch (e) { /* not valid after all: fall through */ }
    }
  }
  return typesetInline(raw);
}

function typesetInline(raw) {
  let s = esc(raw);
  // The notes use backticks for inline maths as well as for literal code, so
  // anything that looks like an expression is typeset rather than left as code.
  const held = [];
  s = s.replace(/`([^`]+)`/g, (_, code) => {
    const plain = unesc(code);
    const isMath = !CODEY.test(plain) &&
      (MATHY.test(code) || (plain.length <= 40 && ALGEBRAIC.test(plain) && /[A-Za-z0-9]/.test(plain)));
    held.push(isMath
      ? '<span class="imath">' + math(unesc(code)) + '</span>'
      : '<code>' + code + '</code>');
    return '\u0000' + (held.length - 1) + '\u0000';
  });

  s = applyRules(s);
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => held[+i]);
}

/* ------------------------------------------------------------ block parts */

const pad = (l, n) => (l.length >= n ? l : l + ' '.repeat(n - l.length));

/** Border runs that belong to a neighbouring box, not to this text. */
const dropFrames = (t) => t.replace(/\+[-=]{2,}\+/g, ' ').replace(/\s{2,}/g, ' ').trim();

/** One horizontal band that may hold SEVERAL matrices side by side, each with
 *  its own height, plus the labels sitting between them ("P =", "Q ="). */
function matrixBandAt(lines, i) {
  const spans = [];
  const re = /\+-{2,}\+/g;
  let m;
  while ((m = re.exec(lines[i])) !== null) spans.push({ s: m.index, e: m.index + m[0].length });
  if (!spans.length) return null;

  const parts = [];
  let end = i + 1;

  for (const sp of spans) {
    const rows = [];
    let bottom = -1;
    for (let j = i + 1; j < lines.length; j++) {
      const seg = pad(lines[j], sp.e).slice(sp.s, sp.e);
      if (/^\+-{2,}\+$/.test(seg)) { bottom = j; break; }
      if (seg.charAt(0) !== '|' || seg.charAt(seg.length - 1) !== '|') break;
      rows.push(seg.slice(1, -1).trim().split(/\s{2,}/).filter((c) => c !== ''));
    }
    if (bottom < 0 || !rows.length) return null;
    const w = rows[0].length;
    if (!w || !rows.every((r) => r.length === w)) return null;
    if (rows.some((r) => r.some((c) => c.length > 14))) return null;
    end = Math.max(end, bottom + 1);
    parts.push({ sp, rows, bottom });
  }

  // whatever sits in the gap before each matrix is its label
  let html = '';
  for (let k = 0; k < parts.length; k++) {
    const from = k ? parts[k - 1].sp.e : 0;
    const to = parts[k].sp.s;
    let label = '';
    for (let j = i; j <= parts[k].bottom && !label; j++) {
      label = pad(lines[j], to).slice(from, to).trim();
    }
    html += '<span class="matgroup">' +
      (label ? '<span class="matlabel">' + typesetInline(label) + '</span>' : '') +
      renderMatrix(parts[k].rows) + '</span>';
  }

  // trailing text to the right of the last matrix becomes the note
  const last = parts[parts.length - 1].sp.e;
  const notes = [];
  for (let j = i; j < end; j++) {
    const t = dropFrames((lines[j] || '').slice(last));
    if (t) notes.push(t);
  }

  return { end, html, notes };
}

/** Matrices drawn with bars only, no +---+ border, one or more side by side:
 *      A =  | 1   2 |     B =  | 5   6 |
 *           | 3   4 |          | 7   8 | */
function barMatrixAt(lines, i) {
  const barsIn = (l) => {
    const out = [];
    for (let k = 0; k < l.length; k++) if (l[k] === '|') out.push(k);
    return out;
  };
  const cols = barsIn(lines[i] || '');
  if (cols.length < 2 || cols.length % 2) return null;

  const spans = [];
  for (let k = 0; k < cols.length; k += 2) spans.push({ s: cols[k], e: cols[k + 1] });

  const rowsBySpan = spans.map(() => []);
  let j = i;
  for (; j < lines.length; j++) {
    const c = barsIn(lines[j] || '');
    if (c.length !== cols.length || c.some((v, k) => v !== cols[k])) break;
    spans.forEach((sp, k) =>
      rowsBySpan[k].push(lines[j].slice(sp.s + 1, sp.e).trim().split(/\s{2,}/).filter((t) => t !== '')));
  }
  if (j - i < 2) return null;                   // one row of bars is an absolute value

  for (const rows of rowsBySpan) {
    const w = rows[0].length;
    if (w < 2 || !rows.every((r) => r.length === w)) return null;
    if (rows.some((r) => r.some((c) => c.length > 14))) return null;
  }

  let html = '';
  spans.forEach((sp, k) => {
    const from = k ? spans[k - 1].e + 1 : 0;
    let label = '';
    for (let r = i; r < j && !label; r++) label = pad(lines[r], sp.s).slice(from, sp.s).trim();
    html += '<span class="matgroup">' +
      (label ? '<span class="matlabel">' + math(label) + '</span>' : '') +
      renderMatrix(rowsBySpan[k]) + '</span>';
  });

  const last = spans[spans.length - 1].e + 1;
  const note = lines.slice(i, j).map((l) => dropFrames((l || '').slice(last)))
    .filter(Boolean).join('  ');
  return { end: j, html, note: note ? typesetInline(note) : '' };
}

function renderMatrix(rows) {
  const cells = rows.map((r) =>
    r.map((c) => '<span class="mcell">' + typesetInline(c) + '</span>').join('')
  ).join('');
  return '<span class="mat" style="--cols:' + rows[0].length + '">' +
         '<span class="mgrid">' + cells + '</span></span>';
}

/** One or more horizontal bars on a line, each with a numerator above and a
 *  denominator below, plus whatever joins them ("a/b + c/d + ... = e/f"). */
function fractionAt(lines, i) {
  const cur = lines[i];
  const prev = lines[i - 1];
  const next = lines[i + 1];
  if (prev === undefined || next === undefined) return null;
  // A bar beside a matrix is that matrix's bracket, not a fraction line. Bars
  // that pair up around one term are absolute values, and those are allowed.
  const bracket = (l) => {
    const t = (l || '').trim();
    const n = (t.match(/\|/g) || []).length;
    if (!n) return false;
    if (n % 2 === 1) return true;                    // an unmatched bracket bar
    // an absolute value hugs a short term; a matrix row does not
    return !/\|[^|]{1,14}\|/.test(t) || /\s{3,}/.test(t);
  };
  if (bracket(prev) || bracket(cur) || bracket(next)) return null;

  const runs = [];
  const re = /-{3,}/g;
  let m;
  while ((m = re.exec(cur))) {
    const e = m.index + m[0].length;
    if (/[->]/.test(cur.charAt(e))) return null;           // part of an arrow
    runs.push([m.index, e]);
  }
  if (!runs.length) return null;
  // Several rules side by side with nothing joining them is the rule under a
  // table header, not a row of fractions.
  if (runs.length > 1) {
    const joined = runs.slice(1).some((r, k) => cur.slice(runs[k][1], r[0]).trim());
    if (!joined) return null;
  }

  const seg = (l, s, e) => pad(l || '', e).slice(s, e).trim();
  const first = runs[0][0];
  if (next.slice(0, first).trim()) return null;            // denominator must start under the bar
  const label = prev.slice(0, first).trim();               // e.g. a list marker beside the numerator
  if (label.length > 6) return null;
  // a bracket left open means the formula is spread over more lines than these
  const open = (l) => (l.match(/\(/g) || []).length - (l.match(/\)/g) || []).length;
  if (open(prev) !== 0 || open(next) !== 0) return null;

  const parts = [];
  for (const [s, e] of runs) {
    const num = seg(prev, s, e);
    const den = seg(next, s, e);
    if (!num || !den) return null;
    parts.push(frac(num, den));
  }

  // whatever sits between two bars is the operator joining the fractions
  let html = '';
  for (let k = 0; k < parts.length; k++) {
    if (k) {
      const gap = [cur.slice(runs[k - 1][1], runs[k][0]), seg(prev, runs[k - 1][1], runs[k][0])]
        .map((t) => t.trim()).filter(Boolean).join(' ');
      html += gap ? ' ' + typesetInline(gap) + ' ' : ' ';
    }
    html += parts[k];
  }

  const lead = [label, cur.slice(0, first).trim()].filter(Boolean).join(' ');
  const last = runs[runs.length - 1][1];
  return {
    html: runs.length === 1
      ? fracRow(lead, seg(prev, runs[0][0], runs[0][1]), seg(next, runs[0][0], runs[0][1]))
      : (lead ? typesetInline(lead) + ' ' : '') + html,
    rhs: [cur.slice(last), prev.slice(last), next.slice(last)]
      .map(dropFrames).filter(Boolean).join('  ')
  };
}

const frac = (n, d) =>
  '<span class="frac"><span class="num">' + typesetInline(n) +
  '</span><span class="den">' + typesetInline(d) + '</span></span>';

/** A whole "lhs = num/den" row, set by KaTeX when every part converts. */
function fracRow(lhs, num, den) {
  if (window.Tex && window.katex) {
    const L = lhs ? window.Tex.toTeX(lhs, true) : '';
    const N = window.Tex.toTeX(num, true);
    const D = window.Tex.toTeX(den, true);
    if ((!lhs || L) && N && D) {
      try {
        return window.katex.renderToString(
          (L ? L + ' ' : '') + '\\dfrac{' + N + '}{' + D + '}',
          { throwOnError: true, strict: false });
      } catch (e) { /* fall through */ }
    }
  }
  return (lhs ? typesetInline(lhs) + ' ' : '') + frac(num, den);
}

/* ---------------------------------------------------------------- blocks */

function isArt(lines) {
  const body = lines.filter((l) => l.trim() !== '');
  if (!body.length) return true;
  for (const l of body) {
    if (/\\/.test(l)) return true;                 // drawn branches
    if (/_{3,}/.test(l)) return true;              // drawn baselines
    if (/\|-{2,}|-{2,}\|/.test(l)) return true;    // boxes joined by arrows
    if (/\+-+\+-+\+/.test(l)) return true;         // tree connector or grid rule
    if (/-{3,}\+-{3,}/.test(l)) return true;       // a drawn axis crossing
    if (/[^-+\s][^+]*-{2,}\+\s*$/.test(l)) return true;   // a drawn corner after text
    if (/-{2,}\+-{2,}/.test(l)) return true;       // a drawn junction
    if (/\+-{4,}[^+]*$/.test(l)) return true;      // a long rule that never closes
    if (/-{2,}>\s*\|/.test(l) || /\|\s*-{2,}>/.test(l)) return true;   // an arrow into a box
    if (/\+-{2,}>/.test(l)) return true;           // a drawn axis with an arrow head
    if (/\+-{2,}/.test(l) && />\s*[A-Za-z]?\s*$/.test(l)) return true;   // axis with points on it
    if (/\*{2,}/.test(l)) return true;             // a plotted curve
    if (/\|/.test(l) && /[.*]/.test(l) && /^[\s|.*]*$/.test(l)) return true;   // dotted construction
    if (/^\s*\^\s*$/.test(l)) return true;         // the tip of a drawn axis
    if (/^\s*\/+\s*$/.test(l)) return true;        // a drawn slanted line
  }
  return false;
}

/** A +---+---+ grid table becomes a real table rather than monospace.
 *  Cells are cut at the column positions given by the rule line, so a stray bar
 *  inside a cell (an absolute value) does not shift every column along. */
const AS_ART = { art: true };

function asciiTable(lines) {
  const all = lines.filter((l) => l.trim() !== '');
  const edge = (l) => /^\s*\+[-+]+\+\s*$/.test(l) && (l.match(/\+/g) || []).length > 2;

  // A sentence may introduce or follow the table; it is kept, not thrown away.
  // A plus inside it is arithmetic unless it is drawing a rule.
  const structural = (l) => /\|/.test(l) || /\+[-=]{2,}|[-=]{2,}\+/.test(l);
  let from = 0;
  while (from < all.length && !edge(all[from])) {
    if (structural(all[from])) return null;
    from++;
  }
  if (from >= all.length) return null;
  let to = all.length;
  while (to > from && !edge(all[to - 1]) && !/^\s*\|/.test(all[to - 1])) {
    if (structural(all[to - 1])) return null;
    to--;
  }
  const lead = all.slice(0, from);
  const tail = all.slice(to);
  const body = all.slice(from, to);
  if (body.length < 3) return null;

  const cols = [];
  for (let k = 0; k < body[0].length; k++) if (body[0][k] === '+') cols.push(k);
  const width = cols.length - 1;
  if (width < 2) return null;

  const groups = [];
  let cur = [];
  for (const l of body) {
    if (edge(l)) { if (cur.length) { groups.push(cur); cur = []; } continue; }
    if (!/^\s*\|/.test(l)) return null;
    // cut at the rule positions when the row lines up, otherwise fall back to
    // splitting on the bars
    if (cols.every((c) => c >= l.length || l[c] === '|')) {
      cur.push(cols.slice(0, -1).map((c, k) =>
        (k === width - 1 ? l.slice(c + 1) : l.slice(c + 1, cols[k + 1]))
          .replace(/\|\s*$/, '').trim()));
    } else {
      const parts = l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      if (parts.length !== width) return null;
      cur.push(parts);
    }
  }
  if (cur.length) groups.push(cur);
  if (!groups.length) return null;
  // cells holding wires, hatching or rules are a drawing laid out in a grid
  if (groups.some((g) => g.some((r) => r.some((c) => /-{2,}|~{2,}|\|{2,}|_{2,}/.test(c))))) {
    return AS_ART;
  }

  const cell = (c, tag) => '<' + tag + '>' + math(c) + '</' + tag + '>';
  const head = groups.length > 1
    ? '<thead>' + groups[0].map((r) => '<tr>' + r.map((c) => cell(c, 'th')).join('') + '</tr>').join('') + '</thead>'
    : '';
  const rest = groups.length > 1 ? groups.slice(1) : groups;
  const bodyHtml = rest.map((g) =>
    g.map((r) => '<tr>' + r.map((c) => cell(c, 'td')).join('') + '</tr>').join('')).join('');

  const note = (ls) => ls.map((l) => '<p class="tnote">' + typesetInline(l.trim()) + '</p>').join('');
  return '<div class="tablewrap">' + note(lead) +
         '<table>' + head + '<tbody>' + bodyHtml + '</tbody></table>' + note(tail) + '</div>';
}

/** Split "formula          note" into its two columns.
 *  The gap that starts the note is looked for AFTER the first '=', and never
 *  between a pair of bars, so a matrix row is not cut in half. */
function splitRow(line) {
  const t = line.trim();
  const eq = t.indexOf('=');
  const from = eq >= 0 ? eq + 1 : 0;
  let inBars = false;
  for (let i = from; i < t.length; i++) {
    if (t[i] === '|') { inBars = !inBars; continue; }
    if (!inBars && /^\s{3,}/.test(t.slice(i))) {
      return { expr: t.slice(0, i).trim(), note: t.slice(i).trim() };
    }
  }
  return { expr: t, note: '' };
}

const DIVIDER = '\u0001';

/** Strip a +----+ / +====+ panel frame. Internal rules become section dividers.
 *  Text may sit outside the frame, before or after it. */
function unframe(lines) {
  const body = lines.filter((l) => l.trim() !== '');
  if (body.length < 3) return null;
  const edge = (l) => /^\s*\+[-=]+\+\s*$/.test(l);

  const first = body.findIndex(edge);
  if (first < 0) return null;
  let last = -1;
  for (let i = body.length - 1; i > first; i--) if (edge(body[i])) { last = i; break; }
  if (last < 0) return null;

  const outside = body.slice(0, first).concat(body.slice(last + 1));
  // a caption may sit outside the panel; only a bar in the frame's own column, or
  // another edge, means this is not a single panel
  const edgeCol = body[first].indexOf('+');
  if (outside.some((l) => l.indexOf('|') === edgeCol || /^\s*\+[-=]/.test(l) || /[-=]\+\s*$/.test(l))) {
    return null;
  }

  const out = body.slice(0, first);
  let barred = 0;
  for (const l of body.slice(first + 1, last)) {
    if (edge(l)) { out.push(DIVIDER); continue; }
    if (/^\s*\|/.test(l)) {
      // the closing bar is often missing where a row runs to the frame edge
      out.push(l.replace(/^\s*\|/, '').replace(/\|\s*$/, ''));
      barred++;
      continue;
    }
    out.push(l);                       // a heading sitting between two panels
  }
  if (!barred) return null;
  out.push.apply(out, body.slice(last + 1));
  return out.length ? out : null;
}

/** Greek names and arrows inside a diagram, but only where nothing is column
 *  aligned after them, since these glyphs are narrower than the words. */
const ART_WORD = new RegExp('\\b(' + Object.keys(GREEK).join('|') + ')\\b|&lt;=|&gt;=|!=', 'g');
const DRAWN = /[\u2500\u2502\u250c\u2510\u2514\u2518\u251c\u2524\u252c\u2534\u253c|]/;

function artInline(line) {
  ART_WORD.lastIndex = 0;
  const first = ART_WORD.exec(line);
  if (!first) return line;
  // padding keeps the columns when something is lined up further along the line
  const after = line.slice(first.index + first[0].length);
  const aligned = /\s{2,}\S/.test(after) || DRAWN.test(after);
  return line.replace(ART_WORD, (m) => {
    const sym = Object.prototype.hasOwnProperty.call(GREEK, m) ? GREEK[m] :
      ({ '&lt;=': '\u2264', '&gt;=': '\u2265', '!=': '\u2260' })[m] || m;
    if (!aligned || sym === m) return sym;
    const shown = m.replace(/&(gt|lt|amp);/g, ' ').length;
    return sym + ' '.repeat(Math.max(0, shown - 1));
  });
}

/** Redraw an indented +-- tree with box drawing glyphs, one char for one char
 *  so the column alignment the diagram depends on is preserved exactly. */
function prettyTree(lines) {
  if (!lines.some((l) => /\+-|-\+/.test(l))) return null;
  if (lines.some((l) => /^\s*\+-+\+\s*$/.test(l))) return null;   // that is a box, not a tree

  const g = lines.map((l) => l.split(''));
  const at = (r, c) => (g[r] && g[r][c]) || ' ';
  const BOX = '─│┌┐└┘├┤┬┴┼';

  for (let r = 0; r < g.length; r++)
    for (let c = 0; c < g[r].length; c++)
      if (g[r][c] === '|') g[r][c] = '│';

  const scan = (r, c, step) => {
    for (let k = r + step; k >= 0 && k < g.length; k += step) {
      const d = at(k, c);
      if (d === '│' || d === '+') return true;
      if (d !== ' ') return false;
    }
    return false;
  };

  for (let r = 0; r < g.length; r++) {
    for (let c = 0; c < g[r].length; c++) {
      if (g[r][c] !== '+') continue;
      const left = at(r, c - 1) === '-';
      const right = at(r, c + 1) === '-';
      const up = scan(r, c, -1);
      const down = scan(r, c, 1);
      g[r][c] =
        up && down && left && right ? '┼' :
        down && left && right ? '┬' :
        up && left && right ? '┴' :
        down && right ? '┌' :
        down && left ? '┐' :
        up && right ? '└' :
        up && left ? '┘' :
        left && right ? '─' : '+';
    }
  }

  // only dash runs that touch box work become rules, so hyphens in words survive
  for (let r = 0; r < g.length; r++) {
    for (let c = 0; c < g[r].length; c++) {
      if (g[r][c] !== '-') continue;
      let e = c;
      while (g[r][e] === '-') e++;
      if (e - c >= 2 && (BOX.includes(at(r, c - 1)) || BOX.includes(at(r, e)))) {
        for (let k = c; k < e; k++) g[r][k] = '─';
      }
      c = e - 1;
    }
  }

  // where a rail runs out into the next label, point at it
  for (let r = 0; r < g.length; r++) {
    for (let c = 0; c < g[r].length; c++) {
      if (g[r][c] !== '\u2502') continue;
      const below = at(r + 1, c);
      if (BOX.includes(below) || below === '+') continue;
      if ((g[r + 1] || []).join('').trim()) g[r][c] = '\u25bc';
    }
  }
  return g.map((r) => r.join(''));
}

/** Split "label ....... formula" or "label    formula" into its two halves. */
function outlineSplit(text) {
  const dots = /\s\.+\s+/.exec(text);
  if (dots) return { label: text.slice(0, dots.index).trim(), value: text.slice(dots.index + dots[0].length).trim() };
  const gap = /\s{2,}/.exec(text);
  if (gap) {
    const left = text.slice(0, gap.index);
    const right = text.slice(gap.index).trim();
    // only peel a formula off the right when the left is a plain label
    if (right.includes('=') && !left.includes('=')) return { label: left.trim(), value: right };
  }
  return { label: text.trim(), value: '' };
}

const BULLET = ['\u25cf', '\u25b8', '\u25e6', '\u2013'];

/** An indented "+--" outline becomes a real bulleted list: the | rails and the
 *  +-- markers are structure, not content, so they are turned into indentation
 *  and bullets instead of being printed. */
function outlineTree(lines) {
  const body = lines.filter((l) => l.trim() !== '');
  if (body.length < 4) return null;

  const BRANCH = /^([\s|]*)\+--\s?(.*)$/;
  let branches = 0;
  for (const l of body) {
    if (/\\|_{3,}|\|-{2,}|\+-{3,}|-{2,}\+/.test(l)) return null;   // real diagram
    if (BRANCH.test(l)) { branches++; continue; }
    if (/\+[-+|]|[-+|]\+/.test(l)) return null;                    // a drawn joint, not "a + b"
  }
  if (branches < 3) return null;

  const cols = Array.from(new Set(body.filter((l) => BRANCH.test(l)).map((l) => l.indexOf('+'))))
    .sort((a, b) => a - b);

  const items = [];
  for (const l of body) {
    const m = BRANCH.exec(l);
    if (m) { items.push({ lvl: cols.indexOf(l.indexOf('+')), text: m[2].trim(), cont: [] }); continue; }
    if (/^[\s|]*$/.test(l)) continue;                              // a bare rail
    const text = l.replace(/\|/g, ' ').trim();
    const last = items[items.length - 1];
    if (!last) items.push({ title: true, text });
    else if (last.title) last.text += ' ' + text;
    else last.cont.push(text);
  }
  if (!items.length) return null;

  let hasVal = false;
  const html = items.map((it) => {
    if (it.title) return '<div class="ol-title">' + typesetInline(it.text) + '</div>';
    const { label, value } = outlineSplit(it.text);
    const val = [value].concat(it.cont).filter(Boolean).join('   ');
    if (val) hasVal = true;
    const mathCls = !val && label.includes('=') ? ' math' : '';
    const lab = '<div class="ol-lab' + mathCls + (val ? '' : ' wide') + '" style="--lvl:' + it.lvl + '">' +
      '<span class="ol-b">' + BULLET[Math.min(it.lvl, BULLET.length - 1)] + '</span>' +
      '<span>' + (mathCls ? math(label) : typesetInline(label)) + '</span></div>';
    return val ? lab + '<div class="ol-val">' + math(val) + '</div>' : lab;
  }).join('');

  return '<div class="outline' + (hasVal ? '' : ' solo') + '">' + html + '</div>';
}

/** A monospace diagram, tagged with its width so it can be scaled to fit. */
function artBlock(lines) {
  const cols = lines.reduce((n, l) => Math.max(n, l.length), 0);
  return '<pre class="art" style="--cols:' + Math.max(cols, 20) + '">' +
         lines.map((l) => artInline(esc(l))).join('\n') + '</pre>';
}

/** Sentences that happened to be fenced: set them as prose, not as code. */
function proseBlock(lines) {
  const paras = [];
  let cur = [];
  for (const l of lines) {
    if (l.trim()) cur.push(l.trim());
    else if (cur.length) { paras.push(cur.join(' ')); cur = []; }
  }
  if (cur.length) paras.push(cur.join(' '));
  if (!paras.length) return '';
  return '<div class="proseblock">' +
    paras.map((p) => '<p>' + typesetInline(p) + '</p>').join('') + '</div>';
}

/** Is this single line part of a drawing? Same tests as isArt, one line at a time. */
function isDrawnLine(l) {
  return isArt([l]) && l.trim() !== '';
}

/** Render as a card, unless doing so would print box drawing, in which case the
 *  lines were a picture after all. */
function cardOrArt(lines) {
  const html = renderRows(lines, lines.join('\n'));
  const text = html.replace(/<[^>]+>/g, ' ');
  // A leaked frame bar is unmatched inside its cell, or wraps a whole equation.
  // Bars that pair up around a short term are absolute values and are fine.
  const cells = [];
  const CELL = /<div class="(?:expr|cap)[^"]*">([\s\S]*?)<\/div>/g;
  let m;
  while ((m = CELL.exec(html)) !== null) cells.push(m[1].replace(/<[^>]+>/g, '').trim());
  const stray = cells.filter((c) => {
    if (!/^\|/.test(c) || !/\|$/.test(c)) return false;
    // a lone pair of bars around a whole equation is a frame; bars that pair up
    // around short terms are absolute values
    return (c.match(/\|/g) || []).length === 2 && c.length > 20;
  }).length;
  const leaks = /\+--|--\+|\+==|==\+/.test(text) ||
    (stray >= 2 && !/class="mat"/.test(html));
  return leaks ? artBlock(prettyTree(lines) || lines) : html;
}

function renderBlock(code) {
  const raw = code.replace(/\r/g, '').replace(/\s+$/, '');
  const lines = raw.split('\n');

  const table = asciiTable(lines);
  if (table === AS_ART) return artBlock(lines);
  if (table) return table;

  const outline = outlineTree(lines);
  if (outline) return outline;

  // A fenced block is one picture or one sheet of formulas, never a mixture of
  // both: splitting it would cut the connecting lines of a diagram.
  // A panel is a box drawn AROUND formulas, so it still reads as a sheet.
  if (unframe(lines)) return cardOrArt(lines);
  if (lines.some(isDrawnLine)) return artBlock(prettyTree(lines) || lines);
  return cardOrArt(lines);
}

function renderRows(input, raw) {
  let lines = input;

  // a callout box is unframed first; a bare matrix box is left for the parser
  let framed = false;
  if (!matrixBandAt(lines, 0)) {
    const inner = unframe(lines);
    if (inner) { lines = inner; framed = true; }
  }

  const rows = [];
  let i = 0;
  let sawStructure = false;

  while (i < lines.length) {
    const line = lines[i];
    if (line === DIVIDER) { rows.push({ divider: true }); i++; continue; }
    if (!line.trim()) { rows.push({ gap: true }); i++; continue; }

    const mat = matrixBandAt(lines, i);
    if (mat) {
      sawStructure = true;
      rows.push({ expr: mat.html, note: mat.notes.map(typesetInline).join('<br>') });
      i = mat.end;
      continue;
    }

    const bar = barMatrixAt(lines, i);
    if (bar) {
      sawStructure = true;
      rows.push({ expr: bar.html, note: bar.note });
      i = bar.end;
      continue;
    }

    // look ahead: this line may be the numerator of a fraction on the next line
    const fr = fractionAt(lines, i + 1);
    if (fr) {
      sawStructure = true;
      const tail = splitRow(fr.rhs);
      rows.push({
        expr: fr.html,
        note: [tail.expr, tail.note].filter(Boolean).map((t) => math(t)).join('  ')
      });
      i += 3;
      continue;
    }

    // A line with several wide gaps is a column layout (a balanced equation, a
    // table of values). Claim the whole run before the rule branch below takes
    // only the first three lines of it.
    const colShape = (l) => {
      const t = (l || '').replace(/\+[-=]{2,}\+/g, ' ').trim();
      return Boolean(t) && !t.includes('=') && (t.match(/\s{3,}/g) || []).length >= 2;
    };
    if (colShape(line) && (colShape(lines[i - 1]) || colShape(lines[i + 1]))) {
      const grp = [];
      while (i < lines.length &&
             (colShape(lines[i]) || /^[\s-]*-{2,}[\s-]*$/.test(lines[i]))) {
        grp.push(lines[i].replace(/\+[-=]{2,}\+/g, (m) => ' '.repeat(m.length))
          .replace(/\s+$/, ''));
        i++;
      }
      rows.push({ expr: typesetInline(grp.join('\n')), aligned: true });
      continue;
    }

    // a bar we could not read as a fraction: keep the three lines as they were
    // drawn rather than printing the bar as a row of dashes
    if (/^[\s\-,()]*-{3,}[\s\-,()]*$/.test(lines[i + 1] || '')) {
      const grp = [lines[i], lines[i + 1], lines[i + 2]].filter((l) => l !== undefined);
      rows.push({ expr: typesetInline(grp.join('\n').replace(/\s+$/, '')), aligned: true });
      i += 3;
      continue;
    }

    if (/^\s*(\+[-=+]+\+[ \t]*)+$/.test(line)) { i++; continue; }   // leftover frame

    // no pipe stripping here: unframe() has already removed any real frame, so a
    // remaining | is an absolute value bar such as |x| >= 0
    // a +---+ run still on a line of text is decoration the parser could not
    // use; blank it rather than print it, keeping the columns the rest relies on
    const clean = line.replace(/\+[-=]{2,}\+/g, (m) => ' '.repeat(m.length));

    const { expr, note } = splitRow(clean);
    // a heading is all capitals with real words in it, and carries no note of its
    // own; "2 H2" is a formula, not a heading
    const caption = !note && !expr.includes('=') && !/[a-z]/.test(expr) &&
      (expr.match(/[A-Z]/g) || []).length >= 4;
    rows.push({ expr: math(expr), note: note ? math(note) : '', caption });
    i++;
  }

  while (rows.length && (rows[0].gap || rows[0].divider)) rows.shift();
  while (rows.length && (rows[rows.length - 1].gap || rows[rows.length - 1].divider)) rows.pop();
  // a run of blank source lines should not become a run of empty rows
  for (let k = rows.length - 1; k > 0; k--) {
    const a = rows[k], b = rows[k - 1];
    if ((a.gap || a.divider) && (b.gap || b.divider)) rows.splice(a.divider ? k - 1 : k, 1);
  }
  if (!rows.length) return artBlock(raw.split('\n'));

  const hasMath = sawStructure ||
    rows.some((r) => !r.gap && !r.divider && /[=\u2264\u2265\u2260\u2192\u27f6\u00b1\u00d7\u222b\u2211\u221a]/.test(r.expr));
  if (!hasMath && !framed) {
    const src = raw.split('\n');
    // monospace is only worth its cramped look when something is lined up in it
    const aligned = src.filter((l) => /\S\s{3,}\S/.test(l)).length >= 2;
    if (!aligned && !src.some(isDrawnLine)) return proseBlock(src);
    return artBlock(prettyTree(src) || src);
  }

  const hasNote = rows.some((r) => r.note);
  // flat grid markup so every formula in a block lines up on the same column
  const html = rows.map((r) => {
    if (r.gap) return '<div class="spacer"></div>';
    if (r.divider) return '<div class="fdiv"></div>';
    if (r.caption) return '<div class="cap">' + r.expr + '</div>';
    if (r.aligned) return '<div class="expr wide algn">' + r.expr + '</div>';
    // a prose line with no formula and no note reads better across both columns
    const wide = !r.note && !r.expr.includes('=') ? ' wide' : '';
    return '<div class="expr' + wide + '">' + r.expr + '</div>' +
           (wide ? '' : '<div class="note">' + (r.note || '') + '</div>');
  }).join('');

  return '<div class="fsheet' + (hasNote ? '' : ' solo') + '">' + html + '</div>';
}

window.Typeset = { inline: typesetInline, block: renderBlock, esc, unframe };
