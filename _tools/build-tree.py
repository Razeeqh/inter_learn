#!/usr/bin/env python3
"""Write the chapter index that the reader loads.

The local server builds this on every request; a static host cannot, so it is
generated once at publish time.

    python _tools/build-tree.py [output.json]
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "reader"))

from serve import scan_tree  # noqa: E402

out = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "tree.json"
tree = scan_tree()
tree["root"] = ""  # a local disk path means nothing to a visitor

chapters = sum(len(c["chapters"]) for s in tree["subjects"] for c in s["courses"])
if chapters == 0:
    sys.exit(f"no chapter folders found under {ROOT}")

out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(tree), encoding="utf-8")
print(f"{out}  ({chapters} chapters)")
