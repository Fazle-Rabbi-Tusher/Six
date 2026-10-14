# 05 · Materials and elevation

Soft Matter has three core materials and one hybrid, plasma clay, reserved for the home screen.
Pick by **role**, never by taste.

```
           ┌──────────────── Plasma glass ────────────────┐   floats above, temporary
           │  menu bar · dock · menus · Six Search        │
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
| clay-3 | `--clay-3` | Six Menu tiles, onboarding hero objects, the voice button |
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
- The **iridescent rim** (a 1 px gradient border in the plasma colours) is reserved for Six
  Search and plasma clay. Everything else uses the plain rim.
- **Reduce transparency** replaces glass with `--c-surface`. Layout and shadows stay the same.
- Performance: blur is the most expensive effect in the shell. Budget **at most 3 live blurred
  surfaces** on screen; the dock and menu bar cache their blur when no window moves behind them. Without GPU
  compositing, glass falls back to the solid fill (same approach as plasma-ui's CSS fallback).

## 3. Paper: where work happens

Windows, documents, settings pages, lists. Opaque, flat, quiet.

- Background `--c-surface`, sidebars `--c-surface-2`.
- Separated with whitespace first, hairlines (`--c-line`) second, shadows never inside a window.
- Text lives here. Long reading uses `text-body-lg` and the 68ch measure.

## 4. Wallpaper: matte by default

The default wallpaper is matte (black / white-gray). The plasma moods below are optional.

A slow field of blurred colour blobs (the plasma moods) that drift over ~60 s loops. It is GPU
cheap (one fragment shader at reduced resolution, paused when fully covered by maximized windows
or on battery saver) and freezes to a still frame under *Reduce motion*.

Desktop widgets may use the **liquid** behaviour from plasma-ui (fuse when dragged together, snap
to the 24 px grid). Functional UI never stretches or wobbles.

## 5. Plasma clay: the home's living surfaces

Water, not glass. The home's cards are drawn as clear, shallow water standing on the wallpaper:
you see the floor through them, bent at the edge and wavering a little in the middle, light
caught in caustics underneath, a thin meniscus line inside the edge and a bright lip on the side
facing the light. Used **only** on the home screen and desktop widgets: home cards, Pip's
conversation thread and composer. Never inside windows, menus or dialogs.

![Plasma clay on the home screen](../screens/home-dark.png)

**How it is built.** One full-screen GPU pass (a fragment shader) draws the wallpaper and every
plasma clay surface together:

| Layer | What happens | Default |
|---|---|---|
| Shape | Each surface is a rounded rectangle as a signed distance field; surfaces in the same group are joined with a **smooth union**, so two cards closer than the blend distance melt into one body | blend 40 px |
| Depth | The water's height is a rounded bevel 26 px wide, flat on top. Its slope, taken over a few pixels, gives the surface normal, so a thin neck between two cards has a smooth ridge, never a crease | bevel 26 px |
| Ripples | The surface is never quite still: slow noise tilts the normal a little, and rings run out from the pointer while it is over the water | on (off under Reduce motion) |
| Refraction | The wallpaper is seen through the water along the normal: strongly bent at the edge, wavering in the middle | 1.0 |
| Dispersion | Red, green and blue are sampled at slightly different offsets | on |
| Caustics | Light focused by the moving surface dances on the floor, strongest where the water is deep | on, scales with refraction |
| Frost | The refracted wallpaper is taken from a smoother (fewer-octave) version of itself | 0.55 |
| Fill | The surface colour is laid over the refracted image | 78 % light / 72 % dark, 100 % with Reduce transparency or More contrast |
| Light | Lit from the top left; a glint where the key light catches the curve of the edge | on |
| Meniscus and lip | A dark line 3.6 px inside the edge, then a bright 1 px lip, brightest on the side facing the light. Lip colour: Soft (silver), Iridescent (hue follows the edge angle), Accent, Off | Soft |
| Shadow | A soft offset shadow under the body and a faint glow from the rim | on |

**Groups.** Surfaces only fuse within their group: *cards* fuse with cards, *conversation*
(thread + composer) with itself. Chrome (menu bar, dock, menus) is never plasma clay.

**Viscosity** sets how a dragged card follows the hand (spring stiffness / damping) and how far
surfaces reach for each other (blend distance):

| Viscosity | Stiffness / damping | Blend | Feel |
|---|---|---|---|
| Water | 320 / 13 | 54 px | Quick, wobbles |
| Gel (default) | 210 / 21 | 40 px | Settles calmly |
| Honey | 70 / 17 | 32 px | Slow, heavy |
| Solid | none (moves 1:1) | off | No fusing, no spring |

Dropped cards settle on the 24 px grid.

**Tension.** The top card of a stack holds on when you pull it. It follows the pointer
reluctantly (it moves about 0.8 × as far, less the further it goes) while the water left in its
slot shrinks and a neck joins the two, thinning as they part. Past **150 px** the neck breaks:
the card lets go of the stack with one small recoil and follows the pointer normally; the cards behind lean after it and recoil when it leaves. Let go before
that and it springs back into the stack with nothing changed. A click is never a pull.

**Moods** set the wallpaper behind the surfaces. **Matte** is the default: matte black in dark
mode and white fading to soft gray in light mode, with a faint grain and no colour, so content and
Pip carry the colour. **Tidal** (teal veins), **Aurora** (violet and cyan) and **Ember** (warm
reds) are optional, livelier moods. The default rim is **Soft**, a neutral highlight; the
iridescent rim is an option. Users pick mood, viscosity,
frost, refraction and rim in Quick Settings › Plasma clay.

**Rules**
- Text sits on the fill, never on raw refraction: the fill floor above keeps body text above
  4.5:1 over the brightest wallpaper vein.
- Budget: at most 12 plasma clay surfaces, one shader pass, capped at 1.5× pixel density. Under
  Reduce motion the wallpaper freezes and frames are drawn only when something changes.
- Fallback: no GPU (or WebGL) → each surface becomes CSS glass with clay shadows, same layout.
- Reduce transparency / More contrast → solid fill, no refraction, rim at half strength.

## Elevation scale

| z | Surface | Material | Shadow |
|---|---|---|---|
| 0 | Wallpaper | Plasma wallpaper | none |
| 1 | Home cards, Pip's conversation, desktop widgets | Plasma clay | drawn by the shader |
| 2 | Inactive windows | Paper | `--shadow-2` |
| 3 | Active window | Paper | `--shadow-3` |
| 4 | Menu bar, dock | Glass | `--shadow-3` |
| 5 | Menus, popovers, Six Menu, Quick Settings | Glass | `--shadow-3` |
| 6 | Notifications / toasts | Glass (strong) | `--shadow-3` |
| 7 | Dialogs (modal) | Paper over `--scrim` | `--shadow-4` |
| 8 | Six Search, Overview, lock screen | Glass + iridescent rim / full-screen | `--shadow-4` |

The active window must be distinguishable from inactive ones **without colour**: larger shadow
plus full-strength title text (inactive titles use `--c-text-3`).
