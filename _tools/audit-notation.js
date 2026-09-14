/* Hunt for notation that should have become a symbol but reached the reader
 * as ASCII, and for words mashed together by the typesetter. */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'reader/public/tex.js'), 'utf8'));
window.katex = require(path.join(ROOT, 'reader/public/vendor/katex/katex.min.js'));
eval(fs.readFileSync(path.join(ROOT, 'reader/public/typeset.js'), 'utf8'));
eval(fs.readFileSync(path.join(ROOT, 'reader/public/md.js'), 'utf8'));
const T = window.Typeset;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// inline tags close up, block tags become a space, or f<sup>-1</sup> reads "f -1"
const INLINE = /<\/?(?:sup|sub|span|i|b|em|strong|code|math|semantics|mrow|mi|mn|mo|msup|msub|annotation)\b[^>]*>/g;
const strip = (h) => h
  .replace(/<span class="katex-mathml">[\s\S]*?<\/span>/g, '')
  .replace(/<div class="expr wide algn[^"]*">[\s\S]*?<\/div>/g, ' ')
  .replace(INLINE, '')
  .replace(/<[^>]+>/g, ' ');

const PATTERNS = [
  ['<= or >=', /&lt;=|&gt;=|<=|>=/],
  ['!= or =/=', /(?<![\w)])!=|=\/=/],
  ['+- ', /\+-(?![-\d])|\bplus or minus\b/],
  ['=> or <=>', /=&gt;|=>|&lt;=&gt;/],
  ['-> or <-', /-&gt;|->|&lt;-/],
  ['sqrt(', /\bsqrt\s*\(/],
  ['INT or SUM', /\bINT\b|\bSUM\b/],
  ['inf', /\binf(inity)?\b/],
  ['caret', /\^/],
  ['underscore sub', /[A-Za-z]_[A-Za-z0-9]/],
  ['degree word', /\bdeg\b/],
  ['lone asterisk', /\s\*\s/]
];

const counts = new Map();
const samples = new Map();
const mashed = [];

for (const file of ['Maths', 'Physics', 'Chemistry'].flatMap((s) => walk(path.join(ROOT, s)))) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*```/.test(lines[i])) continue;
    const start = i + 1;
    i++;
    const buf = [];
    while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
    if (!buf.join('').trim()) continue;
    const html = T.block(buf.join('\n'));
    if (html.startsWith('<div class="artwrap"')) continue;      // drawings keep ASCII

    const shown = strip(html);

    for (const [name, re] of PATTERNS) {
      const m = re.exec(shown);
      if (!m) continue;
      counts.set(name, (counts.get(name) || 0) + 1);
      if (!samples.has(name)) {
        const flat = shown.replace(/\s+/g, ' ');
        const at = flat.indexOf(m[0]);
        samples.set(name, rel + ':' + start + '\n  ...' +
          flat.slice(Math.max(0, at - 60), at + 60) + '...');
      }
    }

    // words run together: a long letter run in the output that is not in the source
    const src = buf.join(' ').replace(/\s+/g, '');
    for (const m of shown.matchAll(/[A-Za-z]{12,}/g)) {
      if (!src.includes(m[0]) && mashed.length < 12) {
        mashed.push(rel + ':' + start + '  ' + m[0]);
      }
    }
  }
}

console.log('--- ASCII notation reaching the reader inside cards');
[...counts.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, n]) => {
  console.log('\n' + String(n).padStart(5) + '  ' + k);
  console.log('       ' + samples.get(k).replace(/\n/g, '\n       '));
});
console.log('\n--- words mashed together (' + mashed.length + ')');
mashed.forEach((m) => console.log('  ' + m));
