# 08 · Motion

Motion in SIX answers two questions: **where did this come from** and **what is happening now**.
If an animation answers neither, cut it.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-instant` | 80 ms | Press feedback (clay pushes in) |
| `--dur-fast` | 140 ms | Hover, toggles, tooltips |
| `--dur-base` | 220 ms | Menus, popovers, Quick Settings |
| `--dur-slow` | 360 ms | Window open/close/minimize, Overview |
| `--dur-ambient` | 9 s+ | Pip idle, wallpaper drift |
| `--ease-standard` | `cubic-bezier(.2,0,0,1)` | Most transitions |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | Things entering |
| `--ease-in` | `cubic-bezier(.4,0,1,1)` | Things leaving (and leaving is faster: ×0.75) |
| `--ease-spring` | CSS `linear()` spring | Window snap, toggles, clay release |

Native toolkits use the spring parameters in `tokens.json`: **snappy** (420 / 34) for menus and
snap, **gentle** (220 / 26) for windows and Overview, **liquid** (140 / 14) only for decorative
plasma surfaces.

## Choreography

| Moment | Motion |
|---|---|
| Open app | Window scales 0.94 → 1 and fades in from the shelf icon's position (gentle spring) |
| Minimize | Window shrinks toward its shelf icon; the icon does a small 2 px bounce |
| Maximize / snap | Window frame springs to its target (snappy); content re-lays out once at the end |
| Menu / popover | Fades in + moves 4 px from its anchor (`dur-base`, ease-out) |
| Close | Fade + scale to 0.97 (`dur-fast`); no bounce |
| Toggle | Thumb slides with snappy spring; tile fill crossfades |
| Clay press | Pushes in 1 px, scale 0.98 (`dur-instant`); springs back on release |
| Notification | Slides in 16 px from the right edge, stays, then slides out; never bounces |
| Pip | See [14 · Home → Pip's states](14-home-assistant.md#pips-states) |
| Home cards dragged | Follow the pointer on a spring set by viscosity; fuse with cards closer than 40 px; settle on the 24 px grid |

## Rules
- Nothing interactive waits for an animation. Input is accepted immediately, mid-animation.
- Interrupted animations retarget from their current position (springs, not fixed timelines).
- No more than one thing moves "big" at a time.
- Loops (wallpaper, Pip idle) pause when the window above them is maximized, on battery saver,
  and when the screen is idle.
- No flashes faster than 3 per second, ever (WCAG 2.3.1).

## Reduced motion
When *Reduce motion* is on (system setting or `prefers-reduced-motion`):
- Movement and scaling become 120–160 ms **crossfades**.
- Springs become `--ease-standard`.
- Wallpaper becomes a still image; Pip changes state with a crossfade and a static shape; home cards jump to place.
- Progress indicators still move (they carry information) but without decorative easing.
