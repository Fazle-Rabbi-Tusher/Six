# The sign-in screen, the lock screen and the installer

These pictures are **drawn by SIX's real sign-in, lock and installer code at the desk**, not
photographs of an installed computer: the sign-in and lock screens by SIX's own screens in an
offscreen renderer, the installer by SIX's installer pages in a test window. They use test accounts
("Contract test account", "Alice", "Guest"), a test media player and made-up test disks; the
installer's review page names a test disk and shows the preview's empty account. All are 1366 × 768
at 100 % unless the name says 1024. Two things differ from a real computer: the clock shows the
time the pictures were drawn, and on the lock screen the small icons on the foot's buttons are
missing (the desk has no icon theme). The real disk unlock prompt is in
[`../installed/`](../installed/README.md).

## Sign-in

The sign-in screen runs before anyone has chosen a design, so it keeps SIX's dark look.

| Picture | What it shows |
|---|---|
| [`sign-in.png`](sign-in.png) | One account: clock, date, initial, name, the password field, **Sign in**, Switch user; Accessibility, the session, Sleep, Restart, Shut down along the foot |
| [`sign-in-accounts.png`](sign-in-accounts.png) | Three accounts centred in one row; a long name ends in "…" |
| [`sign-in-fingerprint.png`](sign-in-fingerprint.png) | Fingerprint set up: the two-line hint under the field |
| [`sign-in-wrong-password.png`](sign-in-wrong-password.png) | "Sign-in did not work. Try again." |
| [`sign-in-accessibility.png`](sign-in-accessibility.png) | The Accessibility pop-up: larger text, more contrast, reduce motion, the on-screen keyboard |
| [`sign-in-restart.png`](sign-in-restart.png) | The question before restarting |

## Lock

The lock screen follows the design the person chose.

| Picture | What it shows |
|---|---|
| [`lock-sculpted-light.png`](lock-sculpted-light.png) | Sculpted light |
| [`lock-sculpted-dark.png`](lock-sculpted-dark.png) | Sculpted dark |
| [`lock-softmatter-light.png`](lock-softmatter-light.png) | Soft Matter light |
| [`lock-softmatter-dark.png`](lock-softmatter-dark.png) | Soft Matter dark |
| [`lock-face-not-recognised.png`](lock-face-not-recognised.png) | "Face not recognised. Type your password, or press a key to look again." |
| [`lock-too-long.png`](lock-too-long.png) | "Unlocking is taking too long. Try again, or press Ctrl + Alt + F3 to sign in." |
| [`lock-playing.png`](lock-playing.png) | Something playing: the media card at the foot (a test player) |

## The installer

Light, then dark (`-dark`). Two at 1024 × 768, the smallest screen the installer is made for.

| Picture | What it shows |
|---|---|
| [`installer-welcome.png`](installer-welcome.png) · [dark](installer-welcome-dark.png) · [1024](installer-welcome-1024.png) | Step 1 of 5, Language: "Welcome to SIX", the languages, "Accessibility and appearance" |
| (not pictured) | Step 2, Basic settings: language, keyboard and a field to test it, region and time zone. It shows the region and time zone of the computer it was drawn on, so it is left out |
| [`installer-where.png`](installer-where.png) · [dark](installer-where-dark.png) · [1024](installer-where-1024.png) | Step 3, Where SIX goes: the method, an empty drive chosen, disk encryption on by default with the passphrase fields |
| [`installer-where-refused.png`](installer-where-refused.png) | Next refused until a passphrase is typed, said under the fields |
| [`installer-account.png`](installer-account.png) · [dark](installer-account-dark.png) | Step 4, Your account: name, sign-in name, administrator, password, computer name, "Disk encryption: On" |
| [`installer-review.png`](installer-review.png) · [dark](installer-review-dark.png) | Step 5, Review and install: "Nothing has been written yet…", everything that will happen, each with Change |
| [`installer-installing.png`](installer-installing.png) · [dark](installer-installing-dark.png) | Installing SIX: four stages with Done, Now and Waiting, the bar, and the minutes passed in the long stage |
| [`installer-installed.png`](installer-installed.png) · [dark](installer-installed-dark.png) | "SIX is installed": every stage done, **Restart** |
