# 08 · Motion

Motion in SIX answers two questions: **where did this come from** and **what is happening now**.
If an animation answers neither, cut it.

## The feel: precise, continuous, lit

SIX's motion takes its feel from the **Ferrari Luce** interior, designed by LoveFrom (Jony Ive and
Marc Newson's studio) for Ferrari's first electric car. That cabin rejects the big-touchscreen
look in favour of machined aluminium, glass and physical controls. Its displays animate with real
depth (the instrument cluster is two stacked OLED panels). Its mechanical dials are driven by
independent motors and clutches. Inserting the glass key starts a short ceremony in which Ferrari
yellow spreads through the interface. SIX borrows the feel, not the look or the branding:

| From the cabin | In SIX |
|---|---|
| Controls that move like machined parts: they stop exactly where they should | **Precise springs.** Everything settles with a damping ratio of 0.86, overshooting by 0.5 %. Nothing wobbles or bounces like rubber |
| Physical switches with a click at the end of their travel | **One detent.** Only something that *lands* (a card dropped into a stack) uses the detent spring: it lifts a hair, overshoots 5 % and clicks into place |
| Two display planes give real depth; needles move with the wheel | **Continuity.** Things move from where they are: a stacked card unfolds out of its own preview strip, a window grows out of its dock icon and folds back into it, a page slides in the direction you travelled |
| The start-up ceremony: colour spreads through the interface | **Light as feedback.** A band of light crosses a card when it lands or is added; unlocking sends a ring of accent light out from the password field; Pip's words arrive with a short focus pull, like a display waking |
| Glass and aluminium, little decoration | **Restraint.** One thing moves big at a time; no confetti, no shaking, no rubber-ball bounces anywhere in the system |

Sources: [Dezeen · Ferrari Luce interior by LoveFrom](https://www.dezeen.com/?p=2296493),
[Domus · Jony Ive designed Ferrari's first electric car](https://www.domusweb.it/en/news/gallery/2026/02/10/jony-ive-Ferrari-luce-electric-car-design-apple.html),
[Motor1 · Ferrari Luce design and interior](https://www.motor1.com/photos/926675/ferrari-luce/),
[Techleap · glass and aluminium controls](https://finder.techleap.nl/news/feed/ferrari-unveils-jony-ive-designed-ev-with-glass-and-aluminium-controls),
[Design Compass · Ferrari Luce](https://designcompass.org/en/2026/02/10/the-ferrari-luce-designed-by-jony-ive/).

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-instant` | 80 ms | Press feedback (clay pushes in) |
| `--dur-fast` | 140 ms | Hover, toggles, tooltips |
| `--dur-base` | 240 ms | Menus, popovers, Control Center |
| `--dur-slow` | 420 ms | Windows, stacks, Overview |
| `--dur-ambient` | 9 s+ | Pip idle, wallpaper drift |
| `--ease-standard` | `cubic-bezier(.2,0,0,1)` | Colour and opacity changes |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | Text and light arriving; scrims |
| `--ease-in` | `cubic-bezier(.55,0,.75,.2)` | Things leaving (and leaving is faster: about ×0.6) |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | Minimising into the dock; light sweeps |
| `--ease-spring` | `linear()` spring, damping ratio 0.86 | **Precise**: everything that moves position or size |
| `--ease-detent` | `linear()` spring, damping ratio 0.68 | **Detent**: a card landing in a stack, nothing else |

Native toolkits use the spring parameters in `tokens.json`: **precise** (177 / 23) by default,
**detent** (282 / 23) for landings, and the viscosity springs for home cards (gel, the default, is
260 / 27: damping ratio 0.84, so dragged cards settle without wobble).

## Choreography

| Moment | Motion |
|---|---|
| Open app | The window grows out of its dock icon: it starts at the icon's size and place, fades up over the first 30 %, and settles on the precise spring (600 ms). The icon lifts once, 12 px, no second bounce |
| Minimise | The window folds back into its dock icon (460 ms, ease-in-out) |
| Close | A short fade to 97 % (200 ms, ease-in). Leaving is quicker than arriving |
| Maximise / snap | The frame moves on the precise spring; content re-lays out once at the end |
| Stack: drop a card | The card lands on a detent (lifts 6 px, scales 1.035, settles), light crosses it, and the previews slide out from under it one after another (50 ms apart) |
| Stack: open | Every card **unfolds out of its own preview strip** into the column: it starts at the strip's place and width, clipped to the strip's height, and opens to full size, 42 ms after the card above it (620 ms). Cards without a strip rise from under the top card. Home dims and blurs behind |
| Stack: close | The reverse: each card folds back into its strip, bottom card first (420 ms) |
| Stack: bring a card to the top | The card rises out of its preview to the top; the previews slide into their new order; light crosses the new top card |
| Widget added | It slides up into its column on the card spring and light crosses it |
| Pages (Settings, Files) | The new page slides 18 px in from the side you travelled toward; back and up come from the left |
| Pip's caption and voice panel | Rise 10 px and scale from 97 %; Pip's reply arrives with a 6 px focus pull (blur to sharp), then fades away 9 s later |
| Chat messages | Rise 10 px as they arrive; your own also grow from 98 % |
| Review card, widget preview | Rise into place under the reply |
| Pip changes state | The old look crossfades into the new one over 420 ms, so the orb never jumps |
| Unlock | A ring of accent light spreads from the password field across the screen while the lock lifts away (scales to 104 %, blurs and fades); light then crosses each widget in turn |
| System update applied | The update screen fades and the same ring spreads from the centre |
| Dock hover | Icons near the pointer grow up to 1.5× (160 px falloff, 180 ms); off under Reduce motion |
| Menu / popover | Fades in and moves 4–6 px from its anchor (`dur-base`, ease-out) |
| Toggle | Thumb slides on the precise spring; tile fill crossfades |
| Clay press | Pushes in 1 px, scale 0.98 (`dur-instant`); springs back on release |
| Notification | Slides in 16 px, stays, slides out; never bounces |
| Home cards dragged | Follow the pointer on a spring set by viscosity; fuse with cards closer than 40 px; settle on the 24 px grid |

## Rules
- **Only transform and opacity move** (plus clip and blur for unfolding and focus pulls), so motion
  runs on the compositor at the display's full refresh rate. Never animate layout.
- **Continuity over decoration.** If something has a place on screen, it moves from there. Nothing
  appears from nowhere except notifications.
- **Leaving is faster than arriving**, and uses an ease-in, never a spring.
- **One detent per moment.** Overshoot is a signal that something landed; spent anywhere else it
  turns into noise.
- **Light, not bounce, says something happened**: a single band, once, at a subtle strength.
  Never on a loop.
- Nothing interactive waits for an animation. Input is accepted immediately, mid-animation.
- Interrupted animations retarget from their current position.
- No more than one thing moves big at a time.
- Loops (wallpaper, Pip idle) pause when the window above them is maximized, on battery saver,
  and when the screen is idle.
- No flashes faster than 3 per second, ever (WCAG 2.3.1).

## Reduced motion
When *Reduce motion* is on (system setting or `prefers-reduced-motion`):
- Movement and scaling become 120–160 ms **crossfades**; unfolding, folding, light sweeps, the
  unlock ring and focus pulls are skipped.
- Springs become `--ease-standard`.
- Wallpaper becomes a still image; Pip changes state without a crossfade and draws a static shape;
  home cards jump to place.
- Progress indicators still move (they carry information) but without decorative easing.
