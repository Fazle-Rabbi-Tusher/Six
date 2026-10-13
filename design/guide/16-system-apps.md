# 16 · System apps

The apps that come with SIX and make it a whole system: **Pip**, **Settings**, **Files**,
**Software**, **Calendar**, plus the **lock screen**. They share one window anatomy (see
[06 · Layout](06-layout.md#window-anatomy)): a sidebar for places or sections, a toolbar or
header that says where you are, and content. Every one of them is in the prototype.

## Shared navigation rules

| Rule | Why |
|---|---|
| **The sidebar is the map.** Places (Files), sections (Settings), categories (Software) and conversations (Pip) are always visible on the left; the current one is highlighted in the accent soft colour | People coming from Windows look for a left navigation pane; nothing important hides behind a hamburger menu |
| **The header says where you are.** A path bar (Files) or a breadcrumb (Settings › Display) in plain words; every segment is clickable | Answers "where am I?" and gives a one-click way back up |
| **Back and forward work everywhere.** ‹ › in the toolbar, `Alt + ←/→` from the keyboard | One habit across all apps, as in a browser |
| **Search is local first.** Each app's search field finds things in that app; a "Search everywhere" link hands off to Six Search | Keeps results relevant without making people learn two searches |
| **Deep links.** Any part of SIX can open an app at a place: Control Center's ⚙ opens Settings, Pip opens *Settings › Display*, the Bin icon opens *Files › Bin* | No hunting for a page that was mentioned |
| **Empty states explain.** "Documents is empty. Files you save or download land here; deleted files wait in the Bin." | An empty view is a moment to teach, never a blank |

## Pip

The written side of the assistant (home is the spoken side, see [14 · Home](14-home-assistant.md)).

![The Pip app](../screens/pip-app.png)

| Part | Spec |
|---|---|
| Sidebar | **New chat**, then *Today* and *Earlier* conversations. A mic glyph marks conversations that include spoken requests |
| Header | The conversation's title (its first request) and where answers come from ("Simple commands run on this device. Everything else asks Claude on your account.") |
| Empty state | Pip's orb, "Ask Pip anything", one line on what Pip can do, and four example requests |
| Thread | Your messages on the right in accent clay; spoken ones marked *Said aloud*. Pip's replies on the left, labelled PIP, with action chips, review cards, previews and recovery chips |
| Composer | Text field, a dictation mic (speech typed into the field, then sent) and Send, which becomes Stop while Pip answers |

## Settings

![Settings, Display](../screens/settings.png)

**Sections** (sidebar, grouped, each with a coloured tile):

| Group | Sections |
|---|---|
| Connect | Wi-Fi · Bluetooth |
| Device | Display · Sound · Battery & power · Storage |
| You | Pip & voice · Appearance · Home & widgets · Desktop & dock · Notifications & Focus |
| System | Apps · Privacy & security · Accessibility · Users · Language & region · Keyboard & touchpad · Updates · About |

**Pages** are columns of rounded groups; each row has a title, an optional plain-language line
under it, and one control on the right (switch, segmented choice, menu, button or a value). Rows
that are information only show a value or a status chip (✓ *On*, *Connected*). A row never holds
two controls.

| Page | What's on it |
|---|---|
| Wi-Fi | Switch; networks with their security in words ("Open network · not secure"); ask to join; airplane mode |
| Bluetooth | Switch; my devices with battery; add a device |
| Display | Brightness; night light and its schedule; scale; resolution; refresh rate |
| Sound | Output; volume; input (the mic Pip uses); alert sound |
| Battery & power | Charge and time left; power mode (Saver, Balanced, Performance); battery protection at 80 %; screen off and sleep |
| Storage | Used of total with a breakdown; free up space (empty the Bin, clear caches) |
| Pip & voice | Listening (*Press to talk* or *Always · "Hey Pip"*); shortcuts; speak replies; language; privacy (voice on device, cloud model: ask each time, allow, never; voice history); what Pip may change (files always ask first) |
| Appearance | Theme (Light, Dark, Auto); accent (Iris, Tide, Moss, Sun); wallpaper mood; plasma clay viscosity, frost, refraction and rim |
| Home & widgets | Edit widgets; greeting; "Try saying" examples; what happens when home is full |
| Desktop & dock | Layout (*Menu bar + dock* or *Taskbar*, see [12](12-windows-migration.md)); magnification; hot corner |
| Notifications & Focus | Focus; per-app notifications; previews on the lock screen |
| Apps | Default apps; running Windows programs (Bottles); app permissions |
| Privacy & security | Disk encryption, firewall, Secure Boot, system protection (SELinux) as plain status rows; microphone and location access; screen lock |
| Accessibility | Reduce motion, reduce transparency, more contrast, touch mode; screen reader; captions for Pip; sticky keys |
| Users | Your account and sign-in (password, fingerprint); other users; online accounts |
| Language & region | Language (English, বাংলা); formats; time zone; keyboard layouts (Bangla Probhat) |
| Keyboard & touchpad | The shortcut list; tap to click; natural scrolling; gestures |
| Updates | The next system version, ready to install at restart or tonight; the running version; the previous version kept for rollback; automatic updates; app and firmware updates |
| About | SIX version, the Fedora Linux base, hardware, and the trademark notice |

**Search** looks through every row's title, description and choices, so "dark" finds
*Appearance › Theme* and "bangla" finds *Language & region*. Choosing a result opens the page,
scrolls to the row and briefly highlights it.

**Settings that also live elsewhere stay in sync**: Wi-Fi, Bluetooth, night light, focus, touch
mode, brightness, volume, the accessibility switches and the listening mode change in both
Control Center and Settings, whichever you use.

## Files

![Files, Pictures](../screens/files.png)

| Part | Spec |
|---|---|
| Sidebar | *Favourites* (Home, Desktop, Documents, Downloads, Pictures, Music, Videos), *Locations* (This PC, removable drives with ⏏, Bin with a count), *Tags* (Work, Family, Important) |
| Toolbar | ‹ › and ↑ (up one folder); the path bar, every segment a button; search in this folder; icons or list; new folder; move to Bin |
| Icon view | 108 px cells: clay folders with emblems, painted thumbnails for pictures, paper icons with a coloured type band for everything else; names wrap to two lines |
| List view | Name, modified, size; tabular figures |
| Status bar | Item count and free space, or what's selected and its size |
| Keyboard | Arrows move the selection (in icon view, up and down move by a row); Enter opens; Delete moves to the Bin; Backspace or `Alt + ↑` goes up; `Alt + ←/→` back and forward |

**The Bin remembers where things came from.** Each item shows "From Documents"; *Put back*
returns it there, at its old position. Deleting from the Bin asks first, because it can't be
undone ("Delete "X" permanently? This can't be undone." · **Delete**). Every move to the Bin has
**Undo** in the toast.

**Tags** collect files across folders; a tagged file shows its colour dot after the name (never
colour alone: the tag's name is in the sidebar and the dot's tooltip).

## Software

![Software](../screens/software.png)

Apps come from Flathub and Fedora as sandboxed Flatpaks (see [17 · SIX on Fedora](17-fedora.md)).

| Part | Spec |
|---|---|
| Sidebar | Search; Explore, Work, Create, Develop, Play, **Windows apps**, Installed, Updates (with a count) |
| Explore | A "Coming from Windows?" banner (Bottles for programs, Steam with Proton for games) and editors' picks |
| App card | Icon, name, one-line description in plain words, source and size ("Flathub · verified · 612 MB"), and one button: Install, a progress bar with a percentage, then Open |
| Windows apps | What runs and what doesn't, in plain words: most programs run in a sandboxed Bottle; programs that need kernel drivers (some anti-cheat, some VPNs) won't |
| Updates | App updates with *Update all*; a link to Settings › Updates for the system itself, which updates as one piece |
| Remove | Asks first and says what stays ("Its settings stay unless you remove them too") |

## Calendar

| Part | Spec |
|---|---|
| Month view | Weekday header; days with up to two event chips (colour bar plus title) and "+N"; today's date in an accent circle; the selected day outlined |
| Day panel | The selected day's events with time, title and place; *Add event*; and the hint that Pip can add events ("Lunch with Arif tomorrow at one") |
| Header | Month and year in Instrument Serif; ‹ Today › |

## Lock screen

![Lock screen](../screens/lock.png)

Six menu › *Lock Screen*, `Six + L` (`Ctrl + Alt + L` in the prototype), or after the time set in
Privacy & security.

- The time in Instrument Serif at 112 px, the date under it, the account picture, name and
  password field; Enter unlocks. Fingerprint works when it's set up.
- The desktop is hidden behind a heavy blur and an 86 % scrim: nothing on screen is readable.
- **Pip on the lock screen** answers "Hey Pip" only for the time, timers and the weather.
  Everything else waits until you unlock, and the lock screen says so.
- Notifications show the app only, unless Settings › Notifications says otherwise.
