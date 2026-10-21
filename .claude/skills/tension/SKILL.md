---
name: tension
description: The Tension design language from SIX OS — satin graphite-and-silver controls, surfaces that hold on to each other with stretching necks and snap when pulled too far, home cards drawn as shallow water, terminal (monospace) type, and an assistant orb with personality. Use this skill whenever the user asks for UI, a screen, a component, a prototype, a dashboard, a landing page or a design system "in the tension style", "like SIX", "satin", "elastic", "gooey/stretchy UI", "tensionmorphism", or wants interfaces where things stretch, bud, tether, fuse or snap; also when building or extending anything in the SIX OS project (prototype, guide, tokens, Six assistant looks). Use it even when the user only says "make it feel like our OS" or "use our design skill".
---

# Tension

A design language for interfaces that feel made of one soft, physical material. Things that
belong together **hold on to each other**: a card stays joined to its stack by a neck that thins as
you pull and snaps when you've pulled far enough; a menu buds out of the point you clicked; the
assistant reaches a tendril down to the window it is moving. The rest stays calm, precise and
quiet: graphite and silver satin, monospace type, one warm thing on screen (the assistant).

It comes from SIX OS (a Fedora-based desktop). The full source lives in that repo
(`design/guide/`, `design/prototype/index.html`, `design/tokens/`); this skill is the portable
version.

## The five ideas

1. **Tension: things that belong together hold on.** Only a real relationship gets a neck (a
   card and its stack, a menu and the point it came from, an answer and its question, the
   assistant and what it's changing). Necks thin with distance, then snap; the snap is the commit,
   and letting go before it cancels. Content never stretches, only surfaces bend.
2. **Satin, not glass.** Panels and every control are 94–95 % opaque satin with a bevel: 1 px rim,
   bright lip along the top, soft shade inside the bottom, a glint where the light catches it, a
   soft drop. Graphite in light, silver in dark; anything **on** takes the accent.
3. **Water on home.** The living surfaces of a home/dashboard are shallow water standing on the
   wallpaper: refraction at the edge, caustics, a meniscus line and a bright lip; neighbours closer
   than 40 px fuse with a smooth union. Never inside windows, menus or dialogs.
4. **Terminal type.** JetBrains Mono for everything you read, Share Tech Mono for display sizes and
   wordmarks, VT323 only for boot screens. Body tracking −0.02em, ligatures off. Replies and
   status lines **type in** behind a block cursor, paced by the clock.
5. **One warm thing.** The screen is neutral; colour comes from the assistant orb (and the user's
   accent). The assistant has personality: it looks toward the pointer, blinks, leans in, gets
   drowsy, hops on success.

## How to work

1. **Pick the material for every element by role** (if you can't say which, it's a design bug):
   satin = controls and things that float (menus, popovers, toasts, bars); paper = where work
   happens (window content, lists, forms; flat, opaque); water = home/dashboard cards only;
   clay = app icons and tiles.
2. **Start from the tokens.** Copy `assets/tokens.css` (light/dark, accents, satin, tension,
   motion, accessibility modes) and `assets/satin.css` (satin panel, button, round toggle, switch,
   slider pill, segmented control) into the project. Never invent a parallel palette.
3. **Add tension where there is a relationship**, using `assets/tension.js` (neck/tube geometry,
   budding, tethered drag with snap, recoil spring, terminal typing, one overlay SVG layer). Use
   the place table in `references/tension.md` to choose what stretches and what the plain
   alternative is.
4. **Motion uses four springs**: precise (default), detent (landings only), recoil (something let
   go), membrane (what leans after a pull). Values are in `references/motion.md`.
5. **Check the designed states**: light, dark, Reduce motion (necks drawn still, snaps instant,
   typing instant), Reduce transparency/More contrast (solid fills), keyboard (every stretch has a
   plain alternative), text at 200 %.
6. For a quick start, copy `assets/starter.html`: a working page with satin controls, a card
   tethered to its slot that snaps at 150 px, a right-click menu that buds from the pointer, and a
   reply that types in. Build from it rather than from a blank file.

## Numbers to remember

| Thing | Value |
|---|---|
| Snap distance | 150 px cards/stacks; 100 px files, buttons, chips, toggles, slider membranes |
| Neck thickness | `max × (1 − d/snap) ^ 0.8`; max 0.7 × the short side; below 8 px a hairline takes over |
| Pull resistance | a tethered thing moves ~0.8 × the pointer, less the further it goes |
| Recoil spring | damping ratio 0.72, one overshoot of 3.7 % (300/25 stiffness/damping) |
| Membrane spring | damping ratio 0.64 (120/14) |
| Precise spring | damping ratio 0.86 (177/23), everything that moves position or size |
| Detent spring | damping ratio 0.68 (282/23), something landing in a stack, nothing else |
| Menu bud | opens 8 px from the pointer, joined to it until it settles; submenus bud from their row |
| Water | blend 40 px, bevel 26 px, fill 78 % light / 72 % dark, meniscus 3.6 px inside the edge |
| Satin | panel fill 94–95 % opaque, 16 px backdrop blur, at most 3 live blurred surfaces |
| Radii | 6 / 8 / 12 / 16 / 22 / 28 px; window buttons are 28 px circles on the right |
| Durations | 80 / 140 / 240 / 420 ms; leaving is ~0.6 × arriving |
| Typing | ~55–70 characters/s, long text capped at ~2.4 s, cursor blinks out 1.6 s after the last word |

## Rules that make it Tension (and not just "wobbly")

- **Tension means a real relationship.** Nothing stretches for decoration.
- **Content never stretches.** Text, icons and images stay rigid; buttons lean, bubbles are
  revealed, menus scale uniformly. Only surfaces bend.
- **Springs, not wobble.** A release settles with one recoil under 4 %; nothing jiggles on its own.
- **One tether per thing**; budding goes at most two levels deep (menu → submenu).
- **Necks are made of what they join**: a menu's surface, a tile's accent, the assistant's black.
  Draw them on one overlay above everything so they can cross between layers, but under the
  thing being pulled. A neck must read against its background: over paper, lift the pulled row
  into satin (`.t-lifted`) and use the well colour (`neck well`).
- **Every stretch has a plain alternative** (a button, a menu item, a shortcut).
- **Text never sits on raw refraction or wallpaper**; satin and water fills keep 4.5:1.
- **Never**: ads or upsells in system UI, "Are you sure?" for something undoable (offer Undo),
  colour as the only signal, stealing focus from typing, moving core controls without opt-in.

## Writing (UI copy)

Plain, short, sentence case, no exclamation marks or emoji. Say what happened and what didn't
("Moved "notes.md" to Bin." + Undo). The assistant speaks in 1–3 short sentences, calm and a
little dry, and names every action it took.

## Reference files (read when the task needs them)

- `references/tension.md` — the six tension places, rules, the snap/neck maths, how to build
  tether, bud, tendril, fuse, membrane and hairline, with code pointers into `assets/tension.js`.
- `references/materials.md` — satin, paper, clay and water in detail (layers, CSS recipes, the
  water shader's parameters, elevation scale, fallbacks).
- `references/type-and-color.md` — terminal type scale, tracking, Bangla/fallbacks; graphite and
  silver palette, accents, brand cobalt, contrast pairs.
- `references/motion.md` — springs, durations, easing curves, choreography (open, minimise, snap,
  menus, stacks, voice), reduced motion.
- `references/assistant.md` — the assistant (Six): its six looks (Bloom, Halo, Ripple, Dotted,
  Ink, Mosaic), states, personality, the menu-bar capsule and dripping panel, typed replies,
  intro-on-demand, review cards.
- `references/brand.md` — the Hex Face mark, wordmark and the boot screen timeline, if the work
  involves SIX's own branding.

## Assets

- `assets/tokens.css` — the source-of-truth tokens (light, dark, accents, satin, tension, motion,
  accessibility modes). Import first.
- `assets/satin.css` — satin components built on the tokens (`.t-panel`, `.t-btn`, `.t-btn.on`,
  `.t-round`, `.t-switch`, `.t-slider`, `.t-seg`, `.t-menu`, `.t-cap` window buttons, `.t-paper`,
  `.t-lifted`, neck colours, the typing cursor). Caps eyebrows track +0.08em.
- `assets/tension.js` — dependency-free plain script exposing `window.Tension`: `tether`,
  `budNeck`, `membrane` (slider), `segFlow` (segmented control), `typeOut`, `springTo`,
  `springEase`, `EASE`, `tubeD`, `neckD`, `neckWidth`, `layer`, `path`, `calm`, `TENSION`.
  Works from `file://` and with `require()`.
- `assets/starter.html` — a runnable page using all three. Open it in a browser to see the feel.
