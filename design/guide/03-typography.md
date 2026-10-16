# 03 · Typography

## Typefaces

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

### Tracking and features
- Body text tracks in by **-0.02em** (`--tracking-ui`). Monospace runs about 15 % wider than a
  grotesque at the same size; the tracking brings lines close to their old length so layouts
  keep their breaks. Caps eyebrows keep their positive tracking.
- **Ligatures off** in the UI (`font-variant-ligatures: none`): `->` and `!=` should read as typed.
  The terminal and code editors offer them as a user option.
- Every figure is already tabular in a monospace face, so clocks, battery % and timers never
  jiggle.
- Long words cost more width in monospace. Prefer short labels ("Night light", not "Night light
  schedule") and let tiles wrap to two lines rather than shrinking type.

## Type scale

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

## Rules
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
