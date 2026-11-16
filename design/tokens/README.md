# Design tokens

SIX's design tokens, as the product uses them on 2026-11-16. Tokens only: CSS custom properties,
no component styles.

| File | What it holds | Switched on by |
|---|---|---|
| [`tokens.css`](tokens.css) | The base set every screen reads: type, spacing (4 px grid), radii, sizes, motion, the Soft Matter colours for light and dark, satin and clay materials, Soft Matter's accent options, and the accessibility modes | always loaded first |
| [`sculpted.css`](sculpted.css) | The Sculpted design (the default): the Ivory and Graphite palettes, the four signal accents, the depth recipes, and Soft Matter's role names mapped to Sculpted's values | `<html data-design="sculpted" data-sculpted-accent="blue">` |
| [`high-contrast.css`](high-contrast.css) | High contrast for both designs, light and dark | `<html data-hc="on" data-contrast="more">` |

They load in that order and each later file wins for the names it sets.

## How the names are organised

- **Roles, not colours.** Components read role names: `--c-bg`, `--c-surface`, `--c-surface-2`,
  `--c-text`, `--c-text-2`, `--c-text-3`, `--c-line`, `--c-line-strong`, `--c-accent`, `--c-focus`,
  `--c-success`, `--c-warning`, `--c-danger`, `--c-info` (each with a `-soft` fill). Sculpted keeps
  its own palette under `--sc-*` and points the role names at it, so a screen is written once.
- **Scales:** `--space-0` … `--space-11` (0 to 64 px), `--radius-xs` … `--radius-2xl`, `--radius-full`,
  `--text-*` (shorthand `font` values), `--control-sm/md/lg`, `--target-min`, `--icon-sm/md/lg`,
  `--menubar-h`, `--titlebar-h`, `--dock-h`.
- **Motion:** `--dur-instant`, `--dur-fast`, `--dur-base`, `--dur-slow`, `--dur-ambient` and the
  curves `--ease-*` (springs written as `linear()` in Soft Matter; one ease-out in Sculpted).
- **Materials:** `--sat-*` and `--ctl-*` (satin panels and controls), `--clay-*` (tiles and icons),
  `--glass-*`, `--shadow-1` … `--shadow-4`, `--liquid-*` and `--mood-*` (the plasma home and the
  drawn wallpapers). In Sculpted the depth recipes are `--sc-raise`, `--sc-raise-s`, `--sc-raise-xs`,
  `--sc-press`, `--sc-well`.
- **Modes** are attributes on `<html>`: `data-theme="light|dark"` (otherwise the system's choice),
  `data-transparency="reduced"`, `data-motion="reduced"`, `data-contrast="more"`, `data-density="touch"`,
  `data-hc="on"`, and for Soft Matter `data-accent="iris|tide|moss|sun"` (Graphite has no attribute).
- `--pip-*` names are the assistant's colours; the prefix is the assistant's retired name, kept so
  the product's names and these stay the same.

## Older files

`tokens.json`, `build_tokens.py`, `tailwind.preset.js` and `check_contrast.py` are from October
2026. They describe Soft Matter only, and `tokens.json` does not yet carry the changes listed in
`tokens.css` since then (the focus outline, the window-button hover colours, the ink capsule, the
main button's fill) or anything of Sculpted and High contrast. Use the CSS files above as the
source.
