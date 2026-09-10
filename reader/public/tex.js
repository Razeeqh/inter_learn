/* Plain-text maths -> LaTeX.
 *
 * The chapter files are written in readable ASCII ("sqrt(b^2 - 4ac)", "theta",
 * "<=", "H2SO4"). This turns that into LaTeX so KaTeX can set it the way a
 * textbook would. Anything it cannot read confidently returns null and the
 * caller falls back to the plain HTML typesetter. */

const GREEK_TEX = {
  alpha: 'alpha', beta: 'beta', gamma: 'gamma', delta: 'delta', epsilon: 'varepsilon',
  zeta: 'zeta', eta: 'eta', theta: 'theta', iota: 'iota', kappa: 'kappa',
  lambda: 'lambda', mu: 'mu', nu: 'nu', xi: 'xi', pi: 'pi', rho: 'rho',
  sigma: 'sigma', tau: 'tau', phi: 'phi', chi: 'chi', psi: 'psi', omega: 'omega',
  Gamma: 'Gamma', Delta: 'Delta', Theta: 'Theta', Lambda: 'Lambda', Xi: 'Xi',
  Pi: 'Pi', Sigma: 'Sigma', Phi: 'Phi', Psi: 'Psi', Omega: 'Omega'
};

// set upright, the way a textbook prints a function name
const FUNCS = {
  arcsin: 'arcsin', arccos: 'arccos', arctan: 'arctan',
  sinh: 'sinh', cosh: 'cosh', tanh: 'tanh', coth: 'coth',
  sin: 'sin', cos: 'cos', tan: 'tan', cot: 'cot', sec: 'sec', csc: 'csc',
  cosec: 'csc', log: 'log', ln: 'ln', exp: 'exp', det: 'det', gcd: 'gcd',
  max: 'max', min: 'min'
};

const RELATIONS = [
  ['<=>', '\\iff'], ['<-->', '\\longleftrightarrow'], ['<->', '\\leftrightarrow'],
  ['-->', '\\longrightarrow'], ['<--', '\\longleftarrow'],
  ['=>', '\\implies'], ['->', '\\to'], ['<-', '\\gets'],
  ['<=', '\\le'], ['>=', '\\ge'], ['!=', '\\ne'], ['~=', '\\approx'],
  ['=', '='], ['<', '<'], ['>', '>'], [',', ',']
];

const INFIX = [
  ['+/-', '\\pm'], ['-/+', '\\mp'], ['...', '\\dots'], ['*', '\\cdot'],
  ['\u00bd', '\\tfrac{1}{2}'], ['\u00bc', '\\tfrac{1}{4}'], ['\u00be', '\\tfrac{3}{4}']
];

const OPEN = { '(': ')', '[': ']', '{': '}' };
const CLOSE = ')]}';

/* Emitted LaTeX is parked so that later passes cannot chew on it. */
let HELD = [];
const hold = (tex) => '\u0001' + (HELD.push(tex) - 1) + '\u0001';
const expand = (s) => s.replace(/\u0001(\d+)\u0001/g, (_, i) => HELD[+i]);

function matchBracket(s, open) {
  let depth = 0;
  for (let i = open; i < s.length; i++) {
    if (OPEN[s[i]]) depth++;
    else if (CLOSE.includes(s[i])) { depth--; if (!depth) return i; }
  }
  return -1;
}

function isBalanced(s) {
  let depth = 0;
  for (const c of s) {
    if (OPEN[c]) depth++;
    else if (CLOSE.includes(c)) { depth--; if (depth < 0) return false; }
  }
  return depth === 0;
}

/** Cut the text at every top level relation, keeping the relations. */
function splitRelations(s) {
  const parts = [];
  let depth = 0;
  let last = 0;
  for (let i = 0; i < s.length; i++) {
    if (OPEN[s[i]]) { depth++; continue; }
    if (CLOSE.includes(s[i])) { depth--; continue; }
    if (depth) continue;
    for (const [sym, tex] of RELATIONS) {
      if (s.startsWith(sym, i)) {
        parts.push({ text: s.slice(last, i) }, { rel: tex });
        i += sym.length - 1;
        last = i + 1;
        break;
      }
    }
  }
  parts.push({ text: s.slice(last) });
  return parts;
}

/** One top level '/', ignoring brackets. */
function splitSlash(s) {
  let depth = 0;
  let at = -1;
  for (let i = 0; i < s.length; i++) {
    if (OPEN[s[i]]) depth++;
    else if (CLOSE.includes(s[i])) depth--;
    else if (!depth && s[i] === '/') { if (at >= 0) return null; at = i; }
  }
  return at < 0 ? null : [s.slice(0, at), s.slice(at + 1)];
}

/** The argument a function applies to, starting at i. */
function argAt(s, i) {
  while (s[i] === ' ') i++;
  if (OPEN[s[i]]) {
    const close = matchBracket(s, i);
    if (close < 0) return null;
    return { text: s.slice(i + 1, close), end: close + 1 };
  }
  const m = /^\u0001\d+\u0001|^[A-Za-z]+|^\d+(?:\.\d+)?/.exec(s.slice(i));
  return m ? { text: m[0], end: i + m[0].length } : null;
}

/* ------------------------------------------------------------------ passes */

function calls(s, fail) {
  // abs and norm become one atom, so that a later split cannot separate the
  // opening delimiter from its closing one
  const wraps = [
    ['sqrt', (a) => hold('\\sqrt') + '{' + expr(a, fail) + '}'],
    ['abs', (a) => hold('\\left|' + expand(expr(a, fail)) + '\\right|')],
    ['norm', (a) => hold('\\left\\|' + expand(expr(a, fail)) + '\\right\\|')]
  ];
  for (const [name, wrap] of wraps) {
    const re = new RegExp('\\b' + name + '\\s*');
    let out = '';
    let rest = s;
    for (let guard = 0; guard < 60; guard++) {
      const m = re.exec(rest);
      if (!m) break;
      const arg = argAt(rest, m.index + m[0].length);
      if (!arg) { fail.hit = true; break; }
      out += rest.slice(0, m.index) + wrap(arg.text);
      rest = rest.slice(arg.end);
    }
    s = out + rest;
  }
  return s;
}

function scripts(s, fail) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '^' && s[i] !== '_') { out += s[i]; continue; }
    const sign = /^\s*([+-])(?![A-Za-z0-9])/.exec(s.slice(i + 1));
    if (sign) { out += s[i] + '{' + sign[1] + '}'; i += sign[0].length; continue; }
    const arg = argAt(s, i + 1);
    if (!arg) { fail.hit = true; return s; }
    out += s[i] + '{' + expr(arg.text, fail) + '}';
    i = arg.end - 1;
  }
  return out;
}

const CHEM = /^(?:[A-Z][a-z]?\d*){2,}$/;
const roman = (t) => hold('\\mathrm{' + t.replace(/(\d+)/g, '_{$1}') + '}');

function chemistry(s) {
  s = s.replace(/\b((?:[A-Z][a-z]?\d*){2,})([+-])(?![A-Za-z0-9])/g,
    (_, f, sign) => hold('\\mathrm{' + f.replace(/(\d+)/g, '_{$1}') + '}^{' + sign + '}'));
  s = s.replace(/\b([A-Z][a-z]?)(\d*)([+-])(?![A-Za-z0-9])/g,
    (_, el, n, sign) => hold('\\mathrm{' + el + '}^{' + n + sign + '}'));
  s = s.replace(/(\([A-Za-z0-9]*[A-Z][A-Za-z0-9]*\))(\d+)\b/g, '$1_{$2}');
  return s.replace(/\b((?:[A-Z][a-z]?\d*){2,})\b/g,
    (tok) => (/\d/.test(tok) && CHEM.test(tok) ? roman(tok) : tok));
}

// English words that turn up as annotations beside a formula
const PLAIN = ['not', 'and', 'or', 'if', 'when', 'where', 'for', 'all', 'any',
  'is', 'to', 'of', 'in', 'at', 'on', 'per', 'each', 'only', 'else', 'then'];

function words(s) {
  return s.replace(/\b([A-Za-z]+)\b/g, (w) => {
    if (Object.prototype.hasOwnProperty.call(GREEK_TEX, w)) return hold('\\' + GREEK_TEX[w]);
    if (Object.prototype.hasOwnProperty.call(FUNCS, w)) return hold('\\' + FUNCS[w]);
    if (w === 'INT') return hold('\\int');
    if (w === 'SUM') return hold('\\sum');
    if (w === 'infinity' || w === 'inf') return hold('\\infty');
    if (/^d[xytrsuv]$/.test(w)) return hold('\\,\\mathrm{d}' + w[1]);   // a differential
    if (PLAIN.includes(w)) return hold('\\text{ ' + w + ' }');
    if (w.length > 1 && /[A-Z]/.test(w)) return hold('\\mathrm{' + w + '}');   // a name
    return w;                                        // single letters, or a product like 4ac
  });
}

/** Split on top level + and -, keeping the operators. */
function terms(s) {
  const out = [];
  let depth = 0;
  let last = 0;
  for (let i = 0; i < s.length; i++) {
    if (OPEN[s[i]]) depth++;
    else if (CLOSE.includes(s[i])) depth--;
    else if (!depth && i > 0 && (s[i] === '+' || s[i] === '-')) {
      out.push(s.slice(last, i), s[i]);
      last = i + 1;
    }
  }
  out.push(s.slice(last));
  return out;
}

const bracketed = (t) => {
  const u = t.trim();
  return u.startsWith('(') && matchBracket(u, 0) === u.length - 1;
};
const strip = (t) => (bracketed(t) ? t.trim().slice(1, -1) : t.trim());

/** a/b becomes a stacked fraction when each side stands on its own. */
function stack(chunk) {
  const halves = splitSlash(chunk);
  if (!halves) return chunk;
  const usable = (t) => t.trim() && (bracketed(t) || !/[+-]/.test(t.trim().replace(/^\s*[+-]/, '')));
  if (!usable(halves[0]) || !usable(halves[1])) return chunk;
  // an integral sign or a differential belongs outside the fraction, and
  // working out where takes a real parser, so leave the slash inline
  const spans = (t) => /\u0001(\d+)\u0001/g.test(t) &&
    (t.match(/\u0001(\d+)\u0001/g) || []).some((p) => /\\int|\\sum|\\mathrm\{d\}/.test(HELD[+p.slice(1, -1)]));
  if (spans(halves[0]) || spans(halves[1])) return chunk;
  return hold('\\dfrac') + '{' + strip(halves[0]) + '}{' + strip(halves[1]) + '}';
}

/** A term with no relation in it. */
function expr(src, fail) {
  let s = src.replace(/\s{3,}/g, () => ' ' + hold('\\quad') + ' ');   // a laid out gap
  for (const [from, tex] of INFIX) s = s.split(from).join(' ' + hold(tex) + ' ');

  s = chemistry(s);
  s = s.replace(/\b([A-Za-z])(\d*)_bar\b/g,
    (_, v, n) => hold('\\bar{' + v + '}') + (n ? '_{' + n + '}' : ''));
  s = calls(s, fail);
  s = scripts(s, fail);
  s = s.replace(/\b([A-Za-z])(\d{1,2})(?![\d}_])/g, '$1_{$2}');   // x1, a11
  s = words(s);

  s = terms(s).map((t) => (t === '+' || t === '-' ? ' ' + t + ' ' : stack(t))).join('');
  return s.replace(/\s+/g, ' ').trim();
}

/** Convert one expression. Returns null when the text is prose or unparseable.
 *  `loose` accepts a bare fragment such as a numerator, which has no operator. */
function toTeX(src, loose) {
  const text = String(src).trim();
  if (!text || text.length > 220) return null;
  if (!isBalanced(text)) return null;
  if (/[\\{}$&#%~@]/.test(text)) return null;                 // already markup
  if (/\b(lim|integral|matrix)\b/i.test(text)) return null;   // needs a real parser
  if (/''|\.'/.test(text)) return null;                       // drawn with punctuation
  if (/(^|[\s(])'/.test(text)) return null;                   // a drawn arc, not a prime
  if ((text.match(/(?:^|[\s(])_/g) || []).length >= 2) return null;   // blanks in a diagram
  if ((text.match(/(?:^|\s)\^/g) || []).length >= 2) return null;     // drawn axis arrows
  if ((text.match(/'/g) || []).length >= 2) return null;              // repeated primes
  if (/[a-z]{3,}\s+[a-z]{3,}\s+[a-z]{3,}/.test(text)) return null;   // a sentence
  if (!loose && !/[=+\-*/^_<>]|\bsqrt\b|\bINT\b|\bSUM\b/.test(text)) return null;

  HELD = [];
  const fail = { hit: false };
  const out = splitRelations(text)
    .map((p) => (p.rel ? hold(p.rel) : expr(p.text, fail)))
    .join(' ');
  if (fail.hit) return null;
  const tex = expand(out).replace(/\s+/g, ' ').trim();
  return /[^\s]/.test(tex) ? tex : null;
}

window.Tex = { toTeX };
