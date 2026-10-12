# 05 · Materials and elevation

Soft Matter has exactly three materials. Pick by **role**, never by taste.

```
           ┌──────────────── Plasma glass ────────────────┐   floats above, temporary
           │  shelf · menus · popovers · Six Search       │
           └──────────────────────────────────────────────┘
   ┌───────────── Paper (window) ─────────────┐               where work happens
   │  text, lists, documents, forms           │
   │    ╭──────╮  ╭──────╮                     │
   │    │ Clay │  │ Clay │  ← things you press │
   │    ╰──────╯  ╰──────╯                     │
   └──────────────────────────────────────────┘
                 Plasma wallpaper (ambient, never holds text)
```

## 1. Clay: things you press

A filled, rounded object that looks soft and slightly inflated. Built from three shadows:

1. an **outer drop shadow** tinted with the object's own hue (it lifts the object),
2. an **inner highlight** at the top-left (light hits it),
3. an **inner shade** at the bottom-right (it has volume).

```css
.clay {
  background: var(--clay-lilac);      /* or --c-accent for primary */
  border-radius: var(--radius-xl);
  box-shadow: var(--clay-2);
}
.clay:active { box-shadow: var(--clay-pressed); transform: translateY(1px) scale(0.98); }
```

| Level | Token | Use |
|---|---|---|
| clay-1 | `--clay-1` | Buttons, segmented controls, toggles' thumb, chips |
| clay-2 | `--clay-2` | Quick-setting tiles, cards that are clickable, app-grid icons |
| clay-3 | `--clay-3` | Shelf app icons on hover, onboarding hero objects, the Orb |
| pressed | `--clay-pressed` | Pressed / toggled-on state (the object pushes *in*) |

**Rules**
- Clay objects are small: up to ~240 × 160 px. A whole window is never clay.
- The fill carries contrast. Never make a clay button the same colour as its background.
- On (selected, toggled) = accent fill **and** an icon/label change. Shadow alone is never state.
- Radius scales with size: 12 px for buttons, 22 px for tiles, 24 % squircle for icons.
- Dark mode: highlight drops to 14 % white, drop shadow becomes black; clay stays readable
  because the pastels are re-tuned, not dimmed.

## 2. Plasma glass: things that float

Translucent, blurred, slightly saturated material for temporary or always-on-top chrome. It shows
a hint of what is behind it so the user keeps context (which window the menu belongs to).

```css
.glass {
  background: var(--glass-fill);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  border: 1px solid var(--glass-edge);
  box-shadow: inset 0 1px 0 var(--glass-rim), var(--shadow-3);
  border-radius: var(--radius-md);
}
```

**Rules**
- Minimum fill opacity: **78 % light, 72 % dark** (tokens). Text on glass must pass 4.5:1
  against the worst case (white and black wallpapers). If a renderer can't blur, it uses
  `--glass-fill-strong`.
- Glass never stacks on glass more than once (menu → submenu is fine; nothing deeper).
- The **iridescent rim** (a 1 px gradient border in the plasma colours) is reserved for the shelf
  and Six Search, the two "home" surfaces. Everything else uses the plain rim.
- **Reduce transparency** replaces glass with `--c-surface`. Layout and shadows stay the same.
- Performance: blur is the most expensive effect in the shell. Budget **at most 3 live blurred
  surfaces** on screen; the shelf caches its blur when no window moves behind it. Without GPU
  compositing, glass falls back to the solid fill (same approach as plasma-ui's CSS fallback).

## 3. Paper: where work happens

Windows, documents, settings pages, lists. Opaque, flat, quiet.

- Background `--c-surface`, sidebars `--c-surface-2`.
- Separated with whitespace first, hairlines (`--c-line`) second, shadows never inside a window.
- Text lives here. Long reading uses `text-body-lg` and the 68ch measure.

## 4. Plasma wallpaper: ambient only

A slow field of blurred colour blobs (the plasma moods) that drift over ~60 s loops. It is GPU
cheap (one fragment shader at reduced resolution, paused when fully covered by maximized windows
or on battery saver) and freezes to a still frame under *Reduce motion*.

Desktop widgets may use the **liquid** behaviour from plasma-ui (fuse when dragged together, snap
to the 24 px grid). Functional UI never stretches or wobbles.

## Elevation scale

| z | Surface | Material | Shadow |
|---|---|---|---|
| 0 | Wallpaper | Plasma wallpaper | none |
| 1 | Desktop widgets, desktop icons | Glass (widgets) | `--shadow-1` |
| 2 | Inactive windows | Paper | `--shadow-2` |
| 3 | Active window | Paper | `--shadow-3` |
| 4 | Shelf | Glass + iridescent rim | `--shadow-3` |
| 5 | Menus, popovers, Six Menu, Quick Settings | Glass | `--shadow-3` |
| 6 | Notifications / toasts | Glass (strong) | `--shadow-3` |
| 7 | Dialogs (modal) | Paper over `--scrim` | `--shadow-4` |
| 8 | Six Search, Overview, lock screen | Glass + iridescent rim / full-screen | `--shadow-4` |

The active window must be distinguishable from inactive ones **without colour**: larger shadow
plus full-strength title text (inactive titles use `--c-text-3`).
