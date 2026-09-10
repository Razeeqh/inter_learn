#!/usr/bin/env python3
"""
Builds the static GitHub Pages site into _site/.

Takes the reader app (reader/public/) as-is, adds a generated tree.json
(same shape reader/serve.py's /api/tree returns), and copies the
Maths/ Physics/ Chemistry/ markdown folders alongside it so the app's
per-document fetches resolve to plain static files.

    python _tools/build_pages.py
"""

import json
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
READER_PUBLIC = ROOT / "reader" / "public"
OUT = ROOT / "_site"

sys.path.insert(0, str(ROOT / "reader"))
from serve import scan_tree, SUBJECT_ORDER  # noqa: E402


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    shutil.copytree(READER_PUBLIC, OUT, dirs_exist_ok=True)

    tree = scan_tree()
    chapters = sum(len(c["chapters"]) for s in tree["subjects"] for c in s["courses"])
    tree["root"] = f"{chapters} chapters across {', '.join(SUBJECT_ORDER)}"
    (OUT / "tree.json").write_text(json.dumps(tree), encoding="utf-8")

    for subject in SUBJECT_ORDER:
        src = ROOT / subject
        if src.is_dir():
            shutil.copytree(src, OUT / subject)

    (OUT / ".nojekyll").write_text("", encoding="utf-8")

    print(f"Built {chapters} chapters into {OUT}")


if __name__ == "__main__":
    main()
