# 04 · Color

SIX uses **one accent hue (Iris)**, a set of cool, slightly violet neutrals, four semantic
colours, and a pastel clay set for tiles and icons. All values live in
[`tokens/tokens.css`](../tokens/tokens.css). Never use a hex value in a component; use the token.

## Neutrals ("Porcelain" / "Ink")

Neutrals carry a slight violet bias toward the accent, so greys look intentional next to Iris.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--c-bg` | `#ECEAF2` | `#111017` | App background, desktop fallback |
| `--c-surface` | `#FAF9FC` | `#1B1A23` | Windows, cards, menus (solid) |
| `--c-surface-2` | `#E2DFEB` | `#262431` | Sidebars, inputs, sunken wells |
| `--c-surface-3` | `#D6D2E2` | `#312F3E` | Hovered / pressed rows |
| `--c-line` | `#CFCBDC` | `#34323F` | Dividers (decorative) |
| `--c-line-strong` | `#8F8BA3` | `#6E6A83` | Input borders, meaningful outlines (≥ 3:1) |
| `--c-text` | `#1A1923` | `#F2F1F8` | Primary text |
| `--c-text-2` | `#474556` | `#BCB9CC` | Secondary text |
| `--c-text-3` | `#5F5C70` | `#9693A9` | Tertiary text, placeholders (lightest allowed) |

## Accent: Iris

| Token | Light | Dark |
|---|---|---|
| `--c-accent` | `#5340D9` | `#9C8FFF` |
| `--c-accent-hover` | `#4733C9` | `#B0A6FF` |
| `--c-accent-soft` | `#E3DFFF` | `#2E2A55` |
| `--c-text-on-accent` | `#FFFFFF` | `#111017` |

The accent marks **the primary action, selection, focus and links**, and nothing else. Users may
pick a different accent in Settings; any user accent is auto-adjusted in lightness until it passes
4.5:1 on `--c-surface` and with `--c-text-on-accent`.

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

## Plasma moods (wallpaper)

The default wallpaper is a slow, blurred field of four colour blobs. Moods ship as presets:

| Mood | Colours | Feel |
|---|---|---|
| **Aurora** (default) | `#7B6CFF` `#39C6D4` `#FF8A6B` `#F6C9FF` | Calm, friendly |
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
