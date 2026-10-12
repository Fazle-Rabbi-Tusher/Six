# 12 · Coming from Windows

SIX aims to replace Windows on everyday PCs. Research shows switchers judge an OS by how much of
their existing habit still works (see [01 · Research](01-research.md#1-familiarity-beats-novelty-for-people-switching-operating-systems)).
This page lists what stays the same, what changes, and how the change is introduced.

## Layout: dock by default, taskbar on request

SIX's default layout is macOS-style: a menu bar at the top and a centred dock at the bottom. For
people coming from Windows, Settings › Desktop offers the **Taskbar layout**: launcher
bottom-left, apps, tray and clock in one bottom bar, exactly where Windows puts them. It is
switched on automatically when someone imports their data from Windows, and the first-run screen
"How do you like your desktop?" shows both as live previews. Everything in the table below works
the same in both layouts.

## Stays exactly the same

| Habit | Windows | SIX |
|---|---|---|
| Open launcher | Win key / Start button | Six key / Six Menu icon (first in the dock, or bottom-left in the Taskbar layout) |
| Taskbar | Bottom, apps + tray + clock | Dock (apps) + menu bar (status, clock), or the Taskbar layout |
| Window controls | Top-right: ─ ▢ ✕ | Top-right: ─ ▢ ✕ |
| Snap | Win + arrows, drag to edges, Snap Layouts on maximize hover | Identical |
| Right-click | Context menu everywhere | Identical, same first group order |
| File copy/paste | Ctrl + C / X / V, Ctrl + Z | Identical |
| Select | Ctrl/Shift + click, Ctrl + A | Identical |
| Rename | F2 | F2 |
| Delete | Del → Recycle Bin; Shift + Del permanently | Del → Bin; Shift + Del permanently (with confirm) |
| Close / quit | Alt + F4 | Alt + F4 |
| Switch apps | Alt + Tab | Alt + Tab (glass switcher with live previews) |
| Show desktop | Win + D, bottom-right corner | Six + D, or Pip in the dock / menu bar (shows home) |
| Lock | Win + L | Six + L |
| File manager | Win + E | Six + E (Files) |
| Settings | Win + I | Six + I |
| Screenshot | Win + Shift + S, PrtScn | Six + Shift + S, PrtScn |
| Clipboard history | Win + V | Six + V |
| Emoji | Win + . | Six + . |
| Task Manager | Ctrl + Shift + Esc | Ctrl + Shift + Esc (System Monitor) |
| Run dialog | Win + R | Six + R opens Six Search in "run" mode |
| Virtual desktops | Win + Ctrl + ←/→ | Six + Ctrl + ←/→ |
| Drives | "This PC" with C:, D: | Files › "This PC" lists drives with friendly names and letters as labels |

## Improved, but discoverable

| New in SIX | How users find it |
|---|---|
| **Six Search** (apps, files, settings, actions, answers) | The search icon in the menu bar, the Six Menu, or `Ctrl + K`; in the Taskbar layout, the search field where Windows has it |
| **Quick Look** (Space previews a file) | Hint in the Files status bar for the first week |
| **Pip on the home screen** (chat + voice assistant) | Home is the first thing you see; the composer says "Ask Pip anything…" |
| **Undo for file operations** | Every delete/move toast has "Undo" |
| **Window groups / auto-arrange** | Offered after the user snaps windows three times |

## Running Windows apps
- `.exe` and `.msi` files open with the compatibility layer automatically; no "unknown file"
  dialog. The first launch shows a one-line toast: "Running a Windows app. Most features work;
  report problems from the ⋯ menu."
- Windows apps get SIX window chrome (title bar, snap, shadows) so the desktop stays consistent.
  Their own UI stays inside.
- The Store shows a "Works on SIX" badge (Moss) or "Runs with limits" (Sun) with the reason.

## Introducing change
- **Never more than one new concept per screen** in the first-run tour (max 4 steps, skippable).
- Tips appear at the moment they're useful ("Tip: press Space to preview"), at most once per day,
  and stop after they've been used once.
- The *Taskbar* layout is the default when Windows data is imported; the *Dock* layout is offered,
  not forced.
- A Settings page "Make SIX more like Windows" collects every compatibility toggle in one place
  (Taskbar layout, taskbar labels, window button order, Ctrl-click behaviour, legacy context menu).

## Words: Windows term → SIX term
Keep the Windows word where it is the common word.

| Windows | SIX | Note |
|---|---|---|
| Start | Six Menu | Six button looks like the Start button's position and role |
| Taskbar | Dock (or Taskbar layout) | Settings search also matches "taskbar" |
| Recycle Bin | Bin | Search matches "recycle bin", "trash" |
| File Explorer | Files | Search matches "explorer", "my computer", "this pc" |
| Control Panel | Settings | One settings app; search matches "control panel" |
| Task Manager | System Monitor | Same shortcut |
| Action Center | Control Center + Notifications | In the menu bar (top right) |

Every Settings search matches Windows terms, so typing the old word always finds the new place.
