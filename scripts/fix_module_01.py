#!/usr/bin/env python3
"""
Fix Module 01 ligature corruption and line break fragmentation.
Replaces binary null bytes from PDF ligatures (fi, fl, ffi, ffl) with correct English text,
and cleans paragraph formatting so markdown renders beautifully on GitHub.
"""

import glob
import re
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
MODULE_DIR = BASE_DIR / "notes" / "01-aws-certified-solutions-architect-associate-saa-c03"

LIGATURE_MAP = {
    "tra\x00c": "traffic",
    "Tra\x00c": "Traffic",
    "e\x00cient": "efficient",
    "E\x00cient": "Efficient",
    "e\x00ciency": "efficiency",
    "e\x00ciently": "efficiently",
    "ine\x00cient": "inefficient",
    "su\x00cient": "sufficient",
    "insu\x00cient": "insufficient",
    "o\x00ce": "office",
    "o\x00ces": "offices",
    "o\x00cer": "officer",
    "o\x00ine": "offline",
    "a\x00nity": "affinity",
    "ful\x00llment": "fulfillment",
    "ful\x00ll": "fulfill",
    "o\x00oad": "offload",
    "work\x00ow": "workflow",
    "work\x00ows": "workflows",
    "\x00eet": "fleet",
    "\x00ow": "flow",
    "\x00ows": "flows",
    "\x00ight": "flight",
    "\x00ood": "flood",
    "\x00ag": "flag",
    "\x00uctuates": "fluctuates",
    "re\x00ect": "reflect",
    "\x00la": "fla",
    "\x00le": "file",
    "\x00les": "files",
    "\x00rst": "first",
    "\x00nd": "find",
    "\x00nds": "finds",
    "\x00ndings": "findings",
    "\x00lter": "filter",
    "\x00lters": "filters",
    "\x00ltering": "filtering",
    "\x00nancial": "financial",
    "\x00nance": "finance",
    "\x00rewall": "firewall",
    "\x00eld": "field",
    "\x00elds": "fields",
    "\x00ve": "five",
    "\x00nish": "finish",
    "\x00nishes": "finishes",
    "\x00x": "fix",
    "\x00xed": "fixed",
    "\x00nal": "final",
    "\x00nally": "finally",
    "\x00ne": "fine",
    "\x00rm": "firm",
}

def clean_content(text: str) -> str:
    # 1. Resolve ligatures
    for bad, good in LIGATURE_MAP.items():
        text = text.replace(bad, good)
        text = text.replace(bad.capitalize(), good.capitalize())
    text = text.replace("\x00", "fi")

    # 2. Format questions into coherent paragraphs
    parts = re.split(r"(?=^Question #\d+)", text, flags=re.MULTILINE)
    header = parts[0]
    out = [header.rstrip() + "\n\n"]

    for q in parts[1:]:
        m_callout = re.search(r"\n(> \[!NOTE\].*?\n---|\n> \[!NOTE\].*?\Z)", q, re.DOTALL)
        if m_callout:
            callout = m_callout.group(1).strip()
            q_body = q[:m_callout.start()]
        else:
            callout = ""
            q_body = q

        m_qhead = re.match(r"(Question #\d+)\s*\n+(?:Topic \d+\s*\n+)?", q_body)
        if not m_qhead:
            out.append(q)
            continue
        q_num_str = m_qhead.group(1)
        body_rest = q_body[m_qhead.end():]

        opt_matches = list(re.finditer(r"^([A-E])\.\s+", body_rest, flags=re.MULTILINE))
        if opt_matches:
            prompt_raw = body_rest[:opt_matches[0].start()]
            prompt = " ".join(l.strip() for l in prompt_raw.split("\n") if l.strip())

            opts = []
            for i, om in enumerate(opt_matches):
                opt_key = om.group(1)
                start_i = om.end()
                end_i = opt_matches[i+1].start() if i+1 < len(opt_matches) else len(body_rest)
                opt_text = " ".join(l.strip() for l in body_rest[start_i:end_i].split("\n") if l.strip())
                opts.append(f"{opt_key}. {opt_text}")
            opts_formatted = "\n\n".join(opts)

            if callout:
                q_full = f"{q_num_str}\n\n{prompt}\n\n{opts_formatted}\n\n{callout}\n\n"
            else:
                q_full = f"{q_num_str}\n\n{prompt}\n\n{opts_formatted}\n\n---\n\n"
        else:
            prompt = " ".join(l.strip() for l in body_rest.split("\n") if l.strip())
            if callout:
                q_full = f"{q_num_str}\n\n{prompt}\n\n{callout}\n\n"
            else:
                q_full = f"{q_num_str}\n\n{prompt}\n\n---\n\n"

        out.append(q_full)

    res = "".join(out)
    # Strip any trailing whitespace on lines
    clean_lines = [l.rstrip() for l in res.split("\n")]
    return "\n".join(clean_lines).strip() + "\n"

def main():
    target_files = sorted(MODULE_DIR.glob("sections/*.md")) + [MODULE_DIR / "notes.md"]
    for path in target_files:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        cleaned = clean_content(content)
        with open(path, "w", encoding="utf-8") as f:
            f.write(cleaned)
        print(f"Fixed: {path.name} (nulls={cleaned.count(chr(0))})")

if __name__ == "__main__":
    main()
