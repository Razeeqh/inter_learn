/* Turns the plain-text notation used in the notes into textbook typography.
 *
 *   x^2        -> x with a real superscript          10^-19 -> 10⁻¹⁹
 *   sqrt(l/g)  -> radical with an overbar            theta  -> θ
 *   H2SO4      -> subscripted formula                3d5    -> 3d⁵
 *   a / --- / b (stacked in a code block) -> a proper built-up fraction
 *   +---+ boxes -> display-equation cards
 *
 * Diagrams (mind maps, circuits, graphs, ray diagrams) are deliberately left
 * as untouched monospace, because substituting variable-width glyphs into them
 * would destroy the column alignment they depend on.
 */

const GREEK = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'Δ', epsilon: 'ε', zeta: 'ζ',
  eta: 'η', theta: 'θ', kappa: 'κ', lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ',
  pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', phi: 'φ', chi: 'χ', psi: 'ψ',
  omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Pi: 'Π', Sigma: 'Σ',
  Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω'
};

const OPS = [
  [/&lt;--&gt;/g, '⟷'], [/&lt;=&gt;/g, '⇔'], [/&lt;-&gt;/g, '↔'],
  [/--&gt;/g, '⟶'], [/-&gt;/g, '→'], [/&lt;--/g, '⟵'], [/&lt;-/g, '←'],
  [/=&gt;/g, '⇒'], [/&lt;=/g, '≤'], [/&gt;=/g, '≥'],
  [/!=/g, '≠'], [/~=/g, '≈'], [/\+\/-/g, '±'], [/\+-(?=\s|\d|$)/g, '±'],
  [/\.\.\./g, '…'],
  [/\bINT\b/g, '∫'], [/\bSUM\b/g, '∑'],
  [/\binfinity\b/g, '∞'],
  [/(\d)\s*degrees\b/g, '$1°'],
  [/(\d)\s*deg\b/g, '$1°'],
  [/\bangstrom\b/g, 'Å'],
  // "m x n", "n1 x u1", "2 x 3" -> multiplication sign. Both sides must be short
  // tokens, so ordinary prose like "the x axis" is left alone.
  [/\b([A-Za-z0-9]{1,3})\s+x\s+([A-Za-z0-9]{1,3})\b/g, '$1 × $2']
];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------------------------------------------------------------- inline */

/** Typeset a run of ordinary prose / a table cell. Input is raw text. */
function typesetInline(raw) {
  let s = esc(raw);

  // protect inline code spans from every rule below
  const held = [];
  s = s.replace(/`([^`]+)`/g, (_, code) => {
    held.push('<code>' + code + '</code>');
    return '\u0000' + (held.length - 1) + '\u0000';
  });

  for (const [re, to] of OPS) s = s.replace(re, to);

  // electronic configurations: 1s2, 3d10, 4s1  -> superscript occupancy
  s = s.replace(/\b(\d[spdf])(\d+)\b/g, '$1<sup>$2</sup>');

  // chemical formulae: H2O, H2SO4, Na2CO3, XeF6
  s = s.replace(/\b((?:[A-Z][a-z]?\d*){2,})\b/g, (tok) => {
    if (!/\d/.test(tok)) return tok;
    return tok.replace(/(\d+)/g, '<sub>$1</sub>');
  });
  s = s.replace(/\b([A-Z][a-z]?)(\d+)\b/g, '$1<sub>$2</sub>');

  // single-letter indices: n1, r2, T1, S1  -> n₁ r₂ T₁ S₁
  s = s.replace(/\b([A-Za-z])(\d)\b/g, '$1<sub>$2</sub>');

  // matrix element a(i,j) -> a with a double subscript
  s = s.replace(/\b([a-z])\(\s*([a-z0-9]+)\s*,\s*([a-z0-9]+)\s*\)/g,
    '$1<sub>$2$3</sub>');

  // sqrt(...) -> radical sign with an overbar
  s = s.replace(/\bsqrt\s*\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g,
    (_, inner) => '<span class="sqrt">√<span class="rad">' + inner + '</span></span>');

  // exponents: x^2, 10^-19, e^(-x), A^-1
  s = s.replace(/([A-Za-z0-9\)\]\}])\^(\([^)]*\)|-?[A-Za-z0-9]+)/g, (_, base, ex) => {
    ex = ex.replace(/^\(|\)$/g, '');
    return base + '<sup>' + ex + '</sup>';
  });

  // greek words, whole word only
  s = s.replace(/\b([A-Za-z]+)\b/g, (w) =>
    Object.prototype.hasOwnProperty.call(GREEK, w) ? GREEK[w] : w);

  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => held[+i]);
  return s;
}

/* ------------------------------------------------------------ code blocks */

const RULE = /^(\s*)(-{3,})(\s*)$/;          // a bare dash run = a fraction bar
const BOX_EDGE = /^\s*\+[-+\s]*\+\s*$/;      // +--------+
const BOX_SIDE = /^\s*\|.*\|\s*$/;           // |  ...   |

/** Drawings we must not touch: trees, graphs, circuits, level diagrams, ASCII tables. */
function looksLikeDiagram(lines) {
  const body = lines.filter((l) => l.trim() !== '');
  if (!body.length) return true;
  for (const l of body) {
    // a backslash only ever appears in drawn art; a forward slash is division
    if (/\\/.test(l)) return true;
    if (/^\s*[|+]/.test(l) || /[|+]\s*$/.test(l)) return true;  // table / box framing
    if (/_{3,}/.test(l)) return true;               // drawn baselines
    if (/\S\s*-{4,}/.test(l) && !RULE.test(l)) return true;      // axes, energy levels
  }
  return false;
}

/** Strip an enclosing +---+ / | ... | frame, returning the inner lines. */
function unbox(lines) {
  const body = lines.filter((l) => l.trim() !== '');
  if (body.length < 3) return null;
  if (!BOX_EDGE.test(body[0]) || !BOX_EDGE.test(body[body.length - 1])) return null;
  const inner = body.slice(1, -1);
  if (!inner.every((l) => BOX_SIDE.test(l) || l.trim() === '')) return null;
  return inner.map((l) => l.replace(/^\s*\|/, '').replace(/\|\s*$/, ''));
}

/** Build one display line, turning any a/---/b stack into a real fraction. */
function displayLines(lines) {
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(RULE);
    const prev = lines[i - 1];
    const next = lines[i + 1];
    if (m && prev !== undefined && next !== undefined) {
      const start = m[1].length;
      const end = start + m[2].length;
      const num = prev.slice(start, end).trim();
      const den = next.slice(start, end).trim();
      const lhs = lines[i].slice(0, start).trim();
      const rhs = lines[i].slice(end).trim();          // e.g. a trailing "unit: cm^-1"
      const prevHead = prev.slice(0, start).trim();
      if (num && den && !prevHead) {
        out.pop();                       // the numerator line we already pushed
        out.push(
          '<div class="eq">' +
          (lhs ? '<span class="lhs">' + typesetInline(lhs) + '</span>' : '') +
          '<span class="frac"><span class="num">' + typesetInline(num) +
          '</span><span class="den">' + typesetInline(den) + '</span></span>' +
          (rhs ? '<span class="rhs">' + typesetInline(rhs) + '</span>' : '') +
          '</div>');
        i++;                             // skip the denominator line
        continue;
      }
    }
    if (lines[i].trim() === '') { out.push('<div class="eq gap"></div>'); continue; }
    out.push('<div class="eq">' + typesetInline(lines[i].trim()) + '</div>');
  }
  return out.join('');
}

/** Render a fenced code block: either a typeset formula card or raw monospace. */
function renderBlock(code) {
  const lines = code.replace(/\s+$/, '').split('\n');

  // a boxed formula: strip the frame and typeset what is inside
  const inner = unbox(lines);
  if (inner && !looksLikeDiagram(inner)) {
    return '<div class="formula">' + displayLines(inner) + '</div>';
  }

  if (!looksLikeDiagram(lines)) {
    const body = lines.filter((l) => l.trim() !== '');
    const hasRule = body.some((l) => RULE.test(l));
    // a run of equations, or anything containing a fraction bar
    const allEquations = body.every((l) => RULE.test(l) || l.includes('='));
    if (hasRule || (allEquations && body.length)) {
      return '<div class="formula plain">' + displayLines(lines) + '</div>';
    }
  }

  return '<pre class="art">' + esc(code.replace(/\s+$/, '')) + '</pre>';
}

window.Typeset = { inline: typesetInline, block: renderBlock, esc };
