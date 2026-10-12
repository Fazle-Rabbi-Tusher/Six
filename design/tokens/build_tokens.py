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
    pattern = r"--((?:c|clay|plasma)-[a-z0-9-]+):\s*(#[0-9a-fA-F]{6}|rgba\([^)]*\))"
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
            "ui": {"$type": "fontFamily", "$value": ["Inter", "Noto Sans", "Noto Sans Bengali", "system-ui", "sans-serif"]},
            "display": {"$type": "fontFamily", "$value": ["Bricolage Grotesque", "Inter", "Noto Sans", "sans-serif"]},
            "mono": {"$type": "fontFamily", "$value": ["JetBrains Mono", "Noto Sans Mono", "monospace"]},
        },
        "style": {k: {"$type": "typography", "$value": v.strip()} for k, v in re.findall(r"--text-([a-z-]+):\s*([^;]+);", root)},
    },
    "space": vals("space", "dimension"),
    "radius": vals("radius", "dimension"),
    "size": {
        k: {"$type": "dimension", "$value": v.strip()}
        for k, v in re.findall(r"--((?:control|target|titlebar|shelf|icon|appicon)-[a-z-]*|measure):\s*([^;]+);", root)
    },
    "duration": vals("dur", "duration"),
    "easing": {k: {"$type": "cubicBezier", "$value": v.strip()} for k, v in re.findall(r"--ease-([a-z]+):\s*(cubic-bezier\([^)]*\))", root)},
    "spring": {
        "snappy": {"$type": "spring", "$value": {"stiffness": 420, "damping": 34, "mass": 1}, "$description": "menus, toggles, window snap"},
        "gentle": {"$type": "spring", "$value": {"stiffness": 220, "damping": 26, "mass": 1}, "$description": "window open, overview, orb"},
        "liquid": {"$type": "spring", "$value": {"stiffness": 140, "damping": 14, "mass": 1}, "$description": "plasma surfaces fusing; decorative only"},
    },
    "color": {
        theme: {
            "semantic": group("c-", palette),
            "clay": group("clay-", palette),
            "plasma": group("plasma-", palette),
        }
        for theme, palette in (("light", light), ("dark", dark_colors))
    },
}

(HERE / "tokens.json").write_text(json.dumps(tokens, indent=2) + "\n")
print("wrote tokens.json")
