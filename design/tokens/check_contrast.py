#!/usr/bin/env python3
"""Check WCAG 2.2 contrast for the SIX colour tokens in both themes.

Usage: python3 design/tokens/check_contrast.py   (exit code 1 if any pair fails)
"""
import json
import pathlib
import re
import sys

TOKENS = json.loads((pathlib.Path(__file__).parent / "tokens.json").read_text())

# (foreground, background, minimum ratio, why)
PAIRS = [
    ("semantic.text", "semantic.surface", 4.5, "body text"),
    ("semantic.text", "semantic.bg", 4.5, "body text on background"),
    ("semantic.text-2", "semantic.surface", 4.5, "secondary text"),
    ("semantic.text-2", "semantic.surface-2", 4.5, "secondary text in sidebars"),
    ("semantic.text-3", "semantic.surface", 4.5, "tertiary text"),
    ("semantic.text-3", "semantic.surface-2", 4.5, "placeholders in inputs"),
    ("semantic.accent", "semantic.surface", 4.5, "links, selected labels"),
    ("semantic.accent", "semantic.accent-soft", 4.5, "selected row label"),
    ("semantic.text-on-accent", "semantic.accent", 4.5, "primary button label"),
    ("semantic.line-strong", "semantic.surface", 3.0, "input borders (non-text)"),
    ("semantic.info", "semantic.surface", 4.5, "info text"),
    ("semantic.success", "semantic.surface", 4.5, "success text"),
    ("semantic.warning", "semantic.surface", 4.5, "warning text"),
    ("semantic.danger", "semantic.surface", 4.5, "danger text"),
    ("semantic.info", "semantic.info-soft", 4.5, "info banner"),
    ("semantic.success", "semantic.success-soft", 4.5, "success badge"),
    ("semantic.warning", "semantic.warning-soft", 4.5, "warning badge"),
    ("semantic.danger", "semantic.danger-soft", 4.5, "danger banner"),
    ("pip.line", "semantic.bg", 4.5, "Pip state label on home"),
    ("pip.line", "semantic.surface-2", 4.5, "Pip label in wells"),
] + [("semantic.text", f"clay.{c}", 4.5, "text on clay tile") for c in ("lilac", "mint", "peach", "sky", "butter", "rose")]


def luminance(hex_color):
    channels = [int(hex_color.lstrip("#")[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    r, g, b = [c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4 for c in channels]
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(a, b):
    hi, lo = sorted((luminance(a), luminance(b)), reverse=True)
    return (hi + 0.05) / (lo + 0.05)


def lookup(theme, path):
    group, name = path.split(".")
    return TOKENS["color"][theme][group][name]["$value"]


failures = 0
for theme in ("light", "dark"):
    print(f"\n{theme}")
    for fg, bg, minimum, why in PAIRS:
        r = ratio(lookup(theme, fg), lookup(theme, bg))
        ok = r >= minimum
        failures += not ok
        print(f"  {'PASS' if ok else 'FAIL'} {r:5.2f}:1  (min {minimum})  {fg} on {bg}  · {why}")

# accent options from tokens.css: the accent pairs must hold for every choice, in both themes
CSS = (pathlib.Path(__file__).parent / "tokens.css").read_text()
for m in re.finditer(r':root\[data-accent="([a-z]+)"\](\[data-theme="dark"\])?\s*\{', CSS):
    name, theme_sel = m.group(1), m.group(2) or ""
    theme = "dark" if theme_sel else "light"
    block = CSS[m.end():].split("}", 1)[0]
    v = dict(re.findall(r"--c-([a-z-]+):\s*(#[0-9a-fA-F]{6})", block))
    surface = lookup(theme, "semantic.surface")
    print(f"\naccent {name} ({theme})")
    for fg, bg, minimum, why in [(v["accent"], surface, 4.5, "links, selected labels"), (v["accent"], v["accent-soft"], 4.5, "selected row label"), (v["text-on-accent"], v["accent"], 4.5, "primary button label")]:
        r = ratio(fg, bg)
        ok = r >= minimum
        failures += not ok
        print(f"  {'PASS' if ok else 'FAIL'} {r:5.2f}:1  (min {minimum})  {fg} on {bg}  · {why}")

print(f"\n{failures} failing pair(s)")
sys.exit(1 if failures else 0)
