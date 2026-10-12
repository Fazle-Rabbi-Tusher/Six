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
| **Control Center** | Wi-Fi, battery and a toggles glyph; opens Control Center (Quick Settings) under the bar |
| **Pip** | The small dotted orb; shows Pip's state; click → home and Pip's composer |
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

Pip, the assistant, lives on the home screen as the big globe (see [14 · Home](14-home-assistant.md)).
Everywhere else (menu bar, dock, task cards, message labels) Pip is a **dotted sphere**: points on
a slowly turning globe whose light moves differently in each state, after the
[thinking orbs](https://www.thinkingorbs.com/) style. It stands in for generic spinners whenever
SIX or Pip works on something for more than 2 s without a known percentage.

| State | Small orb | Meaning |
|---|---|---|
| Ready | Turning sphere lit from the top left | Nothing running |
| Working · Gyro | Spins fast on a wobbling axis | A long task (install, backup, index) |
| Reasoning | Dim sphere, one bright dot wanders | Working out an answer |
| Searching | A bright patch sweeps the surface | Looking through files or the web |
| Waiting for you · Lighthouse | A bright meridian beam turns | Needs a yes |
| Listening | Rings of light ripple out from the centre | Mic is on |
| Speaking | Front dots swell with the voice | Reading a reply aloud |
| Background tasks | Fewer, larger dots twinkle | Work running in the background (task cards) |
| Complete | Dots turn green once | Finished; a toast says what finished |

Motion carries the state, so it reads at 18 px and in grayscale; the tooltip names the state in
words; the listening state can never be hidden; under Reduce motion the orb is drawn still and
only redraws when its state changes.

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
