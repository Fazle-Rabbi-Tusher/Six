# Tension: the physics

## The six places (as built in SIX OS)

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
The studies these come from are live in the SIX repo at `design/concepts/tension.html`; the full
implementation is in `design/prototype/index.html` (search for `TENSION`, `budNeck`, `pipReach`,
`memDraw`, `qsFuse`).

## Building each kind of stretch (with `assets/tension.js`)

| Kind | When | How |
|---|---|---|
| **Tether** | Something pulled out of where it belongs (a card from a stack, a file from its row) | `tether(el, { snap, onSnap, onDrop, onCancel })`. It follows at ~0.8 × the pointer (less the further it goes), a neck joins it to its slot thinning by `neckWidth(max, d, snap)`, it snaps at `snap` (150 cards, 100 small things), and released early it springs home on the recoil spring. The neck is drawn under the pulled element |
| **Bud** | Something appearing out of a point (a menu from the pointer, a panel dripping from an icon, a file out of a bin) | `budNeck(A, ra, () => B, rb, ms)`: a neck from the origin to the new thing, thinning to nothing over ~260–460 ms. Pair it with the thing scaling or clipping open from that point (`transform-origin` or `clip-path: circle(… at origin)`) |
| **Draw back** | The reverse: a menu closing into the point it came from, a panel returning into its icon | `budNeck(A, ra, () => B, rb, ms, { back: true })` with the thing shrinking toward A (ease-in, ~0.6 × the opening time) |
| **Tendril** | The assistant acting on something far away (opening, snapping, closing a window) | A thick tube from the assistant's orb down to the target's title bar: grows tip-first (320 ms), holds while the target moves (760 ms), thins in the middle and parts (300 ms), each half draws back (260 ms). One at a time; queue the rest |
| **Fuse** | Two related things side by side that are both on (Wi-Fi and Bluetooth radios) | A bridge of the same "on" material grows between them; turning one off thins and snaps it with a recoil on both tiles |
| **Membrane** | A pull on something constrained (a slider thumb dragged off its track) | `membrane(range)`: the track bends after it as a gaussian bump (`y = bend · e^(−((x−xt)/w)²)`, w ≈ 20 % of the track); past 100 px it lets go and springs flat. The value only follows along the track |
| **Flow** | A selection moving between options (segmented controls, tabs) | `segFlow(seg)`: one drop of selection stretches across to the new option (to the far edge at 40 % of the way) and settles there in 560 ms, instead of jumping |
| **Hairline** | A relationship too thin for a neck (an answer and its question in a chat) | A 1 px line while it's the latest exchange; when a newer one arrives, it parts in the middle and each half draws back |
| **Lean** | A pressed control being pulled | Held and pulled, a button leans rigidly toward the pointer (translate, never skew), up to ~6 px; past 100 px it lets go with a recoil and the press is cancelled |

Draw necks on one fixed SVG overlay (`layer()`), and fill them with the material they join
(`.neck` → `--c-surface`, `.neck.accent` → the accent, `.neck.ink` → near-black for the
assistant). **A neck must read against what's behind it.** Over paper (a list, a settings page) a
neck the colour of paper disappears: when a row is pulled, lift it into satin (`.t-lifted`) and
give its neck the well colour (`cls: 'neck well'`), so the row reads as picked up and the neck
as the stretch between it and its slot. `tether()` draws the neck under the pulled element, so
its content is never covered. Under Reduce motion none of these animate: the change just happens.
