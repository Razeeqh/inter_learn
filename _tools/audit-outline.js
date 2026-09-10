// How many "+--" outline blocks now use the bulleted outline renderer?
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(root, 'reader/public/typeset.js'), 'utf8'));
const T = window.Typeset;

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name.startsWith('.') || ['node_modules', 'site', 'reader', '_tools'].includes(e.name)) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) files.push(p);
  }
})(root);

let total = 0, outline = 0;
const rest = [];
for (const f of files) {
  const blocks = fs.readFileSync(f, 'utf8').match(/```[\s\S]*?```/g) || [];
  for (const b of blocks) {
    const code = b.split('\n').slice(1, -1).join('\n');
    if (!/^[\s|]*\+--\s/m.test(code)) continue;
    total++;
    const html = T.block(code);
    if (html.startsWith('<div class="outline')) outline++;
    else rest.push(path.relative(root, f) + '  ->  ' + html.slice(0, 24));
  }
}

console.log('blocks containing "+--":', total, ' as outline:', outline, ' other:', rest.length);
rest.slice(0, 12).forEach((r) => console.log('  ', r));
