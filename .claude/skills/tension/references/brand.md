# Brand, writing and accessibility

## The mark: Hex Face

A hexagonal band that spirals inward like the numeral six, drawn as one stroke the way a line of
code is written, with two eyes at its centre. The eyes are the assistant's: the mark is the system looking
back at you.

| Part | Drawing (400-unit box, centred on 0,0) |
|---|---|
| Band | One open polyline, `M90.9 -97.5 L0 -150 L-129.9 -75 L-129.9 75 L0 150 L129.9 75 L129.9 -20 L0 -92 L-79.67 -46 L-79.67 46 L0 92 L39.84 69`, stroke 34, mitred joins, butt ends |
| Eyes | Two circles, r 14, at (±24, 4) |
| Small drawing (≤ 32 px) | Stroke 44, eyes r 20 at (±26, 4), so it survives the pixel grid |

| File | Use |
|---|---|
| `six-mark.svg`, `six-mark-white.svg` | The mark alone, cobalt or white |
| `six-app-icon.svg` | App icon: cobalt rounded square (radius 22 % of the side), the mark at 79 % |
| `six-app-icon-small.svg` | App icon at 32 px and under (favicon, tray, notifications) |
| `six-wordmark.svg`, `six-wordmark-white.svg` | SIX OS with its cursor, text outlined |
| `six-lockup.svg`, `six-lockup-cobalt.svg` | Mark and wordmark side by side |

### Rules
- **Clear space:** one band width (about 8 % of the mark) on every side.
- **Minimum size:** 16 px for the mark; the lockup needs the wordmark at 24 px or more.
- **One flat colour** for band and eyes on a flat ground. No gradients on the mark, outlines,
  rotation or added effects. The app icon may carry the dock's shared light, like every app icon.
- **Grounds:** white on cobalt or night (`#0A1440`), cobalt on white or paper (`#F3F1EC`). On a
  photo, put the mark on a cobalt tile.
- **The eyes may blink** (every 4.5–5 s, 6 % of the cycle) where the mark is large and alive: the
  boot screen, About, onboarding. Never in the menu bar, dock or anything a user reads past.
- **The mark is not the assistant.** Six, the assistant, keeps its own orb (Bloom, Halo, Ripple,
  Dotted, Ink, Mosaic; see 14). The mark stands for SIX, the system: the menu-bar button, the Six Menu
  app icon, About, the boot screen, the installer, the login screen and documentation.

## The wordmark

**SIX** in Share Tech Mono, a small **OS** at 36 % of its size sitting on the same baseline, then
a block cursor (a fifth of the cap height wide, two fifths tall). In the light lockup, SIX is ink
(`#12141A`) and OS is cobalt; on cobalt, SIX is white and OS is `#C9D3FF`. When the wordmark is
live (About, the boot screen) the cursor blinks once a second; in print and in static artwork it
is solid or left out. The SVGs have the text converted to outlines, so they render anywhere
without the font.

## Colour

| Token | Value | Use |
|---|---|---|
| `--brand` | `#1B3CFF` cobalt | The app icon, the boot screen, the lockup's mark |
| `--brand-hi` / `--brand-lo` | `#2B50FF` / `#1230D6` | The app icon's top-to-bottom light |
| `--brand-ink` | `#C9D3FF` | OS in the wordmark and the status line on cobalt (4.54:1) |
| `--brand-night` | `#0A1440` | The ground behind the app icon in marketing artwork |

Cobalt is the brand, not a UI accent: buttons, selection and focus keep following the user's
accent setting (04). `check_contrast.py` verifies the brand pairs.

### Colour studies

Seven more studies from the canvas, for editions, themes and wallpapers. Each pairs a mark colour
with its own near-black ground; the eyes can differ from the band.

| Study | Mark | Eyes | Ground |
|---|---|---|---|
| Mint Signal | `#1DE28D` | `#1DE28D` | `#000000` |
| Cyan Core | `#22D3EE` | `#E6FBFF` | `#06141A` |
| Electric Violet | `#8B7CFF` | `#F1EEFF` | `#0D0B1F` |
| **Cobalt** (the brand) | `#FFFFFF` | `#FFFFFF` | `#1B3CFF` |
| Amber Boot | `#FFB020` | `#FFF4DE` | `#120D05` |
| Coral | `#FF5C72` | `#FFE9EC` | `#160A0D` |
| Acid Lime | `#C4F03A` | `#F7FFE0` | `#0D0F08` |
| Ink on Paper | `#12141A` | `#0B8F55` | `#F3F1EC` |

## The boot screen

On cobalt, in VT323, about six seconds from power-on. Times are seconds from the moment the
screen appears:

| Time | What happens | Motion |
|---|---|---|
| 0.15–0.60 | A black frame fades to cobalt: the panel powering on | ease-out |
| 0.50–0.95 | The eyes pop open | `cubic-bezier(0.3, 1.6, 0.5, 1)`, an overshoot |
| 1.0 → | The eyes blink every 4.5 s | squash to 10 % height and back in 8 % of the cycle |
| 1.30–2.80 | The hex band draws itself around the eyes, from the outer end inward | `cubic-bezier(0.65, 0, 0.35, 1)` on the stroke length |
| 2.70 → | The terminal cursor appears and blinks once a second | stepped |
| 2.90–3.52 | S, I, X, then O, S type one letter every 0.12 s | stepped |
| 3.40 → | SIX glitches for 0.2 s every 2.8 s: a jitter with cyan (`#4DF3FF`) and magenta (`#FF3E9A`) slices | |
| 3.80–5.50 | The loader runs; the status line types out underneath | |
| 6.30 | The screen fades to the session in 0.62 s, and the desktop's ripple plays from the centre | ease-in |

**Loaders** (Settings › About › Startup screen): **Terminal** (the default: `[` 20 cells `]`
switching on at a slightly uneven pace, like real work), **Scan** (a 280 px line with a sweeping
segment that then fills), **Counter** (`> 0%` to `> 100%`) and **Hexagons** (six hex outlines
filling one by one).

**Status line:** *bravo six going dark* at start and restart; *restarting into 1.0.3* (the
version) when an update is being switched to.

**Rules:**
- Any key, click or tap skips it, and a **Skip** button sits top right.
- **Reduced motion** shows the finished frame (mark drawn, wordmark typed, loader full) for
  1.4 s, then fades.
- **It never slows boot down.** On a real machine the loader follows real progress (below); if
  the system is ready before the band has drawn, the screen fades to the login screen at once.
- The stage is drawn at 1280 × 720 and scaled to fit the screen, so proportions never change.

### On the device: a Plymouth theme

SIX replaces `fedora-logos` and Fedora's Plymouth theme with its own package (`six-logos`), as
the trademark rules require (17). The boot
screen is a **Plymouth script theme**, `six`:

| Piece | How |
|---|---|
| Ground | `Window.SetBackgroundTopColor` / `BottomColor` to cobalt (`0.106, 0.235, 1.0`) |
| Mark | Plymouth can't stroke paths, so the band ships as a sprite sequence: 46 PNG frames of the draw rendered from `six-mark-white.svg` at 1× and 2× (the 2× set on HiDPI screens). The eyes are separate sprites, scaled for the pop and blink |
| Wordmark | Per-letter sprites rendered in VT323 (the theme can't rely on font rendering this early), revealed on the same timeline |
| Loader | `Plymouth.SetBootProgressFunction` drives the cells from **real** boot progress; the timeline above is the shape of a typical boot, not a delay |
| Disk password | `Plymouth.SetDisplayPasswordFunction`: the mark stays, the loader line becomes `> passphrase: ••••▮` in VT323 |
| Messages | `Plymouth.SetMessageFunction` replaces the status line with the system's message when there is one (for example, a file-system check) |
| Shutdown and restart | The same screen; the eyes close at the end, and the status line reads *going dark* |
| Hand-over | The screen fades to the SIX login screen (GDM), which starts on cobalt with the mark in place, so there is no black flash |

GRUB stays hidden, as Fedora hides it, unless the last boot failed; its menu uses the cobalt
ground and VT323 too. The installer and the firmware update screen use the brand sheet's lockups.

# Writing
### Voice
- **Plain:** everyday words. "Turn on", not "Enable"; "Can't connect", not "Connection failure".
- **Short:** one idea per sentence. Settings descriptions ≤ 2 lines.
- **Calm:** no exclamation marks in system UI, no blame, no jokes in errors.
- **Honest:** say what will happen, including costs ("This uses more battery").
### Patterns

| Situation | Write | Don't write |
|---|---|---|
| Button | "Install", "Delete 3 files" | "OK", "Yes", "Submit" |
| Toggle label | "Night light" (state shown by the toggle) | "Enable night light: ON" |
| Error | "Can't save to USB drive. It's full. Free up 120 MB or choose another place." | "Error 0x80070070" (put codes in a "Details" expander) |
| Confirmation (irreversible) | Title: "Permanently delete 3 files?" Body: "You can't undo this." Buttons: "Delete permanently" / "Cancel" | "Are you sure?" |
| Success toast | "Moved 3 files to Bin" + Undo | "Operation completed successfully" |
| Empty state | "No downloads yet. Files you download from the browser appear here." | "Nothing here" |
| Permission | "Allow Camera to use your location? It adds the place to photo details." | "Camera wants to access location services" |
| Progress | "Copying 12 of 240 files · about 2 min left" | "Please wait…" |
| Assistant status | "Six · searching Documents", "Six · waiting for your review" | "Six · working…", "Thinking…" with no subject |
| Assistant failure | "I couldn't find an app called "Photoshop" on this PC. Nothing was opened." + *Search for "Photoshop"* | "Something went wrong" |
| Stopped or cancelled | "Stopped. 1 action had already run and stays as it is." | "Cancelled" (with nothing about what changed) |
| Review before acting | "Moves this one file to the Bin. Nothing else changes." | "This action may affect your files" |

# Accessibility
### Built-in modes

| Mode | What changes | Token hook |
|---|---|---|
| **Reduce transparency** | All glass becomes solid `--c-surface`; blur off | `[data-transparency="reduced"]` |
| **More contrast** | Secondary text → primary; dividers → strong; glass off; focus ring 3 px | `[data-contrast="more"]` |
| **Reduce motion** | Movement → crossfades; wallpaper, Six and home cards still | `[data-motion="reduced"]` + `prefers-reduced-motion` |
| **Text size** | 100–200 % for all text; layouts reflow | root font scale |
| **Touch density** | Targets 44 px, rows 44 px, title bar 52 px | `[data-density="touch"]` |
| **High-contrast themes** | Black/white/yellow themes that override every colour token (Windows "Contrast themes") | separate theme files |
| **Colour filters** | Grayscale, deuteranopia/protanopia/tritanopia filters | compositor |

All modes are reachable from the Accessibility tile in Quick Settings, from the sign-in screen,
and from the first-run setup (`Ctrl + Alt + A`).
### Checklist for every screen

**Perceivable**
- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 for ≥ 24 px or 19 px bold); UI boundaries ≥ 3:1.
- [ ] No information by colour alone (icon + word for every state).
- [ ] Works at 200 % text size without clipping or horizontal scrolling in content.
- [ ] Text on glass passes contrast over a white *and* a black wallpaper.

**Operable**
- [ ] Everything works with keyboard only; logical tab order; no keyboard traps.
- [ ] Focus ring visible (2 px surface gap + 2 px accent) and never hidden behind the dock or menu bar,
      a sticky header or a toast (WCAG 2.4.11).
- [ ] Pointer targets ≥ 32 px (24 px is the WCAG floor; we exceed it), 44 px in touch mode.
- [ ] Drag actions have a non-drag alternative (WCAG 2.5.7), e.g. snap via the maximize flyout
      or `Six + arrows`; reorder via menu "Move left/right".
- [ ] Timeouts (toasts with actions, lock screen) can be extended or turned off.
- [ ] No content flashes more than 3 times per second.

**Understandable**
- [ ] Labels above inputs; errors explain the fix.
- [ ] Consistent placement of the same controls across apps (consistent help: WCAG 3.2.6).
- [ ] No re-entering information the system already has (redundant entry: WCAG 3.3.7).
- [ ] Sign-in doesn't require a cognitive test; allow paste and password managers (3.3.8).

**Robust**
- [ ] Every control exposes role, name, state and value to AT-SPI (Linux) / the shell's
      accessibility tree; tested with the built-in screen reader.
- [ ] Custom-drawn shell surfaces (menu bar, dock, Six, home cards, Overview) publish an accessibility tree, not a
      bitmap.
