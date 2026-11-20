# Screens

Pictures of SIX as it is on 21 November 2026, at 1280 × 800, after the polish round (every screen
says less and sits on its lines; [13](../guide/13-writing.md#how-much-to-say),
[06](../guide/06-layout.md#alignment)).

**How they were made.** The pictures in the design folders are drawn by SIX's real interface (the
same built page that runs on an installed system), in a browser, with a **stand-in for the computer
underneath**: the battery, Wi-Fi networks, files, apps, accounts and the playing song in them are
test values, and some say so ("stand-in", "Preview fixture"). Home has its default picture
wallpaper (the files are in [`../wallpapers/`](../wallpapers/README.md)); `home-matte.png` shows
home with Matte, SIX's own drawn ground. **The weather pictures use invented town names**
(Quillbrook, Velmora Bay, Tarnwick Heights) and test readings, not real places or live weather. The
browser ran without a graphics card, so Soft Matter's home cards show their plain fallback surface,
not the water drawn by the shader, and the drawn wallpapers are still. The clock in the pictures
shows the time they were drawn. **The sign-in, lock and installer pictures in
[`system/`](system/README.md) are drawn by SIX's real code for those screens at the desk** with test
accounts and test disks; they are not photographs of an installed computer. The one picture in
[`installed/`](installed/README.md) is real, from an installed system. Nothing here is a mock-up.

| Folder | What |
|---|---|
| [`sculpted-light/`](#sculpted-light-the-default) | Every main screen in Sculpted, Ivory finish, Blue accent: SIX's default look |
| [`sculpted-dark/`](#the-main-screens-in-every-look) | The main screens in Sculpted, Graphite finish |
| [`softmatter-light/`](#the-main-screens-in-every-look), [`softmatter-dark/`](#the-main-screens-in-every-look) | The main screens in Soft Matter, Graphite accent |
| [`high-contrast/`](#high-contrast) | High contrast, both designs, light and dark |
| [`system/`](system/README.md) | The sign-in screen, the lock screen in four looks, the installer's pages light and dark |
| [`installed/`](installed/README.md) | Real: the disk unlock prompt |
| [`history/`](history/README.md) | The October 2026 pictures of the prototype, a design SIX no longer has in several places |

## Sculpted light (the default)

### The desktop

| | |
|---|---|
| ![](sculpted-light/home.png) **home.png** Home as a new person sees it: the default wallpaper, the menu bar with the notch in its middle, the cards, the dock | ![](sculpted-light/six-menu.png) **six-menu.png** The SIX Menu from the dock: one search field, pinned apps, the granted folder, the person and power |
| ![](sculpted-light/system-menu.png) **system-menu.png** The system menu from the SIX logo, with its keys | ![](sculpted-light/six-search.png) **six-search.png** SIX Search: one field; every result says what Enter will do |
| ![](sculpted-light/home-matte.png) **home-matte.png** Home with Matte chosen: in Sculpted, SIX embossed in the tonal ground | ![](sculpted-light/settings-wallpaper.png) **settings-wallpaper.png** Settings › Wallpaper (the list of wallpapers below needs the real computer; the stand-in says so) |
| ![](sculpted-light/weather-day.png) **weather-day.png** The weather widget in its three sizes: Large with the Day strip, Medium, Small | ![](sculpted-light/weather-week.png) **weather-week.png** The same, Large with the Week strip |
| ![](sculpted-light/control-center.png) **control-center.png** Control Center as a board of tiles, each name one line | ![](sculpted-light/control-center-edit.png) **control-center-edit.png** Control Center in edit mode: "Drag a tile to move it." |
| ![](sculpted-light/control-center-screens.png) **control-center-screens.png** The Screens tile, while a second screen is connected | ![](sculpted-light/clock-panel.png) **clock-panel.png** The calendar and notifications from the clock |
| ![](sculpted-light/context-menu.png) **context-menu.png** The right-click menu on home | ![](sculpted-light/power.png) **power.png** Shutting down: one main button, an ordinary one |
| ![](sculpted-light/widget-gallery.png) **widget-gallery.png** The widget gallery: each tile its name | ![](sculpted-light/not-responding.png) **not-responding.png** SIX's sheet when an app stops answering: Wait, Force quit, Details |
| ![](sculpted-light/first-run.png) **first-run.png** "Finish setting up SIX", the optional setup card on home | ![](sculpted-light/welcome-back.png) **welcome-back.png** Welcome back over a dark ground, and the card for people coming from Windows (the notice at the top is the stand-in's) |
| ![](sculpted-light/media-key.png) **media-key.png** The small card a media key shows | |

### The drop under the menu bar

Each picture is the top right of the screen, 760 × 120, with the drop over a plain grey ground,
a constructed player and a constructed weather reading (the song and its cover are test values).

| | |
|---|---|
| ![](sculpted-light/drop-playing-name.png) **drop-playing-name.png** Playing now, first moment: the name, sliding when it is long | ![](sculpted-light/drop-playing.png) **drop-playing.png** Playing now, kept open by a press: the cover, previous, pause, next and the time left |
| ![](sculpted-light/drop-weather.png) **drop-weather.png** The weather: "24° Partly cloudy", SIX's weather picture, the town | ![](sculpted-light/drop-clock.png) **drop-clock.png** The clock: the whole date, a bell and how many notifications wait |
| ![](sculpted-light/drop-battery.png) **drop-battery.png** The battery: "64 %" and the time left | ![](sculpted-light/drop-wifi.png) **drop-wifi.png** Wi-Fi: the network's name |
| ![](sculpted-light/drop-search.png) **drop-search.png** Search: its name and its key from anywhere | |

### Keys, the Run box and screens

| | |
|---|---|
| ![](sculpted-light/shortcut-sheet.png) **shortcut-sheet.png** The shortcut sheet (`Super + /`): one line a shortcut, the description one press away | ![](sculpted-light/settings-shortcuts.png) **settings-shortcuts.png** Settings › Keyboard & touchpad › Shortcuts |
| ![](sculpted-light/settings-shortcut-open.png) **settings-shortcut-open.png** A shortcut's full description, opened | ![](sculpted-light/run-box.png) **run-box.png** The Run box (`Super + R`): the top row says what Enter will start |
| ![](sculpted-light/run-box-command.png) **run-box-command.png** The Run box with a program and its words | ![](sculpted-light/run-box-refused.png) **run-box-refused.png** The Run box refusing, with the reason |
| ![](sculpted-light/screen-chooser.png) **screen-chooser.png** The second-screen chooser (`Super + P`) | ![](sculpted-light/screen-connected.png) **screen-connected.png** The chooser by itself when a new screen is plugged in |
| ![](sculpted-light/settings-display-two-screens.png) **settings-display-two-screens.png** Settings › Display with two screens: the drawing, the four choices, where the second screen is | ![](sculpted-light/wireless-display.png) **wireless-display.png** The wireless display sheet (`Super + K`) |
| ![](sculpted-light/settings-display-wireless.png) **settings-display-wireless.png** Settings › Display › Wireless display | ![](sculpted-light/settings-minimise.png) **settings-minimise.png** Settings › Desktop & dock: "Minimise windows with: Scale / Lamp" |

### SIX, the assistant

| | |
|---|---|
| ![](sculpted-light/notch-open.png) **notch-open.png** The notch opened into its card: SIX's answer, its `SIX` tag, Talk and Type instead | ![](sculpted-light/notch-listening.png) **notch-listening.png** The notch while SIX listens |
| ![](sculpted-light/six-app.png) **six-app.png** The SIX app: one-line note, short suggestions | ![](sculpted-light/six-app-plan.png) **six-app-plan.png** A request with several steps: one plan |
| ![](sculpted-light/is-that-right.png) **is-that-right.png** "Is that right?" with the doubtful words marked | ![](sculpted-light/voice-check.png) **voice-check.png** "Check how SIX hears you", with its result |
| ![](sculpted-light/six-app-install.png) **six-app-install.png** "install VLC": SIX opens its page and asks "Install it?" | |

### Apps

| | |
|---|---|
| ![](sculpted-light/files.png) **files.png** Files: one toolbar, More actions, the side list | ![](sculpted-light/files-this-computer.png) **files-this-computer.png** Files: This computer |
| ![](sculpted-light/files-recent.png) **files-recent.png** Home's recent files: one row each, "Missing" for a file that is gone | ![](sculpted-light/files-cloud.png) **files-cloud.png** Files: a cloud account, the one-line path |
| ![](sculpted-light/files-cloud-kept.png) **files-cloud-kept.png** The kept folders sheet | ![](sculpted-light/software.png) **software.png** Software: SIX's picks, each app with its logo or letter tile |
| ![](sculpted-light/software-app.png) **software-app.png** An app's page: name, one line, Install; the facts under About this app | ![](sculpted-light/software-search.png) **software-search.png** Search in Software; letter tiles for apps without an icon |
| ![](sculpted-light/software-window.png) **software-window.png** Software over home | ![](sculpted-light/software-installing.png) **software-installing.png** An install with its real percentage |
| ![](sculpted-light/software-updates.png) **software-updates.png** Updates, and "Keep my apps up to date" | ![](sculpted-light/software-uninstall.png) **software-uninstall.png** Uninstall…, with the choice to delete the app's data |
| ![](sculpted-light/software-play.png) **software-play.png** Software: Play, "Set up Steam" and other places games come from | ![](sculpted-light/your-games.png) **your-games.png** Settings › Games: your games |
| ![](sculpted-light/installer-file-windows.png) **installer-file-windows.png** A downloaded Windows program | ![](sculpted-light/installer-file-appimage.png) **installer-file-appimage.png** An AppImage: Run once or Add to my apps |
| ![](sculpted-light/installer-file-deb.png) **installer-file-deb.png** A `.deb` | ![](sculpted-light/installer-file-flatpakref.png) **installer-file-flatpakref.png** A `.flatpakref` from Flathub |
| ![](sculpted-light/calendar.png) **calendar.png** Calendar: the month and the chosen day | ![](sculpted-light/calendar-delete.png) **calendar-delete.png** Editing an event, with Keep event and the danger button Delete event |

### Settings

| | |
|---|---|
| ![](sculpted-light/settings.png) **settings.png** Settings over home, at Wi-Fi | ![](sculpted-light/settings-appearance.png) **settings-appearance.png** Appearance: the two designs, theme, accent, drawn wallpapers |
| ![](sculpted-light/settings-six-voice.png) **settings-six-voice.png** SIX & voice | ![](sculpted-light/settings-six-account.png) **settings-six-account.png** SIX account (a stand-in account) |
| ![](sculpted-light/settings-control-center.png) **settings-control-center.png** Control Center as a list, with Advanced | |
| ![](sculpted-light/settings-wifi.png) **settings-wifi.png** Wi-Fi | ![](sculpted-light/settings-bluetooth.png) **settings-bluetooth.png** Bluetooth |
| ![](sculpted-light/settings-display.png) **settings-display.png** Display (the stand-in reports a second screen) | ![](sculpted-light/settings-sound.png) **settings-sound.png** Sound |
| ![](sculpted-light/settings-battery.png) **settings-battery.png** Battery & power | ![](sculpted-light/settings-storage.png) **settings-storage.png** Storage |
| ![](sculpted-light/settings-accessibility.png) **settings-accessibility.png** Accessibility | ![](sculpted-light/settings-notifications.png) **settings-notifications.png** Notifications & Focus |
| ![](sculpted-light/settings-desktop-dock.png) **settings-desktop-dock.png** Desktop & dock | ![](sculpted-light/settings-keyboard.png) **settings-keyboard.png** Keyboard & touchpad |
| ![](sculpted-light/settings-home-widgets.png) **settings-home-widgets.png** Home & widgets | |
| ![](sculpted-light/settings-cloud-storage.png) **settings-cloud-storage.png** Cloud storage | ![](sculpted-light/settings-users.png) **settings-users.png** Users (stand-in accounts) |
| ![](sculpted-light/settings-games.png) **settings-games.png** Games | ![](sculpted-light/settings-speed.png) **settings-speed.png** Speed |
| ![](sculpted-light/settings-drivers-apps.png) **settings-drivers-apps.png** Drivers & apps | ![](sculpted-light/settings-privacy.png) **settings-privacy.png** Privacy & security |
| ![](sculpted-light/settings-recovery.png) **settings-recovery.png** Recovery | ![](sculpted-light/settings-updates.png) **settings-updates.png** Updates |
| ![](sculpted-light/settings-about.png) **settings-about.png** About | |

## The main screens in every look

Same names in each folder: `home`, `home-matte`, `weather`, `six-menu`, `system-menu`, `six-search`,
`control-center`, `notch-open`, `six-app`, `files`, `settings`, `settings-appearance`, `software`,
`calendar`, `drop-playing`, `drop-weather`. In the Soft Matter pictures of Settings › Appearance
the "In use" mark stays on Sculpted: the picture tool switched the look directly, not through that
setting.

| Sculpted dark | Soft Matter light | Soft Matter dark |
|---|---|---|
| ![](sculpted-dark/home.png) | ![](softmatter-light/home.png) | ![](softmatter-dark/home.png) |
| ![](sculpted-dark/weather.png) | ![](softmatter-light/weather.png) | ![](softmatter-dark/weather.png) |
| ![](sculpted-dark/control-center.png) | ![](softmatter-light/control-center.png) | ![](softmatter-dark/control-center.png) |
| ![](sculpted-dark/drop-playing.png) | ![](softmatter-light/drop-playing.png) | ![](softmatter-dark/drop-playing.png) |
| ![](sculpted-dark/six-menu.png) | ![](softmatter-light/six-menu.png) | ![](softmatter-dark/six-menu.png) |
| ![](sculpted-dark/files.png) | ![](softmatter-light/files.png) | ![](softmatter-dark/files.png) |
| ![](sculpted-dark/settings-appearance.png) | ![](softmatter-light/settings-appearance.png) | ![](softmatter-dark/settings-appearance.png) |

## High contrast

| Sculpted light | Sculpted dark | Soft Matter light | Soft Matter dark |
|---|---|---|---|
| ![](high-contrast/sculpted-light-home.png) | ![](high-contrast/sculpted-dark-home.png) | ![](high-contrast/softmatter-light-home.png) | ![](high-contrast/softmatter-dark-home.png) |
| ![](high-contrast/sculpted-light-control-center.png) | ![](high-contrast/sculpted-dark-control-center.png) | ![](high-contrast/softmatter-light-control-center.png) | ![](high-contrast/softmatter-dark-control-center.png) |
| ![](high-contrast/sculpted-light-six-search.png) | ![](high-contrast/sculpted-dark-six-search.png) | ![](high-contrast/softmatter-light-six-search.png) | ![](high-contrast/softmatter-dark-six-search.png) |
| ![](high-contrast/sculpted-light-drop-weather.png) | ![](high-contrast/sculpted-dark-drop-weather.png) | ![](high-contrast/softmatter-light-drop-weather.png) | ![](high-contrast/softmatter-dark-drop-weather.png) |
| ![](high-contrast/sculpted-light-settings-appearance.png) | ![](high-contrast/sculpted-dark-settings-appearance.png) | ![](high-contrast/softmatter-light-settings-appearance.png) | ![](high-contrast/softmatter-dark-settings-appearance.png) |

## Not pictured

Terminal (the picture tool has no shell behind it; see [16](../guide/16-system-apps.md#terminal)),
the boot screen as running (see [18](../guide/18-brand.md#boot)), windows moving into the dock (a
movement; see [09](../guide/09-shell.md#windows-snapping-and-workspaces)), and the installed desktop.
The pictures of Software's ArtCraft section are not in this repository yet.
