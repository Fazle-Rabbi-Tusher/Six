# 09 · The SIX shell

The shell is everything outside app content: the menu bar, the dock, Six Menu, Six Search,
windows, Control Center, notifications, Pip's small orb, Overview, the lock screen and the
first-run setup.
The home screen itself, where Pip lives, has its own chapter: [14 · Home](14-home-assistant.md).

## Menu bar and dock (macOS-style layout)

SIX's default layout follows macOS: a thin **menu bar** across the top for status, and a
floating **dock** at the bottom for apps. The Windows-style **Taskbar layout** (launcher
bottom-left, one bar with apps, tray and clock) stays available in Settings › Desktop and is the
default when someone imports their data from Windows (see [12](12-windows-migration.md)).

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ⁘  Files                                      ⌕  wifi ▮▮▯ ◐   ⁘   Mon 12 Oct 10:42 │  menu bar, 32 px
│                                                                              │
│                                 windows / home                               │
│                                                                              │
│              ╭────────────────────────────────────────────────╮              │
│              │ ⁘  ▣  ▣  ▣  ▣  ▣  ▣  ▣  │  ◍  🗑 │              │  dock, 68 px
│              ╰──•──────•───────────────────────•───────────╯              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Menu bar** (glass, 32 px, full width; 40 px in touch mode)

| Item | Behaviour |
|---|---|
| **Six logo** (left) | Opens the system menu: About SIX, System Settings, Six Search, Sleep, Restart, Shut Down, Lock Screen, Log Out. Hit area reaches the top-left screen corner |
| **App name** | Bold name of the focused app ("Home" when none). App menus (File, Edit, View…) follow it |
| **Search** | Opens Six Search (`Ctrl + K`, `Six + Space`) |
| **Control Center** | Wi-Fi, a battery that shows its level and percentage, and a two-toggle glyph; opens Control Center (Quick Settings) under the bar |
| **Pip** | The small dotted orb; shows Pip's state and a progress ring while a task runs; click → home and Pip's composer |
| **Clock** | "Mon 12 Oct 10:42" in tabular figures; click → calendar and notifications |

**Dock** (glass, 68 px tall, centred, 8 px above the bottom edge, 24 px radius)

| Part | Behaviour |
|---|---|
| **Six Menu** | First icon (iris squircle with the six-dot mark); opens the Six Menu above the dock |
| **Apps** | Pinned and running apps. Running = a 4 px dot under the icon |
| **Separator** | Thin line before Pip and the Bin |
| **Pip** | Pip's dotted orb on a dark tile; click → home |
| **Bin** | Deleted files; shows a count |
| **Magnification** | Icons near the pointer grow up to 1.5× with a smooth falloff (160 px radius). Off under Reduce motion, on touch, and on narrow screens |
| **Launch bounce** | An opening app's icon bounces once; never repeatedly for attention (a badge does that) |
| **Labels** | A small glass label above the hovered icon |

Maximized windows fill the space between menu bar and dock; the dock can be set to auto-hide.
Fitts's law still applies: the menu bar items reach the top edge, and the dock's bottom edge
extends to the screen edge.

## Six Menu (Start)

Opens above the dock from the Six Menu icon (the Six key does the same), 600 × 720 px max, glass.

```
╭──────────────────────────────────────────────╮
│ [⌕ Type to search…]                          │
│ PINNED                              All apps ›│
│  ▢ Files   ▢ Browser  ▢ Mail   ▢ Settings     │  app icons, 52px, 4–6 per row
│  ▢ Music   ▢ Terminal ▢ Store  ▢ Photos       │
│ RECENT                                  More ›│
│  📄 Quarterly report.xlsx       Yesterday     │
│  🖼 Holiday-2026.jpg           Mon            │
│──────────────────────────────────────────────│
│ (avatar) Nadia Rahman                  ⏻      │
╰──────────────────────────────────────────────╯
```

- Typing anywhere in the menu moves focus into search; no click needed.
- *All apps* is an A–Z list with letter jump (press a letter).
- Recent shows files, not apps, and can be turned off (privacy).
- Power button (⏻) opens Sleep / Restart / Shut down / Sign out. Updates show as "Update and
  restart" here, never as a forced restart.

## Six Search (command palette)

`Six` then type, `Six + Space`, or `Ctrl + Alt + Space`. Centred glass sheet, 680 px wide,
iridescent rim, results appear as you type (< 50 ms target for local results).

| Result group | Example | Enter does |
|---|---|---|
| Top hit | Settings › Display | Opens it |
| Apps | Terminal | Launches |
| Files | budget-2026.ods | Opens; `Space` previews (Quick Look) |
| Settings | "night light" → toggle inline | Toggles without opening Settings |
| Actions | "restart", "empty bin", "new note" | Runs (destructive ones ask first) |
| Answers | `12*18`, `20 usd in bdt`, `time in tokyo` | Copies result |
| Ask Pip | Anything else | Shows home and sends it to Pip |

**Every result says what Enter will do before it runs.** Settings show their current state and the
change ("Off now · Enter turns it on"); actions name their effect ("Opens it on the left half of
the screen"). Nothing in Six Search acts by surprise.

Each result shows its keyboard shortcut on the right (teaches shortcuts without a manual).
`Tab` reveals secondary actions (Open folder, Copy path, Run as admin…).

## Windows

See [06 · Layout](06-layout.md#window-anatomy) for anatomy.

**Snap Layouts** (from Windows 11, kept identical so muscle memory works):
- Hover the maximize button for 400 ms → a glass flyout shows 6 layouts (halves, thirds,
  quarters, 2/3 + 1/3). Click a zone to snap.
- Drag a window to an edge → halves; to a corner → quarters; to the top → maximize. A glass
  "drop preview" shows the target before release.
- After snapping one window, the remaining zones offer the other open windows (Snap Assist).
- `Six + ←/→/↑/↓` snaps by keyboard.
- **Window groups:** a snapped set appears as one group in the dock's window preview and can be
  restored together.
- **Auto-arrange** (optional per desktop): dynamic tiling that places new windows automatically.

**Title bar rules**
- Apps may put tabs or a search field in the title bar but must leave ≥ 48 px of empty drag area.
- Close always asks to save unsaved work with three buttons: **Save**, **Don't save**, **Cancel**.

## Control Center (Quick Settings)

Opens from the menu bar, under the bar on the right. Glass, 380 px wide.

```
╭────────────────────────────────╮
│ [Wi-Fi  ✓ ] [Bluetooth   ] [Focus ]│  clay tiles: on = accent fill + filled glyph + "On"
│ [Night  ✓ ] [Airplane    ] [Access]│
│ ☀ ─────────●──────           │  brightness
│ 🔊 ───────●────────  ›        │  volume, › = output device
│ 🔋 64 % · 3 h 10 m left    ⚙   │
╰────────────────────────────────╯
```

- Tiles have two hit zones: the main area toggles, the `›` chevron opens details.
- Tiles can be added/removed/reordered (edit mode via the ✎ button).
- *Accessibility* tile is always pinnable and opens the accessibility quick panel (text size,
  contrast, reduce motion, reduce transparency, screen reader, magnifier).

## Notifications

- Appear top-right as glass toasts, 360 px wide, for 6 s (pause on hover; never auto-dismiss if
  they hold an action the user must take).
- Max 3 visible; more are summarized "+4 more".
- Grouped by app in the Notification Center (opened from the clock).
- **Focus** mode silences everything except alarms and allow-listed people/apps; the bell glyph
  shows a moon.
- Each notification has: app icon, title (`text-title-sm`), one-line body, up to 2 actions,
  and a ⋯ menu with "Turn off notifications from this app" (one step to stop spam).

## Pip's small orb

Pip, the assistant, lives on the home screen as the big realistic orb (see [14 · Home](14-home-assistant.md)).
Everywhere else (menu bar, dock, task cards, message labels) Pip is a **dotted sphere**: points on
a slowly turning globe whose light moves differently in each state. It stands in for generic
spinners whenever SIX or Pip works on something for more than 2 s without a known percentage.

The motion is ported from [Thinking Orbs](https://www.thinkingorbs.com/) by Yogesh
([MIT](https://github.com/yogesharc/thinking-orbs)), which gives three rules every orb follows:

- **One clock per look.** Every orb in the same state shares one clock, so the menu bar, the dock
  and a task card move in step instead of drifting apart. A frame gap counts at most 100 ms, so an
  orb coming back from a hidden tab carries on rather than jumping.
- **The back fades.** A dot's opacity ramps from 0 just behind the rim to 1 at the front, so the
  far side disappears instead of leaving a grey haze.
- **Nothing below 0.45 px.** About 4 dots per pixel of size (1 for *Background*), each shrinking
  as they multiply, so coverage holds from 16 px to 76 px.

| State | Look | Small orb | Meaning |
|---|---|---|---|
| Ready | Base | Turns once every 6.5 s; the back fades away | Nothing running |
| Working | Working | A ring of light runs down the sphere every 1.7 s, pulling in what it passes | A long task (install, backup, export) |
| | · Gyro | Spins on an axis that circles like a top, the ends twisting against the middle | Alternative for system tasks |
| Thinking | Reasoning | Dims to half; a spark hops dot to dot every 220 ms, trailing its last five hops | Working out an answer |
| | · Twins | Two sparks that keep apart | Comparing or planning |
| Searching | Searching | A lens hops between spots on the face and magnifies them | Looking through files or the web |
| Asking | Searching · Lighthouse | A leaning beam circles every 2.5 s with a fading trail | Waiting for your review |
| Waiting | Waiting | A comet circles and spirals pole to pole | A service made Pip wait (rate limit, queue) |
| Retrying | Retrying | Turns, brakes, springs back 60 %, goes again | Trying a failed step once more |
| | · Surge | Each turn launches fast and eases out | Alternative |
| Compacting | Compacting | A line sweeps left to right, packing the dots, then they spring loose | Tidying history, freeing space |
| | · Squeeze, · Fuse | Twist-and-release; a burning fuse with no bounce | Alternatives |
| Background tasks | Background | Fewer, larger dots (· Spiral: eight arms wound pole to pole) | Work running in the background (task cards) |
| Listening | SIX | Ripples spread from the centre | Mic is on |
| Speaking | SIX | Front dots swell with the voice | Reading a reply aloud |
| Complete | SIX | Turns green and glows once | Finished; a toast says what finished |
| Failed | SIX | Turns red (Ember) and slows | Something didn't work; the reason is written beside it |
| Cancelled, Resting | SIX | Dims and almost stops | Stopped by you; focus mode or battery saver |

A view sets the look with `data-state` and, where a state has alternatives, `data-variant`
(`gyro`, `twins`, `lighthouse`, `spiral`, `surge`, `squeeze`, `fuse`).

**Progress.** While a task runs, the menu bar and dock orbs draw a thin ring around the sphere
that fills clockwise with the task's progress (like a dock progress bar on macOS); the tooltip and
accessible name say it in words ("Pip · Slides from my notes, 64 %"). The ring disappears when
the task finishes or is stopped.

**Never colour alone.** Complete and Failed change colour, but every state also moves
differently, the tooltip names it, and the label under the home orb says what Pip is actually
doing ("Pip · searching Documents"). Under Reduce motion the orb is drawn still on a fixed frame
and only redraws when its state changes.

**Listening is impossible to miss.** While the mic is on, an amber mic pill sits in the menu bar
next to Control Center, separate from Pip's orb, so it shows even when Pip is busy with something
else.

## Overview and desktops

`Six + Tab` or three-finger swipe up. All windows of the current desktop spread out without
overlap; virtual desktops appear as a strip at the top with names. Drag windows between desktops.
Type to filter windows by title.

## Lock and sign-in

- Plasma wallpaper (or the user's photo) with a 72 % dark scrim at the bottom third.
- Clock in `text-hero` (display face, tabular figures), date below in `text-title`.
- Notifications on the lock screen show the app only, not content, by default.
- Sign-in: avatar, name, password field focused immediately (no "press a key" curtain unless
  touch mode). Show-password eye button; caps-lock warning in words.

## First run (out-of-box experience)

1. Language & keyboard (detected; Bangla and English shown first in Bangladesh).
2. Network.
3. **"How do you like your desktop?"** Dock (macOS-style menu bar + dock, default) or Taskbar
   (Windows-style, default after importing from Windows), shown as two live previews.
4. Import from Windows: browser bookmarks, Wi-Fi networks, documents and wallpaper from a backup
   or a network share.
5. Accessibility shortcut: available on every step (`Ctrl + Alt + A` or the ♿ button).
6. Account: local account always allowed, cloud account optional.
