# 07 · Iconography

## Two icon families

| Family | Style | Sizes | Where |
|---|---|---|---|
| **System glyphs** | [Phosphor](https://phosphoricons.com) *Regular* (MIT), drawn on a 256-unit grid; *Fill* weight for selected states | 16 / 20 / 24 px | Menu bar, menus, toolbars, settings rows |
| **App icons** | macOS-style squircle with a rich vertical gradient, soft clay depth and one white Phosphor *Fill* symbol | 22 (title bar), 30 (search), 48 (dock), 52 (Six Menu), 256 px | Dock, Six Menu, Six Search, title bars |

Phosphor was chosen over Lucide, Tabler and Remix because it has one consistent drawing style in
six weights (thin to fill, plus duotone), 1,500+ icons that cover OS needs (devices, files,
media, accessibility), and a fill weight that reads well inside coloured app tiles. Its icons
ship as plain SVG paths, so the shell embeds only the ones it uses.

## System glyph rules
- Use *Regular* everywhere by default; *Fill* means **active / selected** (filled bell = new
  notifications). Never fill for decoration.
- Glyphs sit on whole pixels at 1× to stay sharp; 16 px is the smallest size.
- Every icon-only button has a tooltip (500 ms delay, instant between neighbours) and an
  accessible name.
- Icons inherit `currentColor`; they are never multi-coloured.
- One meaning, one icon: Night light is a moon, Focus is a crossed-out bell, More contrast a
  half-filled circle.

## App icon rules
- Shape: squircle with 23 % corner radius; never a custom silhouette, so the dock reads as one row.
- Fill: a two-stop vertical gradient, lighter at the top. A 1 px inner top highlight, a soft inner
  shade at the bottom and a drop shadow give it the clay depth of the rest of SIX.
- Symbol: one white Phosphor *Fill* glyph, centred, about 58 % of the tile, with a 1 px shadow.
  No text in icons.
- Each first-party app owns one hue family: Files blue, Browser teal, Mail sky, Music rose,
  Terminal graphite (green glyph), Design violet, Settings silver (dark glyph), Six Menu iris.
- Pip's dock icon is the dotted-sphere orb on a near-black tile (see [14 · Home](14-home-assistant.md#the-small-orb)).
- Third-party and Windows apps keep their own icon, placed on a neutral squircle so the row stays
  consistent.

## Status glyphs in the menu bar
Battery, network and volume glyphs show their level in the shape itself (bars, fill) **and** in
an accessible label ("Battery 64 %, charging"). Hover shows the exact value.

## Desktop and file icons
- File types use a "paper" sheet with a coloured corner tab showing the type family:
  documents (Tide), images (Rose), audio (Butter), video (Peach), archives (Lilac), code (Mint).
- Thumbnails replace the generic icon whenever available (images, PDFs, videos).
- Selected desktop icons get an `--c-accent-soft` pill behind icon and label.
