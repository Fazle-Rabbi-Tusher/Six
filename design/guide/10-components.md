# 10 · Components

Every component lists its material, sizes and states. States that must be designed for **every**
interactive component: default, hover, pressed, focused (keyboard), disabled, and where relevant
selected, loading, error. Each is also checked in dark, reduced transparency, more contrast and
touch density.

## Buttons

| Variant | Material | Look | Use |
|---|---|---|---|
| **Primary** | Clay | Accent fill, `--c-text-on-accent`, `--clay-1` | The one main action |
| **Secondary** | Clay | `--c-surface-2` fill, `--c-text` | Other actions |
| **Quiet** | none | Transparent, `--c-text`; hover `--c-surface-3` | Toolbars, low emphasis |
| **Danger** | Clay | `--c-danger` fill, white text | Irreversible destructive actions only |
| **Icon** | Quiet | 28/36 px square, tooltip required | Toolbars, title bars |

- Heights 28 / 36 / 44 px; horizontal padding 12 / 16 / 20 px; `text-label`; radius `--radius-md`.
- Labels are verbs: "Save", "Install", "Delete 3 files". Never "OK" when a verb fits.
- Loading: label stays, a small Orb "thinking" glyph replaces the leading icon; width doesn't change.
- Dialog button order: secondary left, **primary right**; Enter = primary, Esc = cancel. The
  destructive button is never the default Enter action.

## Toggle (switch)
- Track 40 × 22 px, thumb 18 px clay. On = accent track + thumb right; off = `--c-surface-3`
  track with `--c-line-strong` outline.
- Always paired with a text label; state changes apply immediately (no Save button).

## Checkbox and radio
- 18 px box, `--radius-xs` (checkbox) / circle (radio), 2 px `--c-line-strong` border; checked = accent fill + white check.
- The label is part of the hit area.

## Text input
- 36 px tall, `--c-surface-2` fill, 1 px `--c-line-strong` border, `--radius-sm`.
- Focus: border → accent + focus ring. Error: border → danger + message below with ✕ icon, written
  as "what's wrong + how to fix" ("Password needs at least 8 characters").
- Labels sit **above** fields (never placeholder-only). Placeholders show example input.
- Clear (✕) button appears when there's text; search fields also show the shortcut hint.

## Slider
- 4 px track, 20 px clay thumb, filled part in accent. Value tooltip while dragging.
  Arrow keys step 1 %, Page Up/Down 10 %.

## Menus and context menus
- Glass, `--radius-md`, 4 px inner padding, rows 32 px (pointer) / 44 px (touch).
- Row: 16 px icon · label · right-aligned shortcut in `--c-text-3` · submenu chevron.
- Groups separated by a 1 px `--c-line` divider with 4 px space above and below.
- Max **2 levels** deep. Max ~12 items per group before it becomes a dialog or search.
- **Right-click everywhere** has a menu; the first group is always the most common actions
  (Open, Cut, Copy, Paste, Rename, Delete), in Windows order.

## Tabs and segmented control
- Segmented control (2–5 options): clay track (`--c-surface-2` + pressed shadow), selected
  segment = `--c-surface` clay-1 pill.
- Tabs (page-level): text tabs with a 3 px accent underline that slides (snappy spring).

## Lists and tables
- Row height 36 px (comfortable) / 28 px (compact, user setting in Files).
- Selection: `--c-accent-soft` fill + `--c-accent` text for the primary column. Multi-select
  with Ctrl/Shift click exactly like Windows; checkboxes appear on hover in touch mode.
- Numbers right-aligned with tabular figures. Sort indicator in the header.

## Cards and tiles
- **Card** (paper): `--c-surface`, `--radius-lg`, 16 px padding, `--shadow-1` only if it sits on
  `--c-bg`; no shadow inside windows.
- **Tile** (clay): pastel fill, `--radius-xl`, `--clay-2`; for Quick Settings, app grid, onboarding
  choices. A tile is always a single button.

## Dialogs
- Paper on `--scrim`, `--radius-lg`, 440 px wide (small) / 560 px (default), 24 px padding.
- Title (`text-title-lg`), body (`text-body`, ≤ 3 sentences), buttons bottom-right.
- Only for decisions that block. Everything else is a toast with **Undo**.

## Toasts
- Glass strong, bottom-centre above the shelf, 6 s, one action max ("Undo", "Open").
- Message in past tense: "Moved 3 files to Bin", not "Files will be moved".

## Progress
- Known duration: linear bar, 4 px, accent, with "2 of 5 · 1 min left" text.
- Unknown < 2 s: nothing (avoid flicker). Unknown > 2 s: the Orb "working" state or an inline
  thinking glyph with a status word ("Indexing…").

## Tooltips
- Glass strong, `text-caption`, 500 ms delay, appear below the pointer target, include shortcut.

## Badges and chips
- Badge: 18 px pill, semantic soft fill + semantic text. Numbers cap at "99+".
- Chip (filter): 28 px, clay-1 when selected with a ✓ icon.

---

## Adopting community components

[21st.dev](https://21st.dev) and shadcn/ui are fast sources for React + Tailwind components
when prototyping SIX apps and the web-based shell. Use [`tailwind.preset.js`](../tokens/tailwind.preset.js)
so their utility classes resolve to SIX tokens. Before a community component ships, it must pass:

1. **Tokens only.** No hard-coded colours, radii, shadows or fonts remain.
2. **Material is right.** It is clearly clay, glass or paper per [05](05-materials.md).
3. **Keyboard complete.** Reachable with Tab, operable with Enter/Space/arrows, Esc closes.
4. **Screen reader.** Correct role, name and state (check with Orca/NVDA).
5. **Focus visible** with the SIX focus ring; never `outline: none` without a replacement.
6. **Reduced motion** and **reduced transparency** handled.
7. **Targets** ≥ 32 px (44 px in touch density).
8. **Text scaling** to 200 % without clipping.
9. **Licence** is MIT/ISC/Apache-2.0 or similar and recorded in the third-party notices.
