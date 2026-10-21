# Materials

Pick every element's material by role. If you can't say which it is, that's a design bug.

## The four materials
Every pixel belongs to one of four materials:

| Material | Role | Examples |
|---|---|---|
| **Clay** | things you press | buttons, toggles, quick-setting tiles, app icons |
| **Satin** | things that float above content for a moment, and every control | menu bar, dock, menus, popovers, notifications, Six Search; buttons, switches, sliders |
| **Paper** (flat) | things you read and work in | window content, documents, lists, settings pages |
| **Plasma clay** | the living surfaces of home | home cards, Six's conversation and composer, desktop widgets |

If you can't say which material an element is, it's a design bug.

## 2. Satin: things that float, and every control

Less glass. Menus, Control Center, the Six Menu, Search, toasts, the menu bar and the dock, and
every control (buttons, switches, sliders, segmented controls, Control Center's round buttons) are
**satin**: the same stuff as the home cards and the tension studies. It is mostly opaque (94–95 %),
so you see colour and light rather than what's behind it, with a bevel: a 1 px rim, a bright lip
along the top, a soft shade inside the bottom edge, a glint where the key light catches it, and a
soft drop shadow. Graphite in light, silver in dark; anything that is **on** takes the accent.

| Part | Panels (`.glass`) | Controls |
|---|---|---|
| Fill | `--sat-a` → `--sat-b`, top to bottom, 94–95 % opaque, 16 px blur behind | `--ctl-a` → `--ctl-b`, opaque, with a radial glint at the top left (`--ctl-glint`) |
| Edge | `--sat-rim` 1 px, `--sat-lip` along the top, `--sat-shade` inside the bottom | `--ctl-rim`, `--ctl-lip`, `--ctl-shade`, and a drop shadow (`--ctl-drop`) |
| On | — | `--on-a` → `--on-b`, made from the accent (graphite in light, silver in dark), with its own glint |
| Wells | — | Switch tracks, slider tracks and segmented-control tracks are sunken: `--trk-a` → `--trk-b` with an inner shadow |

**Sliders** are pills: a sunken track, a fill of the accent's light that ends in a round, glinting
end (the thumb is the end of the fill), and in Control Center the icon and the value sit inside the
pill. **Control Center's** toggles are round satin buttons with their name and state under them;
Wi-Fi and Bluetooth fuse into one body when both are on.

**Rules**
- Text on satin passes 4.5:1 in both themes: the fill is close to opaque. With **Reduce
  transparency** or **More contrast** panels are solid `--c-surface` and wells get a 1.5 px
  `--c-line-strong` outline.
- Satin never stacks more than twice (menu → submenu).
- Budget: the panels' 16 px blur is the only blur; at most 3 live blurred surfaces on screen.

## 3. Paper: where work happens

Windows, documents, settings pages, lists. Opaque, flat, quiet.

- Background `--c-surface`, sidebars `--c-surface-2`.
- Separated with whitespace first, hairlines (`--c-line`) second, shadows never inside a window.
- Text lives here. Long reading uses `text-body-lg` and the 68ch measure.

## 5. Plasma clay: the home's living surfaces

Water, not glass. The home's cards are drawn as clear, shallow water standing on the wallpaper:
you see the floor through them, bent at the edge and wavering a little in the middle, light
caught in caustics underneath, a thin meniscus line inside the edge and a bright lip on the side
facing the light. Used **only** on the home screen and desktop widgets: home cards, Six's
conversation thread and composer. Never inside windows, menus or dialogs.

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
Six carry the colour. **Obsidian**, **Signal**, **Contour**, **Strata** and **Velvet** are the drawn
alternatives. The default rim is **Soft**, a neutral highlight; the
iridescent rim is an option. Users pick the wallpaper (from
thumbnails), viscosity, frost, refraction and rim in Settings › Appearance; the wallpaper is also
in the home's right-click menu and Six can switch it ("switch to the strata wallpaper").

**Rules**
- Text sits on the fill, never on raw refraction: the fill floor above keeps body text above
  4.5:1 over the brightest wallpaper vein.
- Budget: at most 12 plasma clay surfaces, one shader pass, capped at 1.5× pixel density. Under
  Reduce motion the wallpaper freezes and frames are drawn only when something changes.
- Fallback: no GPU (or WebGL) → each surface becomes CSS glass with clay shadows, same layout.
- Reduce transparency / More contrast → solid fill, no refraction, rim at half strength.

## 1. Clay: app icons and tiles

> Controls you press (buttons, switches, sliders, Control Center's buttons) are now **satin**
> (§2). Clay stays for app icons, folder icons and the widget gallery's tiles.

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

## Elevation scale

| z | Surface | Material | Shadow |
|---|---|---|---|
| 0 | Wallpaper | Plasma wallpaper | none |
| 1 | Home cards, Six's conversation, desktop widgets | Plasma clay | drawn by the shader |
| 2 | Inactive windows | Paper | `--shadow-2` |
| 3 | Active window | Paper | `--shadow-3` |
| 4 | Menu bar, dock | Glass | `--shadow-3` |
| 5 | Menus, popovers, Six Menu, Quick Settings | Glass | `--shadow-3` |
| 6 | Notifications / toasts | Glass (strong) | `--shadow-3` |
| 7 | Dialogs (modal) | Paper over `--scrim` | `--shadow-4` |
| 8 | Six Search, Overview, lock screen | Glass + iridescent rim / full-screen | `--shadow-4` |

The active window must be distinguishable from inactive ones **without colour**: larger shadow
plus full-strength title text (inactive titles use `--c-text-3`).

## Buttons

| Variant | Material | Look | Use |
|---|---|---|---|
| **Primary** | Satin, on | The accent's satin (`--on-a` → `--on-b`), `--c-text-on-accent` | The one main action |
| **Secondary** | Satin | `--ctl-a` → `--ctl-b` with rim, lip and glint, `--c-text` | Other actions |
| **Quiet** | none | Transparent, `--c-text`; hover `--c-surface-3` | Toolbars, low emphasis |
| **Danger** | Clay | `--c-danger` fill, white text | Irreversible destructive actions only |
| **Icon** | Quiet | 28/36 px square, tooltip required | Toolbars, title bars |

- Heights 28 / 36 / 44 px; horizontal padding 12 / 16 / 20 px; `text-label`; pill radius.
- Labels are verbs: "Save", "Install", "Delete 3 files". Never "OK" when a verb fits.
- Loading: label stays, a small Six "thinking" glyph replaces the leading icon; width doesn't change.
- Dialog button order: secondary left, **primary right**; Enter = primary, Esc = cancel. The
  destructive button is never the default Enter action.
- Tension: pressed, a button sinks to 97 %; held and pulled it leans after the pointer, rigidly,
  and past 100 px it lets go and the press is cancelled; released, it settles on the recoil spring.
  Its label never stretches. See 08 · Motion › Tension.

## Menus and context menus
- Glass, `--radius-md`, 4 px inner padding, rows 32 px (pointer) / 44 px (touch).
- Row: 16 px icon · label · right-aligned shortcut in `--c-text-3` · submenu chevron.
- Groups separated by a 1 px `--c-line` divider with 4 px space above and below.
- Max **2 levels** deep. Max ~12 items per group before it becomes a dialog or search.
- **Right-click everywhere** has a menu; the first group is always the most common actions
  (Open, Cut, Copy, Paste, Rename, Delete), in Windows order. What each place offers is listed in
  09 · Right-click menus. Destructive rows turn red on hover;
  options that are on carry a tick; a menu from the dock opens upward.
- A menu opens 8 px from the pointer and buds out of that point; a submenu buds from its row;
  choosing an item draws the menu back into the point.

## Dialogs
- Paper on `--scrim`, `--radius-lg`, 440 px wide (small) / 560 px (default), 24 px padding.
- Title (`text-title-lg`), body (`text-body`, ≤ 3 sentences), buttons bottom-right.
- Only for decisions that block. Everything else is a toast with **Undo**.

## Toasts
- Glass strong, bottom-centre above the dock, 6 s, one action max ("Undo", "Open").
- Message in past tense: "Moved 3 files to Bin", not "Files will be moved".
