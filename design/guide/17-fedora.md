# 17 · SIX on Fedora Linux

SIX is built on **Fedora Linux**. Fedora gives SIX a current kernel and drivers, a security model
that is on by default, a large set of maintained packages, and the tools to ship the whole system
as one image. SIX adds the shell (menu bar, dock, home, Six), the system apps, the design
language and the defaults. This chapter is the system design: which part of SIX is which piece of
Fedora, how updates work, how apps and Windows programs run, how Six works on the device, and the
branding rules for building on Fedora.

> This chapter describes the target architecture. The prototype in this repository is the
> interaction design only; it runs in a browser and doesn't contain any of these components.

## The stack

```
┌──────────────────────────────────────────────────────────────────────┐
│ Apps          SIX apps (Files, Settings, Six, Software, Calendar…)    │
│               Flatpak apps from Flathub · Windows programs in Bottles │
├──────────────────────────────────────────────────────────────────────┤
│ SIX Shell     menu bar · dock · home and widgets · Six · Six Search   │
│               Control Center · notifications · lock screen            │
├──────────────────────────────────────────────────────────────────────┤
│ Six services  wake word · speech to text · text to speech             │
│               on-device model · consented cloud model · tool bridge   │
├──────────────────────────────────────────────────────────────────────┤
│ Desktop       Wayland compositor · xdg-desktop-portal · PipeWire      │
│ services      NetworkManager · BlueZ · UPower · power-profiles-daemon │
│               accountsservice · fwupd · Flatpak · systemd --user      │
├──────────────────────────────────────────────────────────────────────┤
│ Fedora base   Linux kernel · systemd · SELinux · firewalld            │
│               LUKS2 disk encryption · image-based updates             │
└──────────────────────────────────────────────────────────────────────┘
```

## Every SIX feature, and the Fedora piece behind it

| SIX feature | Built on | Notes |
|---|---|---|
| Wi-Fi, VPN, hotspot (Settings › Wi-Fi) | NetworkManager over D-Bus | Settings never edits config files directly |
| Bluetooth | BlueZ | |
| Sound, mic for Six, screen sharing | PipeWire with WirePlumber | One audio and video graph for apps, Six and portals |
| Battery, power modes | UPower, power-profiles-daemon | *Saver / Balanced / Performance* map to its three profiles |
| Display scale, night light | The compositor's display configuration | Fractional scaling on Wayland |
| Users, sign-in, fingerprint | accountsservice, fprintd, systemd-logind | |
| Language, formats, time zone | systemd-localed, systemd-timedated, glibc locales | Bangla (bn_BD) and the Probhat layout ship in the image |
| Firmware updates | fwupd with the LVFS | Shown in Settings › Updates |
| App install, update, permissions | Flatpak (Flathub and Fedora's Flatpaks), xdg-desktop-portal | Each app is sandboxed; it asks for files, camera, mic or location through a portal |
| Windows programs | Bottles (Wine), Steam with Proton for games | Installed from Software; each Bottle is its own sandbox |
| System updates and rollback | An image-based Fedora base (Fedora Atomic, moving to bootc) | See *Updates* below |
| Disk encryption | LUKS2, unlocked by the TPM plus the password | systemd-cryptenroll |
| Firewall | firewalld | Shown as a status row, not a configuration screen |
| System protection | SELinux, enforcing | Shown as "System protection · Enforcing" |
| Install | Fedora's Anaconda installer, with SIX branding and a short first-run | First run: language, Wi-Fi, account, Six's listening mode, privacy |

## Updates: the whole system, all at once

SIX is **image-based**: the system (everything outside your home folder and installed apps) is a
single read-only image. An update is a whole new image, assembled in the background next to the
running one; restart switches to it. Nothing is half-updated if the power fails, and the previous
image stays on disk, so going back is one choice at startup or *Settings › Updates › Roll back*.
SIX goes back on its own if the new image doesn't start.

Fedora ships this model today as the Fedora Atomic desktops (rpm-ostree, with composefs) and is
moving it to **bootc**, where the system image is built and shipped as a container image. SIX
should follow that move: building the SIX image from a Containerfile on the Fedora base keeps the
build reproducible and reviewable, and lets the image be tested in CI before release.

| Step | What happens |
|---|---|
| Build | A Containerfile starts from the Fedora base image, adds SIX Shell, the SIX apps, Six services, fonts, branding and defaults |
| Test | CI boots the image in a VM and runs the shell's smoke tests and the [usability tasks](15-testing-and-build.md) that can be automated |
| Release | The image is signed and published; machines check for it overnight when plugged in |
| Apply | The new image is staged; *Restart to update* or the overnight window switches to it |
| Roll back | The previous image is kept; choosing it at boot or in Settings restarts into it, with files and settings untouched |

Apps (Flatpaks) and firmware (fwupd) update separately, shown in the same Settings page.

## The shell

SIX Shell is the Wayland compositor's user interface: menu bar, dock, home and widgets, Six's
orb, Six Search, Control Center, notifications, the lock screen and the window chrome. Two ways to
build it on Fedora:

| Option | For | Against |
|---|---|---|
| **Qt Quick (QML) shell on KWin** | A GPU scene graph with shader effects suits plasma clay, the orb and the liquid surfaces; QML is how custom shells are already built on KWin; the design tokens export to QML (see [`tokens.json`](../tokens/tokens.json)) | KDE's settings and apps need SIX equivalents or theming |
| **GJS shell on Mutter** (as GNOME Shell does) | Mutter is Fedora Workstation's compositor; libadwaita apps fit naturally | Deeper changes mean maintaining a fork of the shell |

**Recommendation:** a Qt Quick shell on KWin. The home screen's liquid surfaces and Six's orb are
GPU shaders in any case, and QML keeps the design tokens, motion specs and the shell in one
toolkit. SIX apps use Qt 6 with Kirigami where they need adaptive layouts; GTK apps are styled
from the same tokens so third-party apps don't look foreign.

Whichever compositor is chosen, the shell talks to the system only through D-Bus services and
portals, never by editing files, so the system image stays read-only and updates stay atomic.

## Six on the device

| Piece | Runs | Notes |
|---|---|---|
| Wake word ("Hey Six") | On device, always when turned on | A small keyword model on the PipeWire mic stream; audio is never stored or sent until the wake word is heard |
| Speech to text | On device | A Whisper-class model, with English and Bangla |
| Simple commands | On device | The same rules as the prototype's local intents: open, snap, settings, widgets, file review |
| Language model | On device where the hardware allows; the cloud model only with consent | Settings › Six & voice › *Cloud model: Ask each time / Allow / Never* |
| Text to speech | On device | A neural voice per language |
| Acting on the system | A **tool bridge** service on D-Bus | Six can only call listed tools (open and arrange windows, change listed settings, make widgets, search files). File changes always go through a review card; the bridge refuses anything not on the list |
| Widgets Six makes | A declarative spec, drawn by the shell | Never code; see [14 · Widgets Six makes](14-home-assistant.md#widgets-six-makes) |

Six runs as the person's own systemd user services, confined by SELinux, with access to the mic
only through PipeWire and to files only through the portal the person approves.

## Security defaults

On by default, explained in words in Settings › Privacy & security:

- **Disk encryption** (LUKS2), unlocked by the TPM and the password.
- **Secure Boot** with signed kernels.
- **SELinux enforcing**, **firewalld** on, no inbound services.
- **Sandboxed apps**: Flatpak plus portals for files, camera, mic, location and screen sharing.
- **A read-only system image**: an app or a mistake can't change the system; updates replace it
  whole.

## Building on Fedora: names and branding

Fedora's trademark guidelines decide how a derivative can use the Fedora name and logo:

- A distribution that combines Fedora with non-Fedora software (SIX Shell, Six, SIX branding)
  is a **Remix**, not a Fedora Spin. It must replace Fedora's branding packages
  (`fedora-logos`, `fedora-release`) with its own or with the `generic-*` packages, and must not
  use Fedora logos.
- SIX uses its own name and artwork throughout (boot splash, installer, login, About). It may say
  "built on Fedora Linux" in About and in documentation, with the notice: *Fedora is a trademark
  of Red Hat, Inc.; SIX is not affiliated with or endorsed by the Fedora Project.*
- The "Fedora Remix" mark has its own usage rules; SIX doesn't need it, since it has its own name.
- `fedora-logos` also supplies installer, bootloader and splash artwork, so replacing it means
  supplying those assets too. Plan the artwork with the package list, not after it. SIX ships
  `six-logos`: the Hex Face mark, the app icon, the lockups and the `six` Plymouth theme (the
  boot screen); see [18 · Brand](18-brand.md).

Check the current [Fedora trademark guidelines](https://docs.fedoraproject.org/en-US/legal/trademarks/)
before any public release; the wiki pages on remixes are older than the guidelines.

Sources: [Fedora trademark guidelines](https://docs.fedoraproject.org/ga/legal/trademarks/),
[Fedora Project Wiki · Remix](https://fedoraproject.org/wiki/Remix),
[Fedora Discussion · practical requirements for a Fedora Remix](https://discussion.fedoraproject.org/t/practical-requirements-for-a-personal-small-fedora-remix/197924),
[Fedora docs · Linux desktops and bootc](https://docs.fedoraproject.org/de/bootc/linux-desktops/),
[Fedora Magazine · Atomic desktops in Fedora 42](https://fedoramagazine.org/whats-new-for-fedora-atomic-desktops-in-fedora-42/),
[Flock 2026 · migrating Fedora Atomic to bootc](https://cfp.fedoraproject.org/flock-to-fedora-2026/talk/M87M8M/),
[Phoronix · Fedora 44 release](https://phoronix.com/news/Fedora-44-Next-Week).
