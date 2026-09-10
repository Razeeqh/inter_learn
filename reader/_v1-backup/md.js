/* Minimal markdown renderer for the notes.
 * Prose and tables go through the typesetter; fenced blocks are handed to
 * Typeset.block, which decides between a formula card and raw monospace. */

function slug(s) {
  return s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function renderMarkdown(src) {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  const toc = [];
  const used = Object.create(null);
  let i = 0;

  const T = window.Typeset;

  while (i < lines.length) {
    const line = lines[i];

    // fenced code
    if (/^\s*```/.test(line)) {
      i++;
      const buf = [];
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(T.block(buf.join('\n')));
      continue;
    }

    // table
    if (/^\s*\|/.test(line) && i + 1 < lines.length &&
        /^\s*\|[\s\-:|]+\|?\s*$/.test(lines[i + 1])) {
      const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|');
      out.push('<div class="tablewrap"><table><thead><tr>');
      for (const c of cells(line)) out.push('<th>' + T.inline(c.trim()) + '</th>');
      out.push('</tr></thead><tbody>');
      i += 2;
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        out.push('<tr>');
        for (const c of cells(lines[i])) out.push('<td>' + T.inline(c.trim()) + '</td>');
        out.push('</tr>');
        i++;
      }
      out.push('</tbody></table></div>');
      continue;
    }

    // heading
    const h = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (h) {
      const lvl = h[1].length;
      const txt = T.inline(h[2]);
      let id = slug(h[2]) || 'h';
      if (used[id]) { used[id]++; id += '-' + used[id]; } else { used[id] = 1; }
      out.push(`<h${lvl} id="${id}">${txt}</h${lvl}>`);
      if (lvl <= 2) toc.push({ level: lvl, id, text: h[2].replace(/[*`]/g, '') });
      i++;
      continue;
    }

    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) { out.push('<hr>'); i++; continue; }

    // blockquote
    if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*>\s?/, ''));
        i++;
      }
      const cls = /^\s*TRAP/i.test(buf[0]) ? ' class="trap"' : '';
      out.push('<blockquote' + cls + '>');
      for (const b of buf) if (b.trim()) out.push('<p>' + T.inline(b) + '</p>');
      out.push('</blockquote>');
      continue;
    }

    // lists
    const ul = /^\s*[-*+]\s+(.*)$/;
    const ol = /^\s*\d+\.\s+(.*)$/;
    if (ul.test(line) || ol.test(line)) {
      const ordered = ol.test(line);
      const re = ordered ? ol : ul;
      out.push(ordered ? '<ol>' : '<ul>');
      while (i < lines.length && re.test(lines[i])) {
        out.push('<li>' + T.inline(lines[i].match(re)[1]) + '</li>');
        i++;
      }
      out.push(ordered ? '</ol>' : '</ul>');
      continue;
    }

    if (!line.trim()) { i++; continue; }

    // paragraph
    const buf = [];
    while (i < lines.length && lines[i].trim() &&
           !/^\s*```/.test(lines[i]) && !/^#{1,6}\s/.test(lines[i]) &&
           !/^\s*>/.test(lines[i]) && !ul.test(lines[i]) && !ol.test(lines[i]) &&
           !/^\s*\|/.test(lines[i]) &&
           !/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i])) {
      buf.push(lines[i].trim());
      i++;
    }
    if (buf.length) {
      let p = T.inline(buf.join(' '));
      p = p.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      out.push('<p>' + p + '</p>');
    }
  }

  let html = out.join('\n');
  html = html.replace(/\*\*([^*<>]+)\*\*/g, '<strong>$1</strong>');
  return { html, toc };
}

window.renderMarkdown = renderMarkdown;
