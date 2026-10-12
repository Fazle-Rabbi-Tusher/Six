# 12 · Coming from Windows

SIX aims to replace Windows on everyday PCs. Research shows switchers judge an OS by how much of
their existing habit still works (see [01 · Research](01-research.md#1-familiarity-beats-novelty-for-people-switching-operating-systems)).
This page lists what stays the same, what changes, and how the change is introduced.

## Stays exactly the same

| Habit | Windows | SIX |
|---|---|---|
| Open launcher | Win key / Start button bottom-left | Six key / Six button bottom-left |
| Taskbar | Bottom, apps + tray + clock | Shelf, same zones |
| Window controls | Top-right: ─ ▢ ✕ | Top-right: ─ ▢ ✕ |
| Snap | Win + arrows, drag to edges, Snap Layouts on maximize hover | Identical |
| Right-click | Context menu everywhere | Identical, same first group order |
| File copy/paste | Ctrl + C / X / V, Ctrl + Z | Identical |
| Select | Ctrl/Shift + click, Ctrl + A | Identical |
| Rename | F2 | F2 |
| Delete | Del → Recycle Bin; Shift + Del permanently | Del → Bin; Shift + Del permanently (with confirm) |
| Close / quit | Alt + F4 | Alt + F4 |
| Switch apps | Alt + Tab | Alt + Tab (glass switcher with live previews) |
| Show desktop | Win + D, bottom-right corner | Six + D, bottom-right corner |
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
| **Six Search** (apps, files, settings, actions, answers) | The search field in the shelf, already where Windows has it |
| **Quick Look** (Space previews a file) | Hint in the Files status bar for the first week |
| **The Orb** (assistant + background tasks) | First-run tour step; tooltip on first hover |
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
- The *Familiar* layout is default when Windows data is imported; *Focus* layout is offered,
  not forced.
- A Settings page "Make SIX more like Windows" collects every compatibility toggle in one place
  (window button order, shelf labels, Ctrl-click behaviour, legacy context menu).

## Words: Windows term → SIX term
Keep the Windows word where it is the common word.

| Windows | SIX | Note |
|---|---|---|
| Start | Six Menu | Six button looks like the Start button's position and role |
| Taskbar | Shelf | Settings search also matches "taskbar" |
| Recycle Bin | Bin | Search matches "recycle bin", "trash" |
| File Explorer | Files | Search matches "explorer", "my computer", "this pc" |
| Control Panel | Settings | One settings app; search matches "control panel" |
| Task Manager | System Monitor | Same shortcut |
| Action Center | Quick Settings + Notifications | Same position (tray, clock) |

Every Settings search matches Windows terms, so typing the old word always finds the new place.
