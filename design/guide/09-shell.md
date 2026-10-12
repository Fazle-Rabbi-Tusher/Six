# 09 · The SIX shell

The shell is everything outside app content: shelf, Six Menu, Six Search, windows, Quick
Settings, notifications, the Orb, Overview, the lock screen and the first-run setup.

## Shelf (taskbar)

A floating glass bar, 60 px tall, 8 px above the bottom edge, full width minus 8 px gutters,
`--radius-2xl`, iridescent rim.

```
╭──────────────────────────────────────────────────────────────────────────────╮
│ ◉  [⌕ Search apps, files, settings]  │ ▣ ▣• ▣• ▣ ▣ │      ⌃  ⇅ 🔊 ▮▮▯  ●  10:42 │▏
╰──────────────────────────────────────────────────────────────────────────────╯
  ↑ Six button     ↑ search field        ↑ pinned & running     ↑ tray   ↑ Orb ↑ clock  ↑ show desktop
```

| Zone | Behaviour |
|---|---|
| **Six button** | Opens the Six Menu. Hit area includes the bottom-left screen corner. The Six key does the same |
| **Search field** | Click or start typing after pressing Six → opens Six Search. Can be collapsed to an icon |
| **Apps** | Pinned and running apps in one row. Running = a 3 px pill under the icon; active window = a 16 px wide accent pill; attention = Sun-coloured pill + one gentle bounce (no repeated flashing) |
| **Labels** | Setting: *Never* / *When space allows* / *Always* (Windows "combine taskbar buttons"). Default *When space allows* for Windows switchers |
| **Window previews** | Hover an icon → live thumbnails of its windows above the shelf, with close buttons |
| **Progress** | Downloads/copies show a thin progress arc around the app icon |
| **Tray** | Overflow (⌃), network, volume, battery; one click opens Quick Settings |
| **Orb** | The assistant and background-task presence (see below) |
| **Clock** | Time + date (tabular figures). Click → calendar and notifications |
| **Show desktop** | Last 8 px at the right edge, extends to the bottom-right corner |

Alignment option: **Familiar** (apps left-aligned after search, default for Windows switchers) or
**Centred** (apps centred, Six button stays left). Position: bottom (default), left, right, top.

## Six Menu (Start)

Opens above the Six button, 640 × 720 px max, glass.

```
╭──────────────────────────────────────────────╮
│ [⌕ Type to search…]                          │
│ PINNED                              All apps ›│
│  ▢ Files   ▢ Browser  ▢ Mail   ▢ Settings     │  clay app tiles, 56px, 4–6 per row
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
| Ask Orb | Anything else | Sends to the assistant |

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
- **Window groups:** a snapped set appears as one group in the shelf hover preview and can be
  restored together.
- **Auto-arrange** (optional per desktop): dynamic tiling that places new windows automatically.

**Title bar rules**
- Apps may put tabs or a search field in the title bar but must leave ≥ 48 px of empty drag area.
- Close always asks to save unsaved work with three buttons: **Save**, **Don't save**, **Cancel**.

## Quick Settings

Opens from the tray. Glass, 360 px wide.

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

## The Six Orb

One small animated orb in the tray (24 px) represents the **assistant and long-running system
work**. It replaces generic spinners for anything that takes > 2 s without a known percentage.
Inspired by "thinking orbs": a spinner says "wait", the Orb says *what* is happening.

| State | Shape / motion | Colour | Meaning |
|---|---|---|---|
| Idle | Round, slow breathing (9 s) | Iris → Tide gradient, low saturation | Ready |
| Listening | Ripples outward with voice level | Tide | Mic is on (also shows the mic glyph in tray) |
| Thinking | Dots orbit inside the orb | Iris | Working out an answer |
| Working | Arc fills clockwise | Iris | Long task running (install, backup, index) |
| Done | Brief pulse, then idle | Moss | Finished; a toast says what finished |
| Needs you | Gentle single bounce + badge | Sun | Waiting for a decision |
| Error | Small shake, then static | Ember + "!" glyph | Failed; click for the reason and a fix |

Rules: shape *and* colour change for every state (works in grayscale); hover tooltip names the
state in words; the mic state is impossible to hide; the Orb never animates under Reduce motion
(it switches shape with a crossfade). Clicking the Orb opens a glass panel with the conversation
and a list of running tasks.

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
3. **"How do you like your desktop?"** Familiar (Windows-like, default) or Focus (centred shelf,
   labels hidden), shown as two live clay preview cards.
4. Import from Windows: browser bookmarks, Wi-Fi networks, documents and wallpaper from a backup
   or a network share.
5. Accessibility shortcut: available on every step (`Ctrl + Alt + A` or the ♿ button).
6. Account: local account always allowed, cloud account optional.
