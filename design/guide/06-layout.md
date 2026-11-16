# 06 · Layout, spacing and sizing

Spacing is shared by both designs. Sizes and radii differ where noted: the first value is Soft
Matter, the second Sculpted, the default ([19](19-sculpted.md#geometry)).

## The 4 px grid
All spacing and sizes are multiples of 4 px (2 px only for hairline nudges). Desktop windows and
widgets snap to a **24 px grid** when dragged (magnet distance 16 px; hold Alt to disable snapping).

| Token | px | Typical use |
|---|---|---|
| `--space-2` | 4 | Icon-to-label gap in dense rows |
| `--space-3` | 8 | Gap between related controls |
| `--space-4` | 12 | Padding inside menus, list rows |
| `--space-5` | 16 | Card padding, gap between groups |
| `--space-7` | 24 | Window content padding |
| `--space-8` | 32 | Between sections on a settings page |
| `--space-10` | 48 | Page margins at large widths |

**Proximity rule:** the space *inside* a group is always smaller than the space *between* groups.

## Control sizes

| Token | Pointer mode | Touch mode | Use |
|---|---|---|---|
| `--control-sm` | 28 (Sculpted 36) | 36 (44) | Toolbar icon buttons, chips |
| `--control-md` | 36 (Sculpted 44) | 44 (52) | Default buttons, inputs, list rows, menu rows |
| `--control-lg` | 44 (Sculpted 52) | 52 (60) | Primary actions in dialogs, onboarding |
| `--target-min` | 32 (Sculpted 44) | 44 | Smallest clickable area (visual can be smaller, hit area can't) |

Touch mode is switched on in Control Center (the Touch tile) or Settings › Accessibility.

## Radii

| Token | Soft Matter | Sculpted | Use |
|---|---|---|---|
| `--radius-xs` | 6 | 8 | Checkbox, small chip |
| `--radius-sm` | 8 | 8 | Inputs, list row highlight |
| `--radius-md` | 12 | 12 | Buttons, menus, popovers, tooltips |
| `--radius-lg` | 16 | 20 | Windows, cards, dialogs |
| `--radius-xl` | 22 | 24 | Clay tiles, Control Center tiles |
| `--radius-2xl` | 28 | 28 | Dock, SIX Search, sheets |
| `--radius-icon` | 24 % | 28 % in the dock | App icon squircle |

**Nested radius rule:** inner radius = outer radius − padding. A 16 px card with 8 px padding holds
8 px-radius items. Maximized and snapped windows drop their radius to 0 on the screen-edge sides.

## Window anatomy

```
┌────────────────────────────────────────────────────────── 16px radius ┐
│ [icon] Title                     [ search / tabs ]       ─   ▢   ✕    │ 44px title bar
├───────────────┬───────────────────────────────────────────────────────┤
│ Sidebar       │  Content (paper)                                      │
│ 240px         │  24px padding · max line 68ch                         │
│ surface-2     │                                                       │
│               │                                     [Secondary] [Primary]
└───────────────┴───────────────────────────────────────────────────────┘
```

- Title bar: 44 px in both designs. The window buttons sit on the **right**, in the order minimise,
  maximise, close, in every app (SIX's own windows, other apps' frames and GTK sheets). Soft Matter:
  round satin buttons, 28 px, 8 px apart, 12 px from the right edge. Sculpted: raised round buttons,
  32 px, 10 px apart, 14 px from the right edge, a 14 px glyph; pressed, they sink and travel 1 px.
  On hover close turns red `#C42B1C`, minimise green `#1F7A3D`, maximise blue `#1D5FD0`, each
  with a white glyph. Each has at least a 32 px hit area and a visible focus ring.
- Corners: 16 px (Soft Matter), 24 px (Sculpted); the title is Noto Sans 600 14/20 in Sculpted.
- The whole title bar is a drag handle; double-click maximizes (Windows behaviour).
- Sidebar: 240 px default, 200–320 px resizable, collapses to an icon rail below 720 px window width.
- Minimum window size: 360 × 240 px.
- Default new-window size: 60 % of the work area, centred, cascading 24 px for each additional window.

## Breakpoints inside windows
Apps respond to **window width**, not screen width:

| Width | Layout |
|---|---|
| < 560 px | Single column; sidebar becomes a back-stack; toolbar actions move to an overflow menu |
| 560–959 px | Icon-rail sidebar + content |
| ≥ 960 px | Full sidebar + content (+ optional detail pane ≥ 1280 px) |

## Screen layout

```
┌──────────────────────────────────────────────────────────────────────┐
│ ⁘ Home                                   ⌕ wifi ▮▮▯ ◐  ⁘  Mon 10:42  │ menu bar, 32/36px
│  home cards                     (notch)                  home cards  │
│                          windows / conversation                      │
│                                                                      │
│            ╭───────────────────────────────────────────╮             │
│            │ ⁘  ▣  ▣  ▣  ▣  ▣  ▣  ▣  │  ◍  🗑 │             │ dock, 68px, floats 8px
│            ╰───────────────────────────────────────────╯             │
└──────────────────────────────────────────────────────────────────────┘
```

The dock is centred and sized to its icons (48 px icons on a 56 px pitch in Soft Matter; 36 px
icons on a 52 px raised tile, 60 px pitch, in Sculpted; up to 1.5× under the pointer). The menu bar
is 32 px in Soft Matter and 36 px in Sculpted. The dock hides while the front window is maximised or
full screen and comes back when the pointer reaches the bottom edge. Hit areas still extend to the very screen edge. The Taskbar layout option
uses a full-width 60 px bar instead (designed, not built: SIX has the menu bar and dock only).
