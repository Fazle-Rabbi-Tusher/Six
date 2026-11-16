# 13 · Writing for SIX

Words are interface. SIX talks like a capable friend who knows computers: plain, short, calm.

## The name
- The system and the assistant are both **SIX**, always in capitals. Never "SIX OS" on anything a
  person sees (identifiers and package names may keep it). The assistant's old names, Six and Pip,
  are retired; the wake word is "Hey SIX".
- Words a model wrote are tagged `local model`; what SIX's own code did is tagged `SIX`.

## No program names
What a person reads names the thing, not the program behind it: "the speech model", not the
recogniser's name; "SIX couldn't reach the search service", not a service's process name; "the
sign-in screen", not the display manager. Program and file names belong in a **Details** part,
where someone who wants them can look.

## Voice
- **Plain:** everyday words. "Turn on", not "Enable"; "Can't connect", not "Connection failure".
- **Short:** one idea per sentence. Settings descriptions ≤ 2 lines.
- **Calm:** no exclamation marks in system UI, no blame, no jokes in errors.
- **Honest:** say what will happen, including costs ("This uses more battery").

## Patterns

| Situation | Write | Don't write |
|---|---|---|
| Button | "Install", "Delete 3 files" | "OK", "Yes", "Submit" |
| Toggle label | "Night light" (state shown by the toggle) | "Enable night light: ON" |
| Error | "Can't save to USB drive. It's full. Free up 120 MB or choose another place." | "Error 0x80070070" (put codes in a "Details" expander) |
| Confirmation (irreversible) | Title: "Permanently delete 3 files?" Body: "You can't undo this." Buttons: "Delete permanently" / "Cancel" | "Are you sure?" |
| Success toast | "Moved 3 files to Bin" + Undo | "Operation completed successfully" |
| Empty state | "No downloads yet. Files you download from the browser appear here." | "Nothing here" |
| Permission | "Allow Camera to use your location? It adds the place to photo details." | "Camera wants to access location services" |
| Progress | "Copying 12 of 240 files · about 2 min left" | "Please wait…" |
| Assistant status | "Reading expenses.xlsx", "Approve the change?" (in the notch) | "Working…", "Thinking…" with no subject |
| Assistant failure | "I couldn't find an app called "Photoshop" on this PC. Nothing was opened." + *Search for "Photoshop"* | "Something went wrong" |
| Stopped or cancelled | "Stopped. 1 action had already run and stays as it is." | "Cancelled" (with nothing about what changed) |
| Review before acting | "Moves this one file to the Bin. Nothing else changes." | "This action may affect your files" |
| Something not built | Say so in words: "Not on this computer", "designed, not built" | A control that does nothing |

## Mechanics
- Sentence case for everything except proper names.
- Numbers as digits ("3 files"); units with a space ("64 %", "120 MB").
- Time: follow the locale; relative for recent ("2 min ago"), absolute after 7 days.
- "You/your" for the user; avoid "my" in UI ("Your files", not "My files"), except where
  matching Windows terms in search.
- Keyboard shortcuts written with ` + `: "Super + E", "Ctrl + Shift + Esc".
- SIX's interface is in English and Bangla; every string a person reads goes through one
  translation table, so a new screen is never English-only by accident.
