# 07 · Iconography

## Three icon families

| Family | Style | Sizes | Where |
|---|---|---|---|
| **System glyphs** | [Phosphor](https://phosphoricons.com) *Regular* (MIT), drawn on a 256-unit grid; *Fill* weight for selected states | 16 / 20 / 24 px | Menu bar, menus, toolbars, settings rows |
| **App icons** | Clay illustrations on a squircle: a soft gradient tile with one object modelled in two or three tones, a contact shadow and a top gloss | 22 (title bar), 26 (lists), 34 (widgets), 48 (dock), 52 (Six Menu), 72 (About), 256 px | Dock, Six Menu, Six Search, title bars, Settings › About |
| **Place icons** | Clay folders with an embossed emblem, drives and file sheets | 28 (lists), 64 (icon view) | Files, open and save dialogs, Six Search |

![The dock with the clay app icons](../screens/dock-icons.png)

Phosphor was chosen over Lucide, Tabler and Remix because it has one consistent drawing style in
six weights (thin to fill, plus duotone), 1,500+ icons that cover OS needs (devices, files,
media, accessibility), and a fill weight that reads well inside small tiles. Its icons ship as
plain SVG paths, so the shell embeds only the ones it uses.

## System glyph rules
- Use *Regular* everywhere by default; *Fill* means **active / selected** (filled bell = new
  notifications). Never fill for decoration.
- Glyphs sit on whole pixels at 1× to stay sharp; 16 px is the smallest size.
- Every icon-only button has a tooltip (500 ms delay, instant between neighbours) and an
  accessible name.
- Icons inherit `currentColor`; they are never multi-coloured.
- App shortcuts inside cards and lists use the app's own squircle icon at 26 px.
- One meaning, one icon: Night light is a moon, Focus is a crossed-out bell, More contrast a
  half-filled circle.

## App icon rules
- Shape: squircle with 23 % corner radius; never a custom silhouette, so the dock reads as one row.
- Drawn at 64 × 64 and scaled; every shape sits on whole units so 22 px stays crisp.
- **One object, modelled like clay.** Each icon shows a single real object (a folder, a gear, a
  shopping bag, an envelope), built from two or three tones of one hue, lit from the top, with a
  soft contact shadow under it. No outlines, no text except Calendar's date.
- The tile is a quiet two-stop gradient that sets the app's hue family; the object carries the
  contrast. A 1 px inner top highlight, a soft inner shade at the bottom and a drop shadow give
  every tile the clay depth of the rest of SIX.

| App | Tile | Object |
|---|---|---|
| Six Menu | Graphite | Six pearl dots in a ring |
| Files | Paper white | A blue folder with a sheet inside |
| Browser | Teal to blue | A globe with a coral orbit and a small moon |
| Mail | Sky to blue | An envelope with a coral seal |
| Calendar | White with a red band | Today's month and date, live |
| Music | Rose | Two beamed notes |
| Photos | Sky | Sun, cloud and two hills |
| Terminal | Graphite | A screen with a green prompt |
| Software | Mint to green | A shopping bag with a download arrow |
| Settings | Silver | A steel gear |
| Design guide | Lilac to violet | A palette with four paints |
| Pip | Near-black | Pip's live dotted orb, the only animated icon |
| Bin | Glass | A silver bin |

- Third-party and Windows apps keep their own icon, placed on a neutral squircle so the row stays
  consistent. Software shows apps that have no icon as their initial on a tile in their colour.
- Settings sections use small 24 px tiles in a section colour with a white Phosphor glyph, like
  the sections of a system settings app (Wi-Fi blue, Display orange, Sound red, Pip violet…). Each
  colour keeps 3:1 against the white glyph.

## Place icons
- **Folders** are clay: a darker back panel with a tab, a white sheet peeking out, a lighter front
  panel. Special folders carry an embossed emblem on the front (a darker stroke with a 1 px light
  edge below it): Desktop a screen, Documents a page, Downloads an arrow, Pictures a landscape,
  Music a note, Videos a play mark, Projects code brackets.
- **Drives**: a silver slab with a green light for internal storage; an amber USB stick for
  removable drives.
- **Pictures** show a painted thumbnail instead of a file sheet.

## Status glyphs in the menu bar
- Menu bar glyphs use Phosphor *Bold* at 16 px, so they hold up at small size like macOS menu bar
  symbols.
- The battery is drawn, not an icon: an outline whose fill matches the charge, followed by the
  percentage in tabular figures.
- Control Center is a two-toggle glyph; Pip is the small orb, with a progress ring while a task
  runs.
- While the microphone is on, a mic glyph on an amber pill appears left of Control Center. It is
  never folded into another icon.
- Every status item has an accessible label ("Battery 64 %, charging"); hover shows the exact value.

## Desktop and file icons
- Files use a paper-sheet icon with a folded corner and a coloured band naming the type:
  **XLS / ODS** green, **PDF** red, **JPG / PNG** violet, **MP3** orange, **MD** slate, anything
  else blue **DOC**. The label is in the icon, so type reads without colour.
- Thumbnails replace the generic icon whenever available (images, PDFs, videos).
- Selected desktop icons get an `--c-accent-soft` pill behind icon and label.
