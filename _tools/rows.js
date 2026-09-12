/* Show how one fenced block is broken into rows. */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'reader/public/tex.js'), 'utf8'));
window.katex = require(path.join(ROOT, 'reader/public/vendor/katex/katex.min.js'));
eval(fs.readFileSync(path.join(ROOT, 'reader/public/typeset.js'), 'utf8'));

const src = fs.readFileSync(path.join(ROOT, process.argv[2]), 'utf8')
  .replace(/\r/g, '').split('\n');
const at = Number(process.argv[3]);
let s = at - 1;
while (s >= 0 && !/^\s*```/.test(src[s])) s--;
let e = s + 1;
while (e < src.length && !/^\s*```/.test(src[e])) e++;

const html = window.Typeset.block(src.slice(s + 1, e).join('\n'));
for (const m of html.matchAll(/<div class="([^"]*)">([\s\S]*?)<\/div>/g)) {
  const txt = m[2].replace(/<span class="katex-mathml">[\s\S]*?<\/span>/g, '')
    .replace(/<[^>]+>/g, '').replace(/\n/g, '\\n');
  console.log(m[1].padEnd(18), JSON.stringify(txt));
}
