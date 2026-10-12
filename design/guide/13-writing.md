# 13 · Writing for SIX

Words are interface. SIX talks like a capable friend who knows computers: plain, short, calm.

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

## Mechanics
- Sentence case for everything except proper names.
- Numbers as digits ("3 files"); units with a space ("64 %", "120 MB").
- Time: follow the locale; relative for recent ("2 min ago"), absolute after 7 days.
- "You/your" for the user; avoid "my" in UI ("Your files", not "My files"), except where
  matching Windows terms in search.
- Keyboard shortcuts written with ` + `: "Six + E", "Ctrl + Shift + Esc".
- Bangla and English are first-class: every string is reviewed by a native writer, not machine
  translated.
