/* How wide are the diagrams, in columns? */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'reader/public/tex.js'), 'utf8'));
window.katex = require(path.join(ROOT, 'reader/public/vendor/katex/katex.min.js'));
eval(fs.readFileSync(path.join(ROOT, 'reader/public/typeset.js'), 'utf8'));
const T = window.Typeset;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const widths = [];
const trimmed = [];
for (const file of ['Maths', 'Physics', 'Chemistry'].flatMap((s) => walk(path.join(ROOT, s)))) {
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*```/.test(lines[i])) continue;
    i++;
    const buf = [];
    while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
    if (!buf.join('').trim()) continue;
    if (!T.block(buf.join('\n')).startsWith('<div class="artwrap"')) continue;
    const raw = buf.map((l) => l.replace(/\s+$/, ''));
    widths.push(Math.max(...raw.map((l) => l.length)));
    const body = raw.filter((l) => l.trim());
    const indent = Math.min(...body.map((l) => l.match(/^ */)[0].length));
    trimmed.push(Math.max(...raw.map((l) => Math.max(0, l.length - indent))));
  }
}

widths.sort((a, b) => a - b);
trimmed.sort((a, b) => a - b);
const at = (a, p) => a[Math.floor(a.length * p)];
console.log('diagrams', widths.length);
console.log('as drawn      median', at(widths, 0.5), ' 90th', at(widths, 0.9), ' max', widths[widths.length - 1]);
console.log('after dedent  median', at(trimmed, 0.5), ' 90th', at(trimmed, 0.9), ' max', trimmed[trimmed.length - 1]);
for (const w of [50, 60, 70, 80, 100]) {
  console.log(`wider than ${w}:  as drawn ${widths.filter((x) => x > w).length}` +
    `   dedented ${trimmed.filter((x) => x > w).length}`);
}
