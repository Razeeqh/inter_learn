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
for (const file of ['Maths', 'Physics', 'Chemistry'].flatMap((s) => walk(path.join(ROOT, s)))) {
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*```/.test(lines[i])) continue;
    i++;
    const buf = [];
    while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
    if (!buf.join('').trim()) continue;
    if (!T.block(buf.join('\n')).startsWith('<div class="artwrap"')) continue;
    widths.push(Math.max(...buf.map((l) => l.length)));
  }
}

widths.sort((a, b) => a - b);
const at = (p) => widths[Math.floor(widths.length * p)];
console.log('diagrams', widths.length);
console.log('median', at(0.5), ' 75th', at(0.75), ' 90th', at(0.9), ' 99th', at(0.99), ' max', widths[widths.length - 1]);
for (const w of [50, 60, 70, 80, 90, 100]) {
  const n = widths.filter((x) => x > w).length;
  console.log(`wider than ${w} cols: ${n}  (${(100 * n / widths.length).toFixed(0)}%)`);
}
