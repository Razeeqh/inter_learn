/* Group the leftover connectors in diagrams by what sits around them. */
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

const kinds = new Map();
const sample = new Map();

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
    if (!html.startsWith('<div class="artwrap"')) continue;
    const text = html.replace(/<[^>]+>/g, ' ');
    if (!/\+[-\u2500]|[-\u2500]\+/.test(text)) continue;

    const rows = html.replace(/^[\s\S]*?<pre[^>]*>/, '').replace(/<\/pre>[\s\S]*$/, '').split('\n');
    for (let r = 0; r < rows.length; r++) {
      for (let c = 0; c < rows[r].length; c++) {
        if (rows[r][c] !== '+') continue;
        const L = rows[r][c - 1] || ' ';
        const R = rows[r][c + 1] || ' ';
        if (!/[-\u2500]/.test(L) && !/[-\u2500]/.test(R)) continue;
        const up = ((rows[r - 1] || '')[c] || ' ');
        const dn = ((rows[r + 1] || '')[c] || ' ');
        const cls = (/[-\u2500]/.test(L) ? 'L' : '.') + (/[-\u2500]/.test(R) ? 'R' : '.') +
          ' up=' + JSON.stringify(up) + ' down=' + JSON.stringify(dn);
        kinds.set(cls, (kinds.get(cls) || 0) + 1);
        if (!sample.has(cls)) {
          sample.set(cls, rel + ':' + start + '\n' +
            rows.slice(Math.max(0, r - 2), r + 3).join('\n'));
        }
      }
    }
  }
}

[...kinds.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).forEach(([k, n]) => {
  console.log('\n=== ' + n + '  ' + k);
  console.log(sample.get(k));
});
