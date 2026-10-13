# 15 · Usability tests and build order

How to check that SIX works for the people it is meant for, and the order to build it in so
every step can be tested on its own. The prototype ([`prototype/index.html`](../prototype/index.html))
covers every task below, so testing can start before any native code exists.

## Who to test with

| Group | Why | How many per round |
|---|---|---|
| Long-time Windows users, no macOS | The main switchers; they bring Windows habits | 5 |
| Mixed Windows and phone users | Expect notification stacks, swipe, voice | 3 |
| People using assistive technology (screen reader, keyboard only, magnification) | Every task has to work without a mouse or sight | 2 |
| Bangla-first users | Script fallback, translated copy, local date and number formats | 2 |

Five people per group find most of the problems in a round; run a new round after each fix
instead of a bigger first round.

## Tasks

Each task starts from the home screen with no window open. Give the goal, never the control name.

| # | Task (what you say) | Pass when | Watch for |
|---|---|---|---|
| 1 | "Open your files and the terminal next to each other." | Both windows snapped side by side, by any route (Pip, drag to edge, Snap Layouts, Six Search) | Which route they pick first; hunting for a Start button |
| 2 | "Turn on night light." | Night light on | Whether they find Control Center in the menu bar |
| 3 | "Tell Pip to delete *Interview notes*, then change your mind." (by voice) | Review card read, Cancel pressed, file still in Documents | Whether they read the target and effect lines; whether *Move to Bin* is mistaken for permanent deletion |
| 4 | "Ask Pip to open Photoshop." | They take a recovery chip, or say what they would do next | Dead ends; blaming themselves |
| 5 | "The slides Pip is making: stop them." Then: "Where did the half-made outline go?" | Stopped from the task card; they can say what was kept | Whether the stop message answers the second question without help |
| 6 | "Put the *Today* and *This device* cards together, then see both." | Stacked, then both seen, by flipping through with the previews or with **Show all** | Whether the previews under the stack are noticed; drag versus click; whether anyone moves the mouse to chase a preview (they shouldn't need to) |
| 7 | "Find the budget file." | File opened from Pip's result chip or Six Search | Search in Pip versus Six Search |
| 8 | "What is Pip doing right now?" (during a long task) | They read the status label or the task card | Whether the orb's look alone is enough (it should not need to be) |
| 9 | Keyboard only: tasks 1, 2 and 3 | Same pass criteria | Focus order, visible focus, the review card reachable with `Tab` |
| 10 | Screen reader: tasks 3 and 5 | Hears the review target and effect, and the stop result | Live region noise (the task line must speak only on change) |
| 11 | "Put a clock on your home screen, then make one that counts down to your next holiday." | Clock added from the gallery or by asking; countdown previewed and added | Whether they find *Add widgets* or ask Pip; whether the preview is read before adding |
| 12 | From home, with no instructions: "Ask the computer to open your settings." | They find the mic (menu bar, clicking Pip, or Space) and Settings opens | How long until they try talking; whether "Type instead" is found by people who'd rather not talk |
| 13 | "Find the photo from Cox's Bazar, then put back the file you deleted earlier." | Files › Pictures found through the sidebar; Bin › *Put back* used | Sidebar versus path bar; whether "From Documents" in the Bin is noticed |
| 14 | "Turn the screen brightness down and make the accent colour green." | Both done in Settings (or by asking Pip) | Sidebar versus search in Settings; whether the section colours help |
| 15 | "Install LibreOffice, then find out whether your Windows accounting program will run." | LibreOffice installed; they reach *Windows apps* and can say what Bottles does | Whether "Coming from Windows?" is noticed; trust in sandboxed installs |

## What to measure

| Measure | Target |
|---|---|
| Task success without help | ≥ 80 % per task; anything lower is redesigned before the next round |
| Time on tasks 1 and 2 | Within 1.5× a Windows 11 baseline by the second attempt |
| Wrong actions on task 3 | 0 files deleted by mistake |
| Single Ease Question (1–7) | ≥ 5.5 per task |
| SUS after the session | ≥ 75 |
| "Did Pip do what you asked?" | Yes, and they can say what it did, for every Pip task |

Record what people say about the orb in their own words. If more than one person in a round
reads a state wrongly (for example *Waiting* as frozen), change the status label first, the
motion second.

## Build order

Each step ships behind a flag and is tested with the tasks it unlocks before the next begins.

| Step | Build | Unlocks tasks | Done when |
|---|---|---|---|
| 0 | The SIX image on Fedora: a Containerfile on the Fedora base with branding replaced, building and booting in CI, with rollback (see [17](17-fedora.md)) | — | CI boots the image in a VM; an update and a rollback both work unattended |
| 1 | Tokens and type: [`tokens.css`](../tokens/tokens.css) → native toolkit, Geist and fallbacks, contrast check in CI | — | `check_contrast.py` passes in CI, both themes and every accent |
| 2 | Menu bar, dock, windows, Snap Layouts, Six Search (with effect lines) | 1, 7 | Tasks 1 and 7 pass with the mouse and with the keyboard |
| 3 | Control Center, notifications, toasts with Undo | 2 | Task 2 passes; every destructive toast has Undo |
| 3b | System apps: Settings (every page backed by its Fedora service), Files with the Bin, Software with Flatpak, Calendar, lock screen | 13, 14, 15 | Tasks 13–15 pass; no Settings page edits a file directly |
| 4 | Home screen: matte wallpaper, cards, drag, stacks with previews that stay put and open in place, widget gallery | 6, 11 | Task 6 passes; Reduce motion makes it jump, not spring |
| 5 | Pip's orb engine (one clock per look, every state, small and realistic renderers, the ray-marched Turbine and the point-cloud Hologram), status label, live region | 8 | Orbs hold 60 fps on the lowest supported GPU, every look; task 8 passes with every look |
| 6 | Pip on device: local commands, review cards, failures with recovery, stop that reports what happened, widget specs | 3, 4, 5, 11 | Tasks 3–5 pass; nothing changes a file without a review |
| 7 | Cloud model behind consent, provider note on every reply, waiting and retrying states | 3–5 again | No request leaves the device before consent; outages read as *Waiting*, not as broken |
| 8 | Voice-only home: press to talk, "Hey Pip" on the device, captions, review by voice, the voice panel over windows; the Pip app for typing | 12, and 1–7 by voice | Every voice task can be done by typing in the Pip app too |
| 9 | Accessibility pass: screen reader, magnifier, More contrast, Reduce transparency | 9, 10 | Tasks 9 and 10 pass |
| 10 | Windows migration: app compatibility labels, Taskbar layout option, shortcut parity | 1, 2 with Windows habits | Long-time Windows users pass tasks 1 and 2 first try |

Do not start the cloud step (7) before the on-device step (6) passes: everything the person sees
when something goes wrong is built in step 6.
