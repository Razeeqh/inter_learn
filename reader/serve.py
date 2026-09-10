#!/usr/bin/env python3
r"""
Local reader for the AP Inter MPC notes.

Reads the chapter folders live, straight from disk. Nothing is copied,
duplicated or pre-built - edit any .md file and just refresh the page.

    python reader\serve.py
"""

import http.server
import json
import mimetypes
import os
import socketserver
import sys
import threading
import urllib.parse
import webbrowser
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent                 # the folder holding Maths/ Physics/ Chemistry/
PUBLIC = HERE / "public"
PORT = int(os.environ.get("READER_PORT", "7654"))

SUBJECT_ORDER = ["Maths", "Physics", "Chemistry"]

COURSE_LABEL = {
    "Class-11-Maths-1A": ("Maths 1A", "1st Year"),
    "Class-11-Maths-1B": ("Maths 1B", "1st Year"),
    "Class-12-Maths-2A": ("Maths 2A", "2nd Year"),
    "Class-12-Maths-2B": ("Maths 2B", "2nd Year"),
    "Class-11-Physics":  ("Physics",  "1st Year"),
    "Class-12-Physics":  ("Physics",  "2nd Year"),
    "Class-11-Chemistry": ("Chemistry", "1st Year"),
    "Class-12-Chemistry": ("Chemistry", "2nd Year"),
}

FILE_LABEL = [
    ("00-mindmap",           "Mind map"),
    ("01-concepts",          "Concepts"),
    ("02-formulae",          "Formulae"),
    ("03-pyq-ap-board",      "Board questions"),
    ("04-pyq-competitive",   "JEE / EAPCET"),
    ("05-question-patterns", "Question patterns"),
]


def scan_tree():
    """Walk the content folders and describe what is actually on disk."""
    subjects = []
    for subject in SUBJECT_ORDER:
        sdir = ROOT / subject
        if not sdir.is_dir():
            continue
        courses = []
        for cdir in sorted(p for p in sdir.iterdir() if p.is_dir()):
            label, year = COURSE_LABEL.get(cdir.name, (cdir.name, ""))
            chapters = []
            for chdir in sorted(p for p in cdir.iterdir() if p.is_dir()):
                num, _, rest = chdir.name.partition("-")
                files = [
                    {"key": key, "label": lbl}
                    for key, lbl in FILE_LABEL
                    if (chdir / f"{key}.md").is_file()
                ]
                if not files:
                    continue
                chapters.append({
                    "num": num,
                    "title": rest.replace("-", " "),
                    "path": f"{subject}/{cdir.name}/{chdir.name}",
                    "files": files,
                })
            if chapters:
                courses.append({
                    "label": label,
                    "year": year,
                    "dir": cdir.name,
                    "chapters": chapters,
                })
        if courses:
            subjects.append({"name": subject, "courses": courses})
    return {"root": str(ROOT), "subjects": subjects}


def safe_doc_path(rel):
    """Resolve a requested document, refusing anything outside the content root."""
    target = (ROOT / rel).resolve()
    if not str(target).startswith(str(ROOT)):
        raise ValueError("path escapes content root")
    if target.suffix.lower() != ".md":
        raise ValueError("only .md files are served")
    return target


class Handler(http.server.BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt, *args):
        pass  # keep the console quiet

    def _send(self, code, body, ctype="application/json; charset=utf-8"):
        if isinstance(body, str):
            body = body.encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        route = urllib.parse.urlparse(self.path).path

        try:
            if route == "/tree.json":
                self._send(200, json.dumps(scan_tree()))
                return

            if route.lower().endswith(".md"):
                rel = urllib.parse.unquote(route.lstrip("/"))
                target = safe_doc_path(rel)
                if not target.is_file():
                    self._send(404, json.dumps({"error": "not found", "path": rel}))
                    return
                text = target.read_text(encoding="utf-8", errors="replace")
                self._send(200, text, "text/plain; charset=utf-8")
                return

            # everything else is a static asset from public/
            name = "index.html" if route in ("/", "") else route.lstrip("/")
            asset = (PUBLIC / name).resolve()
            if not str(asset).startswith(str(PUBLIC)) or not asset.is_file():
                self._send(404, "not found", "text/plain; charset=utf-8")
                return
            ctype = mimetypes.guess_type(asset.name)[0] or "application/octet-stream"
            if ctype.startswith("text/") or asset.suffix in (".js", ".css"):
                ctype += "; charset=utf-8"
            self._send(200, asset.read_bytes(), ctype)

        except Exception as exc:                       # noqa: BLE001
            self._send(400, json.dumps({"error": str(exc)}))


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def main():
    if not PUBLIC.is_dir():
        sys.exit(f"missing {PUBLIC}")

    tree = scan_tree()
    chapters = sum(len(c["chapters"]) for s in tree["subjects"] for c in s["courses"])
    if chapters == 0:
        sys.exit(f"No chapter folders found under {ROOT}")

    port = PORT
    for _ in range(20):
        try:
            httpd = Server(("127.0.0.1", port), Handler)
            break
        except OSError:
            port += 1
    else:
        sys.exit("could not find a free port")

    url = f"http://127.0.0.1:{port}/"
    print(f"  Reading from : {ROOT}")
    print(f"  Chapters     : {chapters}")
    print(f"  Open         : {url}")
    print("  Press Ctrl+C to stop.\n")

    threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  stopped.")


if __name__ == "__main__":
    main()
