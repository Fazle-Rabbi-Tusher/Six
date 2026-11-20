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

## How much to say
The fewest words that are still true. A screen is read at a glance; what does not help the next
action is in the way.

- **A row is a name and, at most, one short line.** The name is one to four words. A second line is
  there only when the name cannot be understood without it, or when it carries the state ("Off",
  "Connected to Home"). It fits on one line at the window's default width (about 60 characters) and
  never says the name again in other words.
- **No paragraph inside a card and no note under a card.** An explanation that needs more than one
  line lives one step away: in a closed "Details" part, in the sheet that asks before the action, or
  in the SIX guide.
- **Say a thing once on a screen.** An action that belongs to every row of a list is a mark on the
  row (shown on hover and on focus, and always in the right-click menu), not a sentence under each
  row.
- **Facts about an app or a download are a table one step away.** The page says what the thing is in
  one line and has the button.
- **A state is a word or two where the value goes** ("Not on this computer", "Not built", "Off",
  "Needs sign-in"), not a sentence.
- **Empty states are one line,** with one button when there is something to do.
- **A heading names its group in one or two words** and never repeats the page's title.
- **Buttons are one to three words,** the verb first.
- **What is never cut:** that something is not built or not available; what leaves this computer and
  where it goes; what will be deleted or cannot be undone; what costs money, battery or a restart;
  whose words are shown (`local model`, `SIX`). These stay where the decision is made, as short as
  they can be said: two lines at most, at the moment of the action rather than always on the page.
- **Nothing true is lost.** A sentence taken off a page that a person may need is one step from
  where it was.
- **Words that are not SIX's are content,** and are not shortened: a person's request, an app's own
  summary from its maker, a headline, a file's or a game's name.

Measured, not judged: every screen of SIX is counted (words a person can read, second lines,
paragraphs, button lengths, repeats), and a count may only go down.

## Voice
- **Plain:** everyday words. "Turn on", not "Enable"; "Can't connect", not "Connection failure".
- **Short:** one idea per sentence. A row's second line is one line (above).
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
- Dates are written one way everywhere: a short month and the day in the locale's order
  ("Wed, Nov 18", "Nov 11, 11:00 AM"), with the year where it matters ("Nov 14, 2026").
- "You/your" for the user; avoid "my" in UI ("Your files", not "My files"), except where
  matching Windows terms in search.
- Keyboard shortcuts written with ` + `: "Super + E", "Ctrl + Shift + Esc".
- SIX's interface is in English and Bangla; every string a person reads goes through one
  translation table, so a new screen is never English-only by accident.
