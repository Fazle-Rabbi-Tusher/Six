#!/usr/bin/env python3
"""Regenerate tokens.json from tokens.css (the source of truth).

Usage: python3 design/tokens/build_tokens.py
"""
import json
import pathlib
import re

HERE = pathlib.Path(__file__).parent
css = (HERE / "tokens.css").read_text()
root = css.split("/* ── Color: dark")[0]
dark = css.split(':root[data-theme="dark"] {')[1].split("}")[0]


def colors(block):
    pattern = r"--((?:c|clay|plasma|mood|pip)-[a-z0-9-]+):\s*(#[0-9a-fA-F]{6}|rgba\([^)]*\))"
    return dict(re.findall(pattern, block))


def group(prefix, d):
    return {k[len(prefix):]: {"$type": "color", "$value": v} for k, v in d.items() if k.startswith(prefix)}


def vals(prefix, typ):
    return {k: {"$type": typ, "$value": v.strip()} for k, v in re.findall(rf"--{prefix}-([a-z0-9-]+):\s*([^;]+);", root)}


light = colors(root)
dark_colors = {**light, **colors(dark)}

tokens = {
    "$description": "SIX OS 'Soft Matter' design tokens (W3C Design Tokens format). "
    "Generated from tokens.css by build_tokens.py: edit the CSS, then regenerate.",
    "font": {
        "family": {
            "ui": {"$type": "fontFamily", "$value": ["JetBrains Mono", "Noto Sans Mono", "Noto Sans Bengali", "monospace"]},
            "display": {"$type": "fontFamily", "$value": ["Share Tech Mono", "JetBrains Mono", "monospace"]},
            "mono": {"$type": "fontFamily", "$value": ["JetBrains Mono", "Noto Sans Mono", "monospace"]},
            "pixel": {"$type": "fontFamily", "$value": ["VT323", "JetBrains Mono", "monospace"], "$description": "boot screen only"},
        },
        "tracking": {"ui": {"$type": "dimension", "$value": "-0.02em"}},
        "style": {k: {"$type": "typography", "$value": v.strip()} for k, v in re.findall(r"--text-([a-z-]+):\s*([^;]+);", root)},
    },
    "brand": {k: {"$type": "color", "$value": v.strip()} for k, v in re.findall(r"--brand(?:-([a-z]+))?:\s*(#[0-9a-fA-F]{6});", root) for k in [k or "base"]},
    "space": vals("space", "dimension"),
    "radius": vals("radius", "dimension"),
    "size": {
        k: {"$type": "dimension", "$value": v.strip()}
        for k, v in re.findall(r"--((?:control|target|titlebar|menubar|dock|icon|appicon)-[a-z-]*|measure):\s*([^;]+);", root)
    },
    "liquid": {k: {"$type": "number" if "px" not in v else "dimension", "$value": v.split("/*")[0].strip()} for k, v in re.findall(r"--liquid-([a-z-]+):\s*([^;]+);", root)},
    "tension": {k: {"$type": "dimension" if "px" in v else "number", "$value": v.split("/*")[0].strip()} for k, v in re.findall(r"--((?:tension|neck|merge)-[a-z-]+):\s*([^;]+);", root)},
    "duration": vals("dur", "duration"),
    "easing": {k: {"$type": "cubicBezier", "$value": v.strip()} for k, v in re.findall(r"--ease-([a-z-]+):\s*(cubic-bezier\([^)]*\))", root)},
    "spring": {
        "snappy": {"$type": "spring", "$value": {"stiffness": 420, "damping": 34, "mass": 1}, "$description": "menus, toggles, window snap"},
        "gentle": {"$type": "spring", "$value": {"stiffness": 220, "damping": 26, "mass": 1}, "$description": "window open, overview, orb"},
        "liquid": {"$type": "spring", "$value": {"stiffness": 140, "damping": 14, "mass": 1}, "$description": "plasma surfaces fusing; decorative only"},
        "viscosity-water": {"$type": "spring", "$value": {"stiffness": 320, "damping": 13, "mass": 1}, "$description": "home cards, blend 54 px"},
        "precise": {"$type": "spring", "$value": {"stiffness": 177, "damping": 23, "mass": 1}, "$description": "damping ratio 0.86: windows, stacks, pages; the default"},
        "detent": {"$type": "spring", "$value": {"stiffness": 282, "damping": 23, "mass": 1}, "$description": "damping ratio 0.68: a card landing in a stack; nothing else"},
        "recoil": {"$type": "spring", "$value": {"stiffness": 300, "damping": 25, "mass": 1}, "$description": "damping ratio 0.72, one recoil of 3.7 %: tension, something let go (a control, a neck, a card)"},
        "membrane": {"$type": "spring", "$value": {"stiffness": 120, "damping": 14, "mass": 1}, "$description": "damping ratio 0.64: what leans after a pull (cards behind a stack, the Bin bulging)"},
        "viscosity-gel": {"$type": "spring", "$value": {"stiffness": 260, "damping": 27, "mass": 1}, "$description": "home cards (default), damping ratio 0.84, blend 40 px"},
        "viscosity-honey": {"$type": "spring", "$value": {"stiffness": 70, "damping": 17, "mass": 1}, "$description": "home cards, blend 32 px"},
    },
    "color": {
        theme: {
            "semantic": group("c-", palette),
            "clay": group("clay-", palette),
            "plasma": group("plasma-", palette),
            "mood": group("mood-", palette),
            "pip": group("pip-", palette),
        }
        for theme, palette in (("light", light), ("dark", dark_colors))
    },
}

(HERE / "tokens.json").write_text(json.dumps(tokens, indent=2) + "\n")
print("wrote tokens.json")
