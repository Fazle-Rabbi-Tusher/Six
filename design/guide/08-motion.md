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
| Two display planes give real depth; needles move with the wheel | **Continuity.** Things move from where they are: a stack opens in place with its cards sliding out from behind the top card, a window grows out of its dock icon and folds back into it, a menu unfolds from what opened it, a page slides in the direction you travelled |
| The start-up ceremony: colour spreads through the interface | **Light as feedback.** A band of light crosses a card when it lands or is added; unlocking sends a ring of accent light out from the password field; Six's words arrive with a short focus pull, like a display waking |
| Glass and aluminium, little decoration | **Restraint.** One thing moves big at a time; no confetti, no shaking, no rubber-ball bounces anywhere in the system |
| (SIX's own) Things that hold on to each other | **Tension.** Things that belong together stay joined by a neck that thins as they part, and letting go is the commit. A release settles with one **recoil** under 4 %; nothing jiggles on its own. See [Tension](#tension) |

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
| `--dur-ambient` | 9 s+ | Six idle, wallpaper drift |
| `--ease-standard` | `cubic-bezier(.2,0,0,1)` | Colour and opacity changes |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | Text and light arriving; scrims |
| `--ease-in` | `cubic-bezier(.55,0,.75,.2)` | Things leaving (and leaving is faster: about ×0.6) |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | Minimising into the dock; light sweeps |
| `--ease-spring` | `linear()` spring, damping ratio 0.86 | **Precise**: everything that moves position or size |
| `--ease-detent` | `linear()` spring, damping ratio 0.68 | **Detent**: a card landing in a stack, nothing else |
| `--ease-recoil` | `linear()` spring, damping ratio 0.72 (one recoil of 3.7 %) | **Recoil**: tension only; something let go (a control, a neck, a card) |
| `--ease-membrane` | `linear()` spring, damping ratio 0.64 | **Membrane**: what leans after a pull (cards behind a stack, the Bin bulging) |

Native toolkits use the spring parameters in `tokens.json`: **precise** (177 / 23) by default,
**detent** (282 / 23) for landings, **recoil** (300 / 25) and **membrane** (120 / 14) for tension, and the viscosity springs for home cards (gel, the default, is
260 / 27: damping ratio 0.84, so dragged cards settle without wobble).

## Choreography

| Moment | Motion |
|---|---|
| Start and restart | The boot screen: the mark's eyes pop open, its hex band draws around them, SIX OS types out and glitches once, a terminal loader fills, then the screen fades to the desktop and the ripple plays from the centre (about 6 s; any key skips; timeline in [18](18-brand.md#the-boot-screen)) |
| Open app | The window grows out of its dock icon: it starts at the icon's size and place, fades up over the first 30 %, and settles on the precise spring (600 ms). The icon lifts once, 12 px, no second bounce |
| Minimise | The window folds back into its dock icon (460 ms, ease-in-out) |
| Close | A short fade to 97 % (200 ms, ease-in). Leaving is quicker than arriving |
| Maximise / snap | The frame moves on the precise spring; content re-lays out once at the end |
| Stack: drop a card | The card lands on a detent (lifts 6 px, scales 1.035, settles), light crosses it, and the previews slide out from under it one after another (50 ms apart) |
| Stack: bring a card to the top | **One surface, one motion, no card changes shape.** The stack's surface changes height on the precise spring with its foot fixed, so the previews and the pointer never move; the old content fades out (200 ms, ease-in) while the new content fades in with a 4 px focus pull; the previews' labels change in place; light crosses the new top card. A second click mid-way picks up from where the surface is |
| Stack: open | In place: the top card stays where it is; the other cards slide down out from behind it, starting a hair smaller with only their edge showing, 34 ms apart (620 ms). Home dims a little and blurs |
| Stack: close | The reverse: the cards slide back behind the top card and fade as the previews come back (500 ms) |
| Stack: choose a card in the open stack | One motion: the chosen card travels to the top of the stack while the others tuck in behind it; nothing plays twice |
| Widget added | It slides up into its column on the card spring and light crosses it |
| Pages (Settings, Files) | The new page slides 18 px in from the side you travelled toward; back and up come from the left |
| Six in the menu bar | The orb grows into a black capsule to its left on the detent spring (560 ms) and types what Six is doing; the panel drips out of the orb: a black neck buds from it (460 ms) while the panel opens as a circle spreading from the orb (640 ms, detent), contents 170 ms later; closing draws it back up into the orb (360 ms, ease-in). See [09](09-shell.md#six-in-the-menu-bar) |
| Floating a widget | It lifts off home on a detent and catches the light; it follows the pointer exactly when dragged and settles on a detent when dropped |
| Right-click menu | Scales up from where you clicked (from below, for dock menus) on the precise spring (360 ms); rows fade in 12 ms apart; submenus open after 140 ms of hover |
| Six's caption | Rise 10 px and scale from 97 %; Six's reply arrives with a 6 px focus pull (blur to sharp), then fades away 9 s later |
| Chat messages | Rise 10 px as they arrive; your own also grow from 98 % |
| Review card, widget preview | Rise into place under the reply |
| Six changes state | The dotted orb crossfades from the old look into the new one over 420 ms; Bloom and Halo instead ease their colour, speed and light into the new state over about 0.5 s. The orb never jumps |
| Six's personality | Bloom, Halo and Ripple turn toward the pointer (0.35 s lag) and lean in when it comes close; they glance at a field you type into; while idle Six blinks (a 0.2 s squash) every 4.5–10 s; a poke squashes it; dragged or flung it stretches the way it moves. It hops on Complete (520 ms, landing with a squash), shakes its head on Failed (700 ms), nods when it asks (900 ms) and hops hello when it appears. After 40 s with no input it gets drowsy (dims, breathes slower, looks down) and wakes with a small hop. All off under Reduce motion |
| Moving Six | Six follows the pointer exactly, lifted 4 %; on release it lands on a detent; the greeting and examples slide to close (or open) the space in the middle (520 ms). *Move back to the middle* glides it home (620 ms); hiding it fades and shrinks it (220 ms, ease-in) |
| Unlock | A ring of accent light spreads from the password field across the screen while the lock lifts away (scales to 104 %, blurs and fades); light then crosses each widget in turn |
| System update applied | The update screen fades and the same ring spreads from the centre |
| Dock hover | Icons near the pointer grow up to 1.5× (160 px falloff). Each icon's size rides its own spring (damping ratio 0.87) toward the size the pointer asks for, so the dock flows as the pointer sweeps across and glides back when it leaves; off under Reduce motion. The label rises 5 px into place on the precise spring |
| Menu / popover | Unfolds out of what opened it, like a blind drawn from its rail: it grows from its anchor's corner (scale 0.96 → 1, 10 px) while a clip opens away from the anchor, on the precise spring (520 ms); its rows follow 18 ms apart. Closing is a quick fade (150–180 ms, ease-in). Six Search, the widget gallery, toasts and context menus open the same way |
| Toggle | Thumb slides on the precise spring and stretches to 24 px mid-travel, like a drop; tile fill crossfades |
| Segmented control | One drop of selection flows from the old option to the new: it reaches across both, then lets go of the old one (560 ms) |
| Slider | The thumb stretches with the speed it is dragged at and relaxes when it stops |
| Press (tension) | A button sinks to 97 % (140 ms). Held and pulled, it leans after the pointer, rigidly (its label never stretches); past 100 px it lets go and the press is cancelled. On release it settles on the recoil spring (620 ms). Not for menu rows, the dock or large surfaces |
| Stack pull (tension) | The top card follows reluctantly, joined to its slot by a thinning neck; the cards behind lean after it. Past 150 px it lets go and the cards behind recoil once; released before that it springs back into the stack. See [Tension](#tension) |
| Notification | Slides in 16 px, stays, slides out; never bounces |
| Home cards dragged | Follow the pointer on a spring set by viscosity; fuse with cards closer than 40 px; settle on the 24 px grid. **Flick** a card (release faster than 650 px/s while still moving) and it's thrown: it glides on about a fifth of a second's travel in that direction, carrying its speed into the spring, and settles on the grid where it lands, kept on screen. Floating widgets glide the same way (520 ms ease-out). No glide under Reduce motion |
| Menus: submenus | A submenu opens after 140 ms on its row and isn't rebuilt while the pointer moves over that row; crossing other rows on the way into it waits 280 ms before switching, and entering the submenu cancels the switch |

## Rules
- **Only transform and opacity move** (plus clip and blur for unfolding and focus pulls), so motion
  runs on the compositor at the display's full refresh rate. Never animate layout; the one
  exception is the dock's icon sizes, a single short row.
- **Shapes don't change to make an animation work.** A card keeps its size in a stack, in the open
  stack and on its way back; what moves is the card, its content or the light on it.
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
- Loops (wallpaper, Six idle) pause when the window above them is maximized, on battery saver,
  and when the screen is idle.
- No flashes faster than 3 per second, ever (WCAG 2.3.1).

## Reduced motion
When *Reduce motion* is on (system setting or `prefers-reduced-motion`):
- Movement and scaling become 120–160 ms **crossfades**; unfolding, folding, light sweeps, the
  unlock ring and focus pulls are skipped.
- Springs become `--ease-standard`.
- Wallpaper becomes a still image; Six changes state without a crossfade and draws a static shape;
  home cards jump to place.
- Progress indicators still move (they carry information) but without decorative easing.
- Tension keeps its rules (a pulled stack card still lets go only past 150 px) but necks are drawn
  still or not at all, a snap is instant, and nothing squashes or recoils; Six neither blinks,
  hops nor follows the pointer.

## Tension

Where two things belong together, SIX shows the link, and the moment it breaks, as a surface that
stretches. Six places use it.

| Where | What happens | Plain alternative |
|---|---|---|
| **Home · stacks** | The top card stays joined to its stack by a neck that thins as you pull; the cards behind lean after it on the membrane spring. Past 150 px it lets go and the cards behind recoil once: that release is the moment it leaves the stack. Let go sooner and it springs back, nothing changed | *Unstack*, *Show all*, Alt + arrows |
| **Six · the menu-bar orb** | When Six opens, snaps or closes a window, or adds or removes a widget, Six's menu-bar orb (or its open panel) drops a black tendril to its title bar and holds on while it moves, so you see what Six is touching. Then it thins in the middle, lets go, and the halves draw back into the orb and into the window. One tendril at a time | The reply names every action |
| **Control Center** | Wi-Fi and Bluetooth are both radios, so when both are on a bridge of the same graphite (silver in dark) grows between them and they read as one body. Airplane mode turns both off: the bridge thins, snaps and the tiles recoil apart; turning it off brings back what was on. Pull a slider's thumb off its track and the track bends after it like a membrane; past 100 px it lets go and springs flat. The value only ever follows along the track | The tiles and sliders themselves |
| **The Six app** | Your message buds off the send button and rises into place (revealed, never scaled). While Six works a drop leaves your message and swells into Six's answer, which hangs from the question by a hairline while it's the latest exchange. Ask again and the old hairline parts in the middle and each half draws back | — |
| **Files and the Bin** | A dragged file stays tethered to its row and follows reluctantly until 100 px; let go sooner and it springs back. Past that it's free, and near the dock's Bin the Bin bulges toward it; drop it in and it's swallowed with a gulp (with Undo). *Put back* buds the file out of the Bin and carries it to its folder | Delete, the Move to Bin button, the row's menu |
| **Menus** | A right-click menu opens 8 px from the pointer and buds out of that point, joined to it until it settles; a submenu buds from its row. Choosing an item draws the menu back into the point it came from | Shift + F10, the keyboard |

**Rules**

1. **Tension means a real relationship.** A neck only joins things that belong together (a card and
   its stack, Six and what it's changing, an answer and its question). Nothing stretches for decoration.
2. **Necks thin with distance, then snap.** Thickness × (1 − d / snap) ^ 0.8; at the snap distance
   it lets go. The snap is the commit: before it, letting go cancels.
3. **Content never stretches.** Text, icons and images stay rigid; only surfaces bend. Buttons lean,
   bubbles are revealed, menus scale uniformly.
4. **Springs, not wobble.** A release settles with one recoil under 4 %; nothing jiggles on its own.
5. **One tether per thing**, and budding goes at most two levels deep (menu, submenu).
6. **Every stretch has a plain alternative**, listed above. Under Reduce motion necks are drawn still
   (or not at all) and a snap is instant.

**Material.** Necks and tendrils are solid, made of what they join: the capsule's black, a tile's
accent, a menu's surface, a bubble's fill. They are drawn on one overlay above everything, so a
tendril can cross from the menu bar to any window.

**Tokens** (`tokens.css`): `--tension-snap` 150 px (cards), `--tension-snap-sm` 100 px (files,
buttons, chips, toggles, sliders), `--neck-max` 0.7 × the short side, `--neck-min` 8 px (below it a
hairline takes over), `--neck-falloff` 0.8, `--merge-gap` 40 px, `--ease-recoil`, `--ease-membrane`.
The studies these come from are live in [`concepts/tension.html`](../concepts/tension.html).

