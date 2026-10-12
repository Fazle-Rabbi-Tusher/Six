# 07 · Iconography

## Two icon families

| Family | Style | Sizes | Where |
|---|---|---|---|
| **System glyphs** | Outline, 1.75 px stroke, round caps and joins, 24 px grid with 2 px padding | 16 / 20 / 24 px | Menus, toolbars, tray, settings rows |
| **App icons** | Clay squircle tile + a single bold symbol | 40 (shelf), 56 (grid), 96, 256 px | Shelf, Six Menu, Files, Overview |

A good open-source base for system glyphs is **Lucide** (ISC licence) or **Phosphor** (MIT),
redrawn at SIX's 1.75 px stroke so every glyph matches. Do not mix families on one screen.

## System glyph rules
- Stroke scales with size: 1.5 px at 16, 1.75 px at 20–24.
- Filled variants mean **active / selected** (e.g. outline bell = no new notifications, filled
  bell = new). Never fill for decoration.
- Glyphs always sit on whole pixels at 1× to stay sharp.
- Every icon-only button has a tooltip (after 500 ms hover, instant when moving between
  neighbouring buttons) and an accessible name.
- Icons inherit `currentColor`; they are never multi-coloured.

## App icon rules (clay)
- Shape: squircle with 24 % corner radius; never a custom silhouette, so the shelf reads as one row.
- Tile: one clay pastel (`--clay-*`) with `--clay-2` shading; symbol in a darker tone of the same
  hue or `--c-text`.
- One symbol, centred, occupying ~56 % of the tile. No text in icons (they get translated badly).
- Light source is always top-left, matching the clay highlight.
- Provide light and dark variants; the dark variant uses the dark pastel tokens.
- Third-party (including Windows) apps without a SIX icon get their own icon placed on a
  neutral clay tile so they sit in the row without clashing.

## Status glyphs in the tray
Battery, network and volume glyphs show their level in the shape itself (bars, fill) **and** in
an accessible label ("Battery 64 %, charging"). Hover shows the exact value.

## Desktop and file icons
- File types use a "paper" sheet with a coloured corner tab showing the type family:
  documents (Tide), images (Rose), audio (Butter), video (Peach), archives (Lilac), code (Mint).
- Thumbnails replace the generic icon whenever available (images, PDFs, videos).
- Selected desktop icons get an `--c-accent-soft` pill behind icon and label.
