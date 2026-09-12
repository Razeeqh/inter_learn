/* Sweep for blocks that render to nothing, or to a single unreadable blob. */
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

const files = ['Maths', 'Physics', 'Chemistry']
  .flatMap((s) => walk(path.join(ROOT, s)));

const empty = [];
const lost = [];
let blocks = 0;

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*```/.test(lines[i])) continue;
    const start = i + 1;
    i++;
    const buf = [];
    while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
    const code = buf.join('\n');
    if (!code.trim()) continue;
    blocks++;
    const html = T.block(code);
    if (!html || !html.trim()) { empty.push(rel + ':' + start); continue; }
    // compare only letters and digits: frames and rules are meant to disappear.
    // Names that become one glyph are collapsed first, or every alpha looks lost.
    const SYMBOL = /\b(alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Delta|Sigma|Omega|Phi|Lambda|Theta|Gamma|Pi|sqrt|abs|union|intersect|intersection|subset|superset|belongs|implies|therefore|infinity|inf|INT|SUM|deg|angstrom)\d*/g;
    const keep = (s) => (s.replace(SYMBOL, 'Q').match(/[A-Za-z0-9]/g) || []).length;
    const shown = keep(html
      .replace(/<span class="katex-mathml">[\s\S]*?<\/span>/g, '')
      .replace(/<[^>]+>/g, ' '));
    const src = keep(code);
    if (src > 25 && shown < src * 0.9) {
      lost.push({ at: rel + ':' + start, src, shown, ratio: shown / src, code });
    }
  }
}

console.log('blocks', blocks);
console.log('rendered to nothing:', empty.length);
empty.slice(0, 10).forEach((e) => console.log('   ' + e));
console.log('lost letters or digits:', lost.length);
lost.sort((a, b) => a.ratio - b.ratio);
for (const l of lost.slice(0, 8)) {
  console.log('\n-- ' + l.at + '  ' + l.src + ' -> ' + l.shown +
    '  (' + (100 * l.ratio).toFixed(0) + '%)');
  console.log(l.code.split('\n').slice(0, 10).join('\n'));
}
