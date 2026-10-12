# 09 · The SIX shell

The shell is everything outside app content: shelf, Six Menu, Six Search, windows, Quick
Settings, notifications, Pip in the shelf, Overview, the lock screen and the first-run setup.
The home screen itself, where Pip lives, has its own chapter: [14 · Home](14-home-assistant.md).

## Shelf (taskbar)

A floating glass bar, 60 px tall, 8 px above the bottom edge, full width minus 8 px gutters,
`--radius-2xl`, iridescent rim.

```
╭──────────────────────────────────────────────────────────────────────────────╮
│ ◉  [⌕ Search apps, files, settings]  │ ▣ ▣• ▣• ▣ ▣ │      ⌃  ⇅ 🔊 ▮▮▯  ●  10:42 │▏
╰──────────────────────────────────────────────────────────────────────────────╯
  ↑ Six button     ↑ search field        ↑ pinned & running     ↑ tray   ↑ Pip ↑ clock  ↑ show desktop
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
| **Pip** | Mini globe for the assistant and background work. Click → home and Pip's composer (see below) |
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

## Pip in the shelf

Pip, the assistant, lives on the home screen (see [14 · Home](14-home-assistant.md)). In the tray
it shrinks to a 30 px mini globe: three rings around a glowing core. It stands in for generic
spinners whenever SIX or Pip works on something for more than 2 s without a known percentage.

| State | Mini globe | Meaning |
|---|---|---|
| Ready | Rings turn slowly | Nothing running |
| Listening | Rings lie flat and ripple; the mic glyph shows in the tray too | Mic is on |
| Thinking / working | Rings spin fast | Working out an answer, or a long task (install, backup, index) |
| Speaking | Core pulses | Reading a reply aloud |
| Complete | Core turns green once, then back to ready | Finished; a toast says what finished |
| Asking | Sun-coloured badge | Waiting for your yes |

Clicking the mini globe shows home (all windows minimize) with the cursor in Pip's composer.
Shape and motion change for every state, so it reads in grayscale; the tooltip names the state in
words; the listening state can never be hidden; under Reduce motion the rings stop and states
switch with a crossfade.

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
