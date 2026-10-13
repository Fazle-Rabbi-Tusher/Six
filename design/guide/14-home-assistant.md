# 14 · Home: Pip, voice and widgets

The SIX home screen is **voice first**. When no window is open you see Pip, the SIX assistant, a
greeting and a few plasma clay widgets with what matters right now. There is no text box on home:
you talk to Pip. Press the mic in the menu bar (or hold Space, or say "Hey Pip" if you turned that
on), say what you need, and Pip answers aloud and in a caption under the orb. The written
conversation lives in the **Pip app**, opened from the Pip icon at the top right, so typing is
always one click away and every spoken request is kept there as history. The menu bar, dock, Six
Menu and windows work exactly as before (see [12 · Coming from Windows](12-windows-migration.md)).

![Home screen, dark theme, matte background](../screens/home-dark.png)

Pip's character (personality, tone of voice and the full globe, tower and cube state sheet) is
designed on the [SIX assistant character canvas](https://claude.ai/artifact/BsUEj7UkGWeqPuPLwRTF6F).
This chapter covers how Pip works inside the OS.

## Anatomy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ⁘ Home                                   🔍  🎤  wifi ▭64%  ⚙  ◎  Tue 10:42 │
│ ╭ Pick up where you left off ╮                         ╭ Current task ─────╮ │
│ │ Quarterly report.xlsx      │            ◎            │ Slides from notes │ │
│ │ SIX shell spec v3.pdf      │      (Pip: press to     │ ███████░░  Stop   │ │
│ ├ Today ─────────────────────┤         talk)           ├ This device ──────┤ │
│ │ 10:00 Design review        │      PIP · READY        │ Battery 64 %      │ │
│ ╰────────────────────────────╯  Good morning, Nadia.   ╰───────────────────╯ │
│                                  ╭───────────────────╮  [+ Add widgets]      │
│                                  │ ▂▅▇▅▂ “Open Files…” │  (caption while you   │
│                                  │ Done. Files on the │   talk; review cards   │
│                                  │ left, Terminal…    │   appear here too)     │
│                                  ╰───────────────────╯                        │
│                                  TRY SAYING  [chip] [chip] [chip]            │
│                                  🎤 Press to talk · Ctrl Space · Type instead │
│                  ⁘ ▣ ▣ ▣ ▣ ▣ ▣ ▣ ▣ ▣ ▣ │ ◎ 🗑                                │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Part | Spec |
|---|---|
| **Pip** | 260 px realistic orb centred above the greeting. It is a button: click it to talk. Status label in mono caps below it: the state, or what Pip is actually doing ("PIP · SEARCHING DOCUMENTS", "PIP · WAITING FOR YOUR REVIEW") |
| **Greeting** | `text-headline` in Instrument Serif, by time of day ("Good evening, Nadia."), and one line saying how to talk: "Press the mic in the menu bar, or hold Space, and talk." or, with Hey Pip on, "Say "Hey Pip", then what you need." |
| **Caption** | A plasma clay capsule that appears while you talk: a live waveform, what Pip heard ("Open Files and Terminal side by side"), then Pip's reply in Instrument Serif. Review cards, previews and recovery chips appear inside it. It fades 9 s after the reply (longer when there are chips) |
| **Try saying** | Up to four example requests as chips. Clicking one plays it as if you had said it, which is also how the prototype is tested without a microphone. Hidden while a caption shows; can be turned off in Settings › Home & widgets |
| **Hint line** | The listening mode with its shortcut, and **Type instead**, which opens the Pip app |
| **Widgets** | 284 px plasma clay cards in two columns (see Widgets below). Cards in a column sit 12 px apart, so they fuse. Draggable; drop snaps to the 24 px grid; double-click a moved card to send it back. Drop one card on another to stack them |
| **Below 1100 px** | Everything stacks in one scrolling column: Pip, caption, examples, then widgets in a grid |

## Stacking cards

Like notification stacks on a phone: drag one card onto another and they become a stack.

| Moment | What the person sees |
|---|---|
| Dragging over a card | The target gets a dashed accent outline and a "Release to stack" label |
| Dropped | The dragged card lands on top with a small pop; the top card gains a bar: ⧉ *4 stacked* · **Show all** · **Unstack**; a toast says what was stacked, with **Unstack** |
| Preview | Under the top card, **every** card in the stack peeks out as a slim preview (up to five, then "+N more"): its title and one live line, for example "TODAY · Next: 10:00 Design review", "CURRENT TASK · Slides from my notes · 64 %" |
| Bring one to the top | Click a preview: that card slides up to the top of the stack with a small pop, and the card that was on top becomes a preview. Clicking the top card itself does nothing to the stack |
| Open the stack | Click **Show all** on the stack bar. Nothing else on home moves: the home dims and blurs behind, and each card **unfolds out of its own preview strip** into a column, 42 ms after the one above it, on the precise spring (see [08 · Motion](08-motion.md#choreography)). The column scrolls if it is taller than the screen. **Show less**, a click outside or `Esc` folds every card back into its strip |
| In the open stack | Click a card to bring it to the front and close; drag a card to pull **just that one** out onto home; buttons inside cards (open a file, stop a task) work as usual |
| Pull one out | From the closed stack, drag the top card or grab its preview: a drag always moves exactly one card, and the rest of the stack stays put |
| Put things back | **Unstack** sends every card in the stack back to its original place; double-click any moved card to return it alone |

Other cards flow around stacks and moved cards, so nothing overlaps. Keyboard: previews and the
stack bar's buttons are normal buttons; `Alt + arrows` on the focused top card moves it out of
the stack one grid step at a time.

## Widgets

Home cards are widgets. Out of the box SIX shows four (*Pick up where you left off*, *Today*,
*Current task*, *This device*); the person adds more from the **widget gallery**, or describes
one and **Pip makes it**.

![The widget gallery](../screens/widgets.png)

### What the research says

| Source | Finding | What SIX does |
|---|---|---|
| Apple HIG and WWDC20 "Meet WidgetKit" | Widgets are glanceable, not mini-apps; each size shows only what serves the widget's one purpose; a widget that only opens its app adds nothing and gets removed | One job per widget; only small in-place controls (play, check off, start a timer); no "open app" widgets |
| Windows 11 widgets board | The most-upvoted Feedback Hub request was to remove the news feed from widgets; Microsoft later added a widgets-only setting | No feed and no ads. *Headlines* is opt-in, three items from topics the person picks, and labelled as such |
| Android widget sizing | Widgets that don't fill their space or misalign with the grid are a common reason people remove them | Every widget is exactly one column wide (284 px) and sits on the 24 px grid |

Sources: [Apple HIG · Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets),
[Meet WidgetKit (WWDC20)](https://developer.apple.com/videos/play/wwdc2020/10028/),
[Microsoft · Widgets design](https://learn.microsoft.com/windows/apps/design/widgets/),
[Neowin · what users want in Windows 11 widgets](https://www.neowin.net/news/top-10-features-and-changes-users-want-in-windows-11-widgets/),
[TechRadar · widgets-only board](https://www.techradar.com/computing/windows/hate-the-widgets-board-in-windows-11-microsoft-hopes-you-might-change-your-mind),
[Android · widget sizing](https://developer.android.com/design/ui/mobile/guides/widgets/sizing).

### The catalog

| Widget | Shows | Does in place |
|---|---|---|
| Pick up where you left off | Last files and apps | Opens the item |
| Today | Next meetings | — |
| Current task | What Pip is working on, then its output | Stop, Open, Show in Files |
| This device | Battery, storage, updates | — |
| Clock | The time here, in the display face, plus two cities | — |
| Weather | Now, feels-like, the next five hours | — |
| Now playing | Track, artist, position | Previous, play/pause, next |
| Headlines | Three headlines from chosen topics (no feed, no ads) | Opens the story in Browser |
| Note | A plain note, saved as you type | Type |
| Reminders | A checklist with what's left in the header | Check off, add |
| Focus timer | A 25-minute session | Start, pause, reset; a toast at the end |
| Calendar | This month, today in the accent colour | — |

### Adding, removing and when home is full

| Way in | What happens |
|---|---|
| **Add widgets** button | Sits at the foot of the shorter column while there is room; opens the gallery |
| Right-click home or a widget | *Edit widgets…* and *Remove "Clock"* |
| Six menu, Six Search | *Edit widgets…*, *Add widgets* |
| Ask Pip | "Add a clock widget", "remove the music widget", "edit widgets" |

- A new widget goes to the column with more room, slides in with a small pop, and a toast offers
  **Undo**. Removing works the same way; nothing is ever deleted, the gallery adds it back as it was.
- **When home is full**, a new widget goes into the stack at the foot of its column, right under the
  top card, so the column keeps its height; its preview shows it is there, and a click brings it up.
  If a card grows (a task finishing shows its output) and the card below no longer fits, that card
  goes into the stack too, with a toast saying so. Cards never overlap.

### Widgets Pip makes

Describe any widget, in the gallery's *Describe any widget* field or straight to Pip ("make a
widget that counts down to my exam on 14 December"). Pip designs it, shows a **preview card** in
the conversation (the real widget, drawn small) with **Add to home** and **Cancel**, and adds it
to the column with more room. Made widgets appear in the gallery under *Made by Pip*.

![Pip previews a widget before adding it, in the Pip app](../screens/pip-app.png)

**Made widgets are data, not code.** Pip writes a small spec and SIX draws it with its own
components, so every made widget looks native, follows the theme, contrast and motion settings,
and can't run anything or reach the network.

```json
{ "title": "Exam", "icon": "hourglass-medium",
  "blocks": [ { "type": "countdown", "label": "exam", "to": "2026-12-14" } ] }
```

| Block | Draws as |
|---|---|
| `stat` | A big number in the display face with a caption |
| `text` | A short paragraph (200 characters at most) |
| `list` | Rows with an optional right-aligned detail |
| `checklist` | Checkable rows plus *Add an item* |
| `countdown` | Days until (or since) a date; asks for the date on the widget if none was given |
| `counter` | A number with − and +, a goal and a progress bar |
| `progress` | A labelled progress bar |
| `clock` | A city and its time, kept live |
| `apps` | Up to five app icons that open the app |

Rules:
- A spec has a title of 32 characters at most, one icon from a fixed set, and one to four blocks.
  Anything else is dropped before drawing.
- **No made-up live data.** On the device, Pip makes countdowns, checklists, counters, world clocks,
  notes and app shortcuts. Prices, scores, news or weather need a connected source; without one Pip
  says so ("That needs live data I can't fetch here, and I won't make a widget that shows made-up
  numbers") and suggests a widget it can make.
- Requests the device can't handle go to the cloud model only with the same consent as any other
  question, and the reply is marked *Answered by Claude, in the cloud*.

## Conversation: the Pip app

The **Pip app** is where the conversation is written down. Open it from the Pip icon at the top
right of the menu bar, the Pip icon in the dock, **Type instead** on home, or Six Search. It has
a sidebar of conversations (today's at the top, earlier ones below, each with a mic glyph if it
was spoken), the thread, and a composer with a dictation mic. Spoken requests land in the same
thread, marked *Said aloud*, so nothing said to Pip is lost or hidden.

![The Pip app](../screens/pip-app.png)


- **Local first.** Plain commands ("open files", "turn on night light", "switch to the ember mood",
  "put Terminal on the right") are understood on the device, instantly, with no network. They are
  marked *Handled on this device*.
- **Where the answer came from is always shown.** Each reply ends with a small note: *Handled on
  this device* or *Answered by Claude, in the cloud*. While Pip works, the status label says which
  one it is asking ("PIP · ASKING CLAUDE").
- **Everything else** goes to the language model. On-device by default where hardware allows; a
  cloud model only after the person agrees, said in Pip's words: "This needs the cloud model.
  Nothing leaves until you say so."
- **Pip can act.** It can open, close and snap windows, change settings and switch moods. Every
  action shows as a chip under the reply (✓ *Snapped Files left*); failed actions show a Sun chip
  with the reason. Pip never claims an action it didn't take.
- **Changes to files ask first, with a review card.** Anything that edits, moves or deletes the
  person's files puts Pip in its *Asking* state and shows a review card in the reply (below). Pip
  does nothing until the person answers.
- **Failures name the reason and the next step.** "I couldn't find an app called "Photoshop" on
  this PC. Nothing was opened." is followed by recovery chips (*Search for "Photoshop"*, *Show all
  apps*). Never a bare "Something went wrong", never a dead end.
- **Stop is always there.** In the Pip app, Send turns into Stop while Pip answers; by voice, say "stop" or press the mic; the current task card has Stop
  too, and stopping says what did and didn't happen ("Stopped. 1 action had already run and stays
  as it is.", "Stopped at 64 %. The outline was kept in Documents; no slides were made.").
- **Waiting and retrying are said, not hidden.** If the cloud model asks Pip to slow down, the orb
  shows *Waiting* and the reply says when to try again, with an *Ask again* chip. A dropped
  connection is retried once, quietly, in the *Retrying* state; a second failure is reported.

![Pip asks for review before moving a file to the Bin](../screens/pip-review.png)

### The review card

| Part | Content |
|---|---|
| Heading | ⓘ *Review before I do this* |
| Target | The exact item: file icon, full name, location, size and when it last changed. Several items list each one, never "3 files" |
| Effect | One line per consequence, in plain words: "Moves this one file to the Bin. Nothing else changes." "You can put it back from the Bin for 30 days." |
| Buttons | The action named by its verb (*Move to Bin*, Ember for destructive actions) and *Cancel*. Never *OK* / *Yes* |
| After | The card dims and its buttons disable; the reply says what happened, the action shows as a chip, and a toast offers **Undo** |

Cancel is never a failure: Pip says "Cancelled. Nothing was changed." and the orb shows
*Cancelled* for a moment before returning to *Ready*.

![A failure with recovery chips](../screens/pip-failed.png)

## Voice

Voice is how home works, so the microphone is always one press away and its state is always
visible.

| Way to talk | How |
|---|---|
| **Press to talk** (default) | The mic button in the menu bar, clicking Pip on home, `Six + Space` (`Ctrl + Space` in the prototype), or holding Space on home and letting go when you're done |
| **Always listening for "Hey Pip"** | Turned on in Control Center (*Listen for "Hey Pip"*) or Settings › Pip & voice. The wake word is detected on the device; nothing is processed or kept until it is heard. "Hey Pip, turn on night light" works in one breath; "Hey Pip" alone starts listening |

| Step | What the person sees and hears |
|---|---|
| Listening | Pip ripples (*Listening*); the menu-bar mic turns into an amber pill; the caption shows a live waveform and "Listening…" |
| Hearing | The transcript forms in the caption as you speak, so a misheard word is visible before anything runs |
| Working | The caption keeps what Pip heard; the orb and status label show what Pip is doing ("PIP · ARRANGING WINDOWS") |
| Answer | The reply appears under what you said, in Instrument Serif, and is spoken aloud (Settings › Pip & voice › *Speak replies*) |
| Review | Changes to files show the review card inside the caption with "Say "yes" or "no"". Pip waits; you can answer by voice or with the buttons |
| With windows open | The same caption appears as a small glass panel at the top right, under the menu bar, so home doesn't have to be visible |

Rules:
- **The mic has two visible states, never a hidden one.** Amber pill = Pip is hearing you now. A
  small green dot on the mic = Pip is only listening for "Hey Pip", on this device.
- Every spoken reply is also written, in the caption and in the Pip app. Voice never carries
  information the screen doesn't.
- Everything voice does can be typed in the Pip app, and everything typed can be said.
- A new request closes an open review as *Cancelled*, so nothing waits half-answered.
- Captions follow the text size setting.

> In the prototype, voice uses the browser's speech recognition where it can (for example opening
> the file locally in Chrome). Where it can't, which includes most embedded previews, the hint
> line says *demo voice* and Pip "hears" sample requests; the **Try saying** chips play exact
> phrases. Spoken replies use the browser's speech engine.

## Pip's states

Pip is one design at every size: a sphere of points of light (see the small orb in
[09](09-shell.md#pips-small-orb)). On home it is rendered realistically: about 1,100 points with
perspective, depth of field (back points soft and blurred, front points sharp), a key light from
the top left, a glass edge that catches light, a faint core glow, a specular highlight and a soft
floor shadow. Dark mode draws light points on matte black; light mode draws graphite points on
white. The home orb and every small orb share one state at a time, and one clock, so they move in
step.

The motion of each state comes from [Thinking Orbs](https://www.thinkingorbs.com/) by Yogesh (MIT);
Listening, Speaking, Complete, Failed, Cancelled and Resting are SIX's own.

| State | Orb | When | Status label example |
|---|---|---|---|
| Ready | Turns slowly; the back of the sphere fades away | Idle, waiting | PIP · READY |
| Listening | Ripples spread from the centre | Mic is on | PIP · LISTENING |
| Thinking | A spark walks from point to point, trailing light | Working out an answer | PIP · ASKING CLAUDE |
| Speaking | Front points swell with the voice | Streaming or reading a reply | PIP · SPEAKING |
| Searching | A lens hops across the face, magnifying what it passes | Looking through files | PIP · SEARCHING DOCUMENTS |
| Working | A ring of light runs down the sphere; the sphere fills with light as the task progresses, with a thin progress ring | Acting, or a long task runs | PIP · ARRANGING WINDOWS |
| Asking | A lighthouse beam turns | Waiting for the person's review | PIP · WAITING FOR YOUR REVIEW |
| Waiting | A comet circles | A service made Pip wait | PIP · RATE LIMITED · TRY IN A MINUTE |
| Retrying | Turns, brakes, springs back, goes again | Trying a failed step once more | PIP · CONNECTION DROPPED · TRYING AGAIN |
| Compacting | A line sweeps across, packing the points | Making room in a long conversation | PIP · MAKING ROOM · OLDER MESSAGES |
| Complete | Glows green once | Just finished | PIP · COMPLETE |
| Failed | Turns red and slows | Something didn't work; the reply says why | PIP · APP NOT FOUND |
| Cancelled | Dims | The person said no or pressed Stop | PIP · CANCELLED |
| Resting | Dim and almost still | Focus mode, battery saver, or the screen is idle | PIP · RESTING |

Outcome states (Complete, Failed, Cancelled, Waiting) settle back to Ready on their own after 1.4
to 9 s; the reply in the thread keeps the record.

Pip's personality and voice still come from the character canvas; its earlier globe-of-rings
look is replaced by the dotted orb in the OS.

## The current task card

| Moment | Card |
|---|---|
| Running | Background orb, title, a status line in words ("Designing 12 slides"), progress bar, **Stop task** |
| Finished | The orb turns Complete; the line says where the result went ("Done. Saved to Documents."); an **output preview** replaces Stop: file icon, name, "12 slides · 4.2 MB · Documents", with **Open** and **Show in Files** |
| Stopped | The orb shows Cancelled; the line says what was kept ("Stopped at 64 %. The outline was kept in Documents; no slides were made.") |

The status line is a polite `status` region that only changes when the step changes, so a screen
reader hears "Designing 12 slides" once, not every percent.

## The small orb

Outside home, Pip is drawn as a dotted sphere (menu bar 21 px, dock 40 px, task cards 40 px,
message labels 16 px). Its states and rules are in [09 · Shell → Pip's small orb](09-shell.md#pips-small-orb).
The task card uses the *Background tasks* variant; every other small orb follows Pip's state.

## Accessibility

- Pip on home is a button whose label carries its state, its current activity and what pressing it
  does ("Pip, ready. Press to talk"); changes are announced politely through a live region
  ("Pip · searching Documents"). Pip's replies in the caption are a polite live region too.
- Review cards are a labelled group with real buttons; focus is not moved to them, so typing is
  never interrupted.
- The Pip app's thread is a `log` region; new replies are announced without stealing focus.
- Under Reduce motion Pip stops turning and switches states with a crossfade; cards stop springing
  and jump to place; the wallpaper freezes.
- Under Reduce transparency or More contrast the plasma clay surfaces become solid.
- Cards can be moved with the keyboard: focus a card, then `Alt + arrow keys` moves it one grid
  step (the drag has a non-drag alternative, WCAG 2.5.7).
