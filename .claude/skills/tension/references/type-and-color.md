# Type and colour

### Typefaces

SIX is set in **terminal type**: every face is monospaced, the way a shell prompt is. It matches
the SIX mark (a hex band drawn like a line of code) and the boot screen, and it makes numbers,
paths and Six's status lines line up without special handling. All faces are open-licensed (SIL
Open Font License), so SIX can ship, embed and modify them.

| Role | Face | Why |
|---|---|---|
| **UI** (everything by default) | **JetBrains Mono** (variable, 100–800, roman + italic) | A monospace drawn for reading all day: tall x-height, open apertures, slashed zero, clear `Il1` and `0O`. Readable at 11–14 px in menus and lists, where most monospace faces turn to texture |
| **Display** (greetings, page titles ≥ 24 px, big numbers, lock-screen clock, the wordmark) | **Share Tech Mono** | Squared, slightly condensed terminal letters; the SIX wordmark is set in it. One weight (400), so hierarchy comes from size. Never below 24 px |
| **Pixel** (the boot screen only) | **VT323** | A VT320 terminal face. Used while SIX starts and restarts, where it reads as a machine waking up. Never in the running UI |
| **Mono** (terminal, code, file hashes) | **JetBrains Mono** | The UI face already is monospace; code just turns ligatures off |
| **Script fallback** | **Noto Sans Mono**, then Noto Sans Bengali, Arabic, Devanagari, CJK, etc. | Every language renders, never as boxes |

The mono faces cover Latin, Latin Extended, Greek and Cyrillic; every other script falls back to
Noto. For Bangla UI, pair JetBrains Mono with **Noto Sans Bengali**, set 1 px larger and with
+2 px line height compared with the Latin tokens; conjuncts need the room. Bangla is
proportional, and that is fine: monospace is a voice, not a grid every script must keep.

#### Tracking and features
- Body text tracks in by **-0.02em** (`--tracking-ui`). Monospace runs about 15 % wider than a
  grotesque at the same size; the tracking brings lines close to their old length so layouts
  keep their breaks. Caps eyebrows keep their positive tracking.
- **Ligatures off** in the UI (`font-variant-ligatures: none`): `->` and `!=` should read as typed.
  The terminal and code editors offer them as a user option.
- Every figure is already tabular in a monospace face, so clocks, battery % and timers never
  jiggle.
- Long words cost more width in monospace. Prefer short labels ("Night light", not "Night light
  schedule") and let tiles wrap to two lines rather than shrinking type.
### Type scale

Desktop base size is **14 px**. A *Text size* setting scales everything from 100 % to 200 %
(Windows "Make text bigger" equivalent). Layout must reflow, not clip, at 200 %.

| Token | Face | Size / line | Weight | Use |
|---|---|---|---|---|
| `text-hero` | Display | 96 / 96 | 400 | Lock-screen clock only (112 px in the prototype) |
| `text-display` | Display | 56 / 60 | 400 | Onboarding, empty-state heroes |
| `text-headline` | Display | 40 / 46 | 400 | Home greeting, Settings page titles, app hero titles |
| `text-title-lg` | Display | 28 / 34 | 400 | Dialog titles, section titles in apps |
| `text-title` | UI | 20 / 28 | 600 | Card titles, panel headers |
| `text-title-sm` | UI | 16 / 22 | 600 | Group headers, notification titles |
| `text-body-lg` | UI | 16 / 24 | 400 | Long reading text, help pages |
| `text-body` | UI | 14 / 20 | 400 | **Default** UI text, list rows, menus |
| `text-body-sm` | UI | 13 / 18 | 400 | Secondary text, descriptions under settings |
| `text-label` | UI | 13 / 16 | 600 | Buttons, tabs, form labels |
| `text-caption` | UI | 12 / 16 | 500 | Timestamps, dock labels, metadata |
| `text-overline` | UI | 11 / 16 | 600, caps, +0.08em | Section eyebrows in menus and settings |

Display sizes use `letter-spacing: -0.01em`. UI sizes use -0.02em. Caps use +0.08em. The boot
screen sets VT323 at 72 px (SIX), 26 px (OS, loader) and 18 px (status line), with no tracking.
### Rules
- **Nothing smaller than 12 px** for anything a user must read; 11 px is reserved for caps eyebrows.
- **Line length:** 45–75 characters for reading text (`--measure: 68ch`).
- **Weights:** 400 for reading, 600 for emphasis and labels; Share Tech Mono is always 400 (use size for emphasis). Avoid 300
  and below in the UI; thin strokes vanish on low-DPI screens and on glass.
- **Sentence case** everywhere ("Turn on Wi-Fi", not "Turn On Wi-Fi"). Caps only for overlines.
- **Truncation:** truncate in the middle for file names (`Quarterly-rep…final.xlsx`) so the
  extension stays visible; truncate at the end for everything else, with a tooltip showing the
  full text.
- **Hierarchy through size and weight, not colour alone.** `--c-text-2` is for secondary text;
  `--c-text-3` is the lightest text allowed and still passes 4.5:1.
- **Rendering:** grayscale antialiasing on HiDPI, subpixel (RGB) on 1× screens; hinting "slight".

### Neutrals ("Porcelain" / "Ink")

Neutral, cool greys. They carry no hue of their own, so the only colour on screen is the colour
that means something.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--c-bg` | `#EBECEE` | `#0C0C0E` | App background, desktop fallback |
| `--c-surface` | `#F9F9FA` | `#18191C` | Windows, cards, menus (solid) |
| `--c-surface-2` | `#E2E3E6` | `#222327` | Sidebars, inputs, sunken wells |
| `--c-surface-3` | `#D5D7DB` | `#2D2F33` | Hovered / pressed rows |
| `--c-line` | `#CDD0D5` | `#303236` | Dividers (decorative) |
| `--c-line-strong` | `#868A93` | `#6B6E75` | Input borders, meaningful outlines (≥ 3:1) |
| `--c-text` | `#16171A` | `#F3F4F6` | Primary text |
| `--c-text-2` | `#43464D` | `#BFC2C8` | Secondary text |
| `--c-text-3` | `#5A5E66` | `#979BA3` | Tertiary text, placeholders (lightest allowed) |

### Accent: Graphite (silver in the dark)

| Token | Light | Dark |
|---|---|---|
| `--c-accent` | `#34373E` | `#D4D7DD` |
| `--c-accent-hover` | `#1F2126` | `#E8EAEE` |
| `--c-accent-soft` | `#DFE1E5` | `#2C2E33` |
| `--c-text-on-accent` | `#FFFFFF` | `#111214` |

The accent marks **the primary action, selection, focus and links**, and nothing else. In light
the primary button is a graphite pill with white text; in dark it is a silver pill with near-black
text (11.9:1 and 13.0:1).

People pick the accent in Settings › Appearance. Besides Graphite there are four options; Iris
(SIX's original violet) and three that borrow a semantic hue. Each is checked against the same
pairs as Graphite (`check_contrast.py`):

| Option | Light | Dark | Accent on surface (light / dark) |
|---|---|---|---|
| Graphite (default) | `#34373E` | `#D4D7DD` | 11.3 / 12.2:1 |
| Iris | `#5340D9` | `#9C8FFF` | 6.4 / 6.5:1 |
| Tide | `#066A75` | `#4FD1DC` | 6.0 / 9.6:1 |
| Moss | `#1A6D47` | `#5FD49A` | 6.0 / 9.5:1 |
| Sun | `#85540E` | `#F2B95A` | 6.1 / 9.9:1 |

### Brand colour

Cobalt (`#1B3CFF`) belongs to the SIX mark, its app icon and the boot screen, not to the UI.
Buttons, selection and focus follow the accent above. See 18 · Brand.

### Six's colour

Six is the one warm thing on a graphite screen. `--pip-line` is Bloom's ember, used for Six's
state label, its progress bars and the menu-bar capsule's progress ring: `#9A3C1C` in light (5.9:1 on the
background) and `#FFA064` in dark (9.7:1). The orb itself is drawn, not tokenised; see
14 · Home.

Any other user accent is auto-adjusted in lightness until it passes 4.5:1 on `--c-surface` and
with `--c-text-on-accent`.

### Semantic colours

Named after the plasma moods so the vocabulary is shared with the wallpaper.

| Meaning | Name | Light | Dark | Always paired with |
|---|---|---|---|---|
| Info | Tide | `#066A75` | `#4FD1DC` | ⓘ icon |
| Success | Moss | `#1A6D47` | `#5FD49A` | ✓ icon |
| Warning | Sun | `#85540E` | `#F2B95A` | ⚠ icon |
| Danger | Ember | `#B13A2A` | `#FF8A78` | ✕ / ⛔ icon |

Each has a `-soft` background for banners and badges. Semantic colour is never the only signal:
it always comes with an icon and a word.

### Wallpapers

The default wallpaper is **Matte**: no colour, so the interface and Six stay the focus. Five drawn
wallpapers are the alternatives. Each is generated live by the home's shader (nothing is a
picture), moves slowly, and was made after a reference image.

| Wallpaper | What it is | Colours |
|---|---|---|
| **Matte** (default) | A soft centre-weighted gradient with fine grain. Dark: `#060607` edges → `#151517` centre; light: `#D4D4D8` → `#F7F7F8` | None |
| **Obsidian** | Black liquid marble: domain-warped swirls shaded as a glossy surface, silver highlights along the flows, a fine stardust | Near-black, silver `#C9D0DC` |
| **Signal** | A pink dot-matrix creature on black: a halftone grid whose dots grow with the light, an eight-legged figure in a tall oval, a dashed laser line across and a fine vertical rule | Black, pink `#FF3AA0` |
| **Contour** | Violet contour lines on black: the isolines of a warped field, white-hot where it's brightest and fading to black on the right | Indigo `#2A1F9A` → lavender `#DFE2FF` |
| **Strata** | Teal paper layers: the field cut into 13 terraces, each shading the one below, its cut edge catching the light, with paper grain; paler to the right | Deep teal `#062023` → mint `#C9EFE9` |
| **Velvet** | Deep blue soft layers: broad terraces with soft shadows and a velvet grain | Navy `#030722` → sky `#7FB0FF` |

**Readability.** The greeting, Six's label and the examples sit directly on the wallpaper, so a soft
scrim darkens (in dark) or lightens (in light) the wallpaper behind the centre column. In light
mode the drawn wallpapers are shown as a pale print of themselves (40 % strength), so dark text
keeps its contrast. Cards and panels sit on their own fill and are unaffected.

### Verified contrast (WCAG 2.2)

| Pair | Light | Dark | Requirement |
|---|---|---|---|
| text on surface | 16.6:1 | 15.4:1 | 4.5:1 |
| text-2 on surface | 8.9:1 | 9.0:1 | 4.5:1 |
| text-3 on surface | 6.2:1 | 5.8:1 | 4.5:1 |
| text-3 on surface-2 | 4.9:1 | 5.1:1 | 4.5:1 |
| accent on surface | 6.5:1 | 6.4:1 | 4.5:1 |
| text-on-accent on accent | 6.8:1 | 7.0:1 | 4.5:1 |
| semantic colours on surface | 5.7–6.1:1 | 7.5–9.7:1 | 4.5:1 |
| semantic colours on their `-soft` fill | 4.6–5.4:1 | 6.2–7.6:1 | 4.5:1 |
| accent on accent-soft (selected row) | 5.2:1 | 4.9:1 | 4.5:1 |
| line-strong on surface (input border) | 3.1:1 | 3.3:1 | 3:1 (non-text) |
| text on clay pastels | 12.1–14.7:1 | 8.3–10.3:1 | 4.5:1 |

Re-run the check whenever a token changes (a contrast script is a good first CI job).

### Rules
1. One accent per screen. A second bright colour must be semantic.
2. Large areas are neutral. Colour is for meaning and for clay objects.
3. Dark mode is designed, not inverted: lighter accent, deeper (not black) background, shadows
   replaced by a 1 px light rim on elevated surfaces.
4. Text on wallpaper always sits on a glass or solid fill. Desktop icon labels get a soft text
   shadow *and* a pill fill on hover/selection.
