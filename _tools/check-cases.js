/* Known-good and known-bad renderings, so fixed bugs stay fixed. */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'reader/public/tex.js'), 'utf8'));
window.katex = require(path.join(ROOT, 'reader/public/vendor/katex/katex.min.js'));
eval(fs.readFileSync(path.join(ROOT, 'reader/public/typeset.js'), 'utf8'));
const T = window.Typeset;

const plain = (h) => h
  .replace(/<span class="katex-mathml">[\s\S]*?<\/span>/g, '')
  .replace(/<[^>]+>/g, '');

const CASES = [
  ['x is not 1  and  x is not -1', { has: 'x is not', hasNot: '\u00d7' }],
  ['Area = (1/2) x base x height', { has: '\u00d7' }],
  ['order is 2 x 3', { has: '\u00d7' }],
  ['n(A x B) = mn', { has: '\u00d7' }],
  ['x must be 3', { hasNot: '\u00d7' }],
  ['`T P^gamma = const`', { has: '\u03b3', hasNot: '^' }],
  ['`A = [ 1  1 ; 0  1 ]`', { hasNot: ';' }],
  ['`Start-Reader.cmd`', { has: '.cmd' }],
  ['domain {x : f(x) >= 0}', { has: '\u2265', hasNot: '>=' }],
  ['s = - b +- sqrt( b^2 - 4 a c )', { has: '\u221a', hasNot: 'sqrt' }],
  ['true for all n in N (r =/= 1)', { has: '\u2260', hasNot: '=/=' }],
  ['P_before = P_after', { hasNot: '_' }],
  ['the interval ( -inf , -5 ]', { has: '\u221e', hasNot: 'inf' }],
  ['y^2 = b^2 * b^2', { has: '\u00b7', hasNot: '*' }],
  ['d = sqrt((x2-x1)^2 + (y2-y1)^2)', { has: '\u221a', hasNot: 'sqrt' }],
  ['area = x^[n] + 1', { hasNot: '^' }]
];

let bad = 0;
for (const [src, want] of CASES) {
  const out = plain(T.inline(src));
  if (want.has && !out.includes(want.has)) { console.log('MISSING', JSON.stringify(want.has), '::', src, '->', out); bad++; }
  if (want.hasNot && out.includes(want.hasNot)) { console.log('UNWANTED', JSON.stringify(want.hasNot), '::', src, '->', out); bad++; }
}

const BLOCKS = [
  ['number line stays drawn',
    '  Roots are -5 and 5.\n\n  --------- + ---------o--------- - ---------o--------- + ---------\n                      -5                     5\n',
    (h) => /algn numline/.test(h) && h.includes('---------o')],
  ['box becomes box drawing',
    '      +--------+\n  x-->|  f(x)  |-->y\n      +--------+\n',
    (h) => h.includes('\u250c') && h.includes('\u2518')],
  ['spreader gets junctions',
    '        |\n   ---------\n   |   |   |\n   a   b   c\n',
    (h) => h.includes('\u252c') || h.includes('\u253c')],
  ['a pair of fractions is not a number line',
    '       x^2      y^2\n      -----  -  -----  =  1\n       a^2      b^2\n',
    (h) => /class="frac"|katex/.test(h) && !/numline/.test(h) && /a<sup>2|a2/.test(h.replace(/<[^>]+>/g, (t) => t))],
  ['a single bar still makes a fraction',
    '                1\n   f(x)  =  --------------\n             6x - x^2 - 5\n',
    (h) => /class="frac"|katex/.test(h) && !/numline/.test(h)]
];

for (const [name, src, ok] of BLOCKS) {
  if (!ok(T.block(src))) { console.log('FAILED', name); bad++; }
}

console.log(bad ? `\n${bad} regression(s)` : 'all render checks pass');
process.exit(bad ? 1 : 0);
