# 04 · Color

SIX is **graphite and silver**: neutral greys with no colour cast, and a graphite accent that
turns silver in the dark. The colour in the system comes from Pip (Bloom's ember and violet), from
the four semantic colours, and from the pastel clay set for tiles and icons. All values live in
[`tokens/tokens.css`](../tokens/tokens.css). Never use a hex value in a component; use the token.

## Neutrals ("Porcelain" / "Ink")

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

## Accent: Graphite (silver in the dark)

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

## Pip's colour

Pip is the one warm thing on a graphite screen. `--pip-line` is Bloom's ember, used for Pip's
state label, its progress bars and the notch's progress ring: `#9A3C1C` in light (5.9:1 on the
background) and `#FFA064` in dark (9.7:1). The orb itself is drawn, not tokenised; see
[14 · Home](14-home-assistant.md#pips-looks).

Any other user accent is auto-adjusted in lightness until it passes 4.5:1 on `--c-surface` and
with `--c-text-on-accent`.

## Semantic colours

Named after the plasma moods so the vocabulary is shared with the wallpaper.

| Meaning | Name | Light | Dark | Always paired with |
|---|---|---|---|---|
| Info | Tide | `#066A75` | `#4FD1DC` | ⓘ icon |
| Success | Moss | `#1A6D47` | `#5FD49A` | ✓ icon |
| Warning | Sun | `#85540E` | `#F2B95A` | ⚠ icon |
| Danger | Ember | `#B13A2A` | `#FF8A78` | ✕ / ⛔ icon |

Each has a `-soft` background for banners and badges. Semantic colour is never the only signal:
it always comes with an icon and a word.

## Clay pastels

Used for app icon tiles, quick-setting tiles when off, illustrations and empty states. Text on a
pastel is always `--c-text` (8:1 or better in both themes).

| Token | Light | Dark |
|---|---|---|
| `--clay-lilac` | `#D9D2FF` | `#3B3470` |
| `--clay-mint` | `#C4EEDB` | `#1E4A3A` |
| `--clay-peach` | `#FFD8C9` | `#5A3227` |
| `--clay-sky` | `#C7E6F7` | `#1F4256` |
| `--clay-butter` | `#FFEBB3` | `#54451B` |
| `--clay-rose` | `#FFD1E3` | `#5A2840` |

## Wallpaper moods

The default wallpaper is **Matte**: no colour, so the interface and Pip stay the focus.

| Mood | Colours | Feel |
|---|---|---|
| **Matte** (default) | Dark: `#060607` edges → `#151517` centre. Light: `#D4D4D8` edges → `#F7F7F8` centre. Fine grain | Calm, neutral |
| **Aurora** | `#7B6CFF` `#39C6D4` `#FF8A6B` `#F6C9FF` | Calm, friendly |
| **Tidal** | `#2F6BFF` `#39C6D4` `#9EF0E0` `#1B2A6B` | Cool, focused |
| **Ember** | `#FF6B4A` `#FFB86B` `#C2477F` `#3A1C3F` | Warm, evening |

Night light shifts the wallpaper mood toward Ember automatically after sunset.

## Verified contrast (WCAG 2.2)

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

## Rules
1. One accent per screen. A second bright colour must be semantic.
2. Large areas are neutral. Colour is for meaning and for clay objects.
3. Dark mode is designed, not inverted: lighter accent, deeper (not black) background, shadows
   replaced by a 1 px light rim on elevated surfaces.
4. Text on wallpaper always sits on a glass or solid fill. Desktop icon labels get a soft text
   shadow *and* a pill fill on hover/selection.
