# 03 · Typography

## Typefaces

All system faces are open-licensed (SIL Open Font License), so SIX can ship, embed and modify them.

| Role | Face | Why |
|---|---|---|
| **UI** (everything by default) | **Geist** (variable, 100–900) | A neutral, precise grotesque in the spirit of SF Pro: open shapes, generous spacing at 12–14 px, calm at any weight. Its clean geometry suits the macOS-style menu bar and dock |
| **Display** (greetings, page titles ≥ 28 px, lock screen, onboarding) | **Instrument Serif** (roman + italic) | Gives SIX a warm, editorial voice at large sizes, the way the plasma-ui reference sets its panel titles in a serif. One weight only (400), so hierarchy comes from size. Never below 28 px |
| **Mono** (terminal, code, file hashes, Pip's state labels) | **Geist Mono** | Same skeleton as Geist so mixed lines align; clear 0/O and 1/l/I |
| **Script fallback** | **Noto Sans** family: Noto Sans Bengali, Arabic, Devanagari, CJK, etc. | Every language renders in a matching sans, never as boxes |

Geist covers Latin and Latin Extended; every other script falls back to Noto. For Bangla UI, pair
Geist with **Noto Sans Bengali** (system default) or **Hind Siliguri** (optional, slightly more
compact). Set Bangla text 1 px larger and with +2 px line height compared
to the Latin tokens; conjuncts need the room.

### Font features to enable
- `tnum` (tabular figures) for the clock, battery %, file sizes, tables, timers: numbers that
  change must not jiggle.
- `case` for all-caps labels (overline style).
- **Geist Mono** for revealed passwords, Wi-Fi keys and file hashes, where `Il1` and `0O`
  confusion costs users time.
- `liga` off in the terminal by default (on as a user option).

## Type scale

Desktop base size is **14 px**. A *Text size* setting scales everything from 100 % to 200 %
(Windows "Make text bigger" equivalent). Layout must reflow, not clip, at 200 %.

| Token | Face | Size / line | Weight | Use |
|---|---|---|---|---|
| `text-hero` | Display | 96 / 96 | 400 | Lock-screen clock only |
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

Display sizes use `letter-spacing: -0.01em`. UI sizes use 0. Caps use +0.08em.

## Rules
- **Nothing smaller than 12 px** for anything a user must read; 11 px is reserved for caps eyebrows.
- **Line length:** 45–75 characters for reading text (`--measure: 68ch`).
- **Weights:** 400 for reading, 600 for emphasis and labels; the display serif is always 400 (use its italic for emphasis). Avoid 300
  and below in the UI; thin strokes vanish on low-DPI screens and on glass.
- **Sentence case** everywhere ("Turn on Wi-Fi", not "Turn On Wi-Fi"). Caps only for overlines.
- **Truncation:** truncate in the middle for file names (`Quarterly-rep…final.xlsx`) so the
  extension stays visible; truncate at the end for everything else, with a tooltip showing the
  full text.
- **Hierarchy through size and weight, not colour alone.** `--c-text-2` is for secondary text;
  `--c-text-3` is the lightest text allowed and still passes 4.5:1.
- **Rendering:** grayscale antialiasing on HiDPI, subpixel (RGB) on 1× screens; hinting "slight".
