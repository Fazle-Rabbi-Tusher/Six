# 06 · Layout, spacing and sizing

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
| `--control-sm` | 28 | 36 | Toolbar icon buttons, chips |
| `--control-md` | 36 | 44 | Default buttons, inputs, list rows, menu rows |
| `--control-lg` | 44 | 52 | Primary actions in dialogs, onboarding |
| `--target-min` | 32 | 44 | Smallest clickable area (visual can be smaller, hit area can't) |

Touch mode switches on automatically when a keyboard is detached on a 2-in-1, or manually in
Quick Settings.

## Radii

| Token | px | Use |
|---|---|---|
| `--radius-xs` | 6 | Checkbox, small chip |
| `--radius-sm` | 8 | Inputs, list row highlight |
| `--radius-md` | 12 | Buttons, menus, popovers, tooltips |
| `--radius-lg` | 16 | Windows, cards, dialogs |
| `--radius-xl` | 22 | Clay tiles |
| `--radius-2xl` | 28 | Dock, Six Search, sheets |
| `--radius-icon` | 24 % | App icon squircle |

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

- Title bar: 44 px; caption buttons are 46 × 44 px each (close turns `--c-danger` with white glyph
  on hover; this is the one place danger colour is used without a label because the ✕ is universal).
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
│ ⁘ Home                                   ⌕ wifi ▮▮▯ ◐  ⁘  Mon 10:42  │ menu bar, 32px
│  home cards                       Pip                    home cards  │
│                          windows / conversation                      │
│                                                                      │
│            ╭───────────────────────────────────────────╮             │
│            │ ⁘  ▣  ▣  ▣  ▣  ▣  ▣  ▣  │  ◍  🗑 │             │ dock, 68px, floats 8px
│            ╰───────────────────────────────────────────╯             │
└──────────────────────────────────────────────────────────────────────┘
```

The dock is centred and sized to its icons (48 px icons on a 56 px pitch, up to 1.5× under the
pointer). Maximized windows fill the space between the menu bar and the dock (the dock can be
set to auto-hide). Hit areas still extend to the very screen edge. The Taskbar layout option
uses a full-width 60 px bar instead (see [09](09-shell.md#menu-bar-and-dock-macos-style-layout)).
