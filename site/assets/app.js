/* AP Inter MPC study site — navigation, search, TOC, theme */
(function () {
  "use strict";

  var ROOT = document.body.getAttribute("data-root") || "";
  var HERE = document.body.getAttribute("data-path") || "";

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  /* ---------------- theme ---------------- */

  var saved = localStorage.getItem("mpc-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  else if (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  var themeBtn = document.getElementById("themebtn");
  if (themeBtn) {
    var paint = function () {
      themeBtn.textContent =
        document.documentElement.getAttribute("data-theme") === "dark" ? "\u2600" : "\u263D";
    };
    paint();
    themeBtn.addEventListener("click", function () {
      var next =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("mpc-theme", next);
      paint();
    });
  }

  /* ---------------- mobile nav ---------------- */

  var navToggle = document.getElementById("navtoggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }
  var scrim = document.getElementById("scrim");
  if (scrim) scrim.addEventListener("click", function () { document.body.classList.remove("nav-open"); });

  /* ---------------- sidebar tree ---------------- */

  var side = document.getElementById("sidebar");
  if (side && window.NAV) {
    var letter = { Maths: "m", Physics: "p", Chemistry: "c" };

    window.NAV.forEach(function (subject) {
      side.appendChild(el("h4", null, subject.name));

      subject.courses.forEach(function (course) {
        var d = el("details", "course");
        var openThis = HERE.indexOf(course.path) === 0;
        if (openThis) d.open = true;

        var s = el("summary");
        s.appendChild(el("span", "dot " + letter[subject.name]));
        s.appendChild(el("span", null, course.name));
        d.appendChild(s);

        var box = el("div", "chaps");
        course.chapters.forEach(function (ch) {
          var a = el("a", null, ch.num + ". " + ch.name);
          a.href = ROOT + ch.path + "/00-mindmap.html";
          if (HERE.indexOf(ch.path) === 0) a.className = "active";
          box.appendChild(a);
        });
        d.appendChild(box);
        side.appendChild(d);
      });
    });

    var act = side.querySelector("a.active");
    if (act) {
      var y = act.offsetTop - side.clientHeight / 2;
      if (y > 0) side.scrollTop = y;
    }
  }

  /* ---------------- table of contents ---------------- */

  var toc = document.getElementById("toc");
  var doc = document.querySelector(".doc");
  if (toc && doc) {
    var heads = doc.querySelectorAll("h2[id], h3[id]");
    if (heads.length > 2) {
      toc.appendChild(el("b", null, "On this page"));
      heads.forEach(function (h) {
        var a = el("a", h.tagName === "H3" ? "l3" : null, h.textContent);
        a.href = "#" + h.id;
        toc.appendChild(a);
      });

      var links = toc.querySelectorAll("a");
      var spy = function () {
        var best = null;
        heads.forEach(function (h, i) {
          if (h.getBoundingClientRect().top < 140) best = i;
        });
        links.forEach(function (l, i) { l.classList.toggle("active", i === best); });
      };
      document.addEventListener("scroll", spy, { passive: true });
      spy();
    } else {
      toc.style.display = "none";
    }
  }

  /* ---------------- copy buttons on formula blocks ---------------- */

  document.querySelectorAll(".fig").forEach(function (fig) {
    var b = el("button", "copy", "copy");
    b.addEventListener("click", function () {
      var txt = fig.querySelector("pre").innerText;
      navigator.clipboard.writeText(txt).then(function () {
        b.textContent = "copied";
        setTimeout(function () { b.textContent = "copy"; }, 1200);
      });
    });
    fig.appendChild(b);
  });

  /* ---------------- search ---------------- */

  var box = document.getElementById("q");
  var out = document.getElementById("results");
  if (!box || !out || !window.SEARCH) return;

  var KIND = {
    "00-mindmap": "Mind map",
    "01-concepts": "Concepts",
    "02-formulae": "Formulae",
    "03-pyq-ap-board": "Board questions",
    "04-pyq-competitive": "JEE / EAPCET",
    "05-question-patterns": "Question patterns"
  };

  var cur = -1;

  function score(item, words) {
    var hay = (item.c + " " + item.s + " " + item.h).toLowerCase();
    var chap = item.c.toLowerCase();
    var total = 0;
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (hay.indexOf(w) < 0) return 0;
      total += 1;
      if (chap.indexOf(w) >= 0) total += 4;
      if (chap.indexOf(w) === 0) total += 3;
    }
    return total;
  }

  function run() {
    var q = box.value.trim().toLowerCase();
    out.innerHTML = "";
    cur = -1;
    if (q.length < 2) { out.classList.remove("show"); return; }

    var words = q.split(/\s+/);
    var hits = [];
    for (var i = 0; i < window.SEARCH.length; i++) {
      var sc = score(window.SEARCH[i], words);
      if (sc > 0) hits.push([sc, window.SEARCH[i]]);
    }
    hits.sort(function (a, b) { return b[0] - a[0]; });
    hits = hits.slice(0, 20);

    if (!hits.length) {
      out.appendChild(el("div", "r-none", "Nothing found for \u201c" + box.value + "\u201d"));
      out.classList.add("show");
      return;
    }

    hits.forEach(function (h) {
      var it = h[1];
      var a = el("a");
      a.href = ROOT + it.p + ".html";
      var t = el("div", "r-t", it.c);
      var s = el("div", "r-s", it.s + "  \u00B7  " + (KIND[it.p.split("/").pop()] || ""));
      a.appendChild(t);
      a.appendChild(s);
      out.appendChild(a);
    });
    out.classList.add("show");
  }

  box.addEventListener("input", run);
  box.addEventListener("focus", run);

  document.addEventListener("click", function (e) {
    if (!out.contains(e.target) && e.target !== box) out.classList.remove("show");
  });

  box.addEventListener("keydown", function (e) {
    var items = out.querySelectorAll("a");
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!items.length) return;
      cur += e.key === "ArrowDown" ? 1 : -1;
      if (cur < 0) cur = items.length - 1;
      if (cur >= items.length) cur = 0;
      items.forEach(function (n, i) { n.classList.toggle("sel", i === cur); });
      items[cur].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      if (cur >= 0 && items[cur]) { e.preventDefault(); location.href = items[cur].href; }
    } else if (e.key === "Escape") {
      box.blur(); out.classList.remove("show");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== box && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault();
      box.focus();
      box.select();
    }
  });
})();
