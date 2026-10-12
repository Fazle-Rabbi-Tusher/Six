# 14 · Home: Pip, chat and voice

The SIX home screen is a conversation. When no window is open you see Pip, the SIX assistant,
a composer to type or talk into, and a few plasma clay cards with what matters right now. The
menu bar, dock, Six Menu and windows work exactly as before (see [12 · Coming from Windows](12-windows-migration.md)),
so the assistant adds a way of working without taking the familiar one away.

![Home screen, dark theme, Tidal mood](../screens/home-dark.png)

Pip's character (personality, tone of voice and the full globe, tower and cube state sheet) is
designed on the [SIX assistant character canvas](https://claude.ai/artifact/BsUEj7UkGWeqPuPLwRTF6F).
This chapter covers how Pip works inside the OS.

## Anatomy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ╭ Pick up where you left off ╮                         ╭ Current task ─────╮ │
│ │ Quarterly report.xlsx      │            ◎            │ Slides from notes │ │
│ │ SIX shell spec v3.pdf      │          (Pip)          │ ███████░░  Stop   │ │
│ ├ Today ─────────────────────┤      PIP · READY        ├ This device ──────┤ │
│ │ 10:00 Design review        │  Good morning, Nadia.   │ Battery 64 %      │ │
│ ╰────────────────────────────╯  ╭───────────────────╮  ╰───────────────────╯ │
│                                 │ conversation      │                        │
│                                 ├───────────────────┤  (thread and composer  │
│                                 │ Ask Pip anything… 🎤│   are one liquid body) │
│                                 ╰───────────────────╯                        │
│                                 [suggestion] [suggestion] [suggestion]       │
│ ╭ ◉ [Search]  ▣ ▣ ▣ ▣ ▣                                  wifi vol bat ◎ 10:42 ╮│
└─────────────────────────────────────────────────────────────────────────────┘
```

| Part | Spec |
|---|---|
| **Pip** | 240 px globe centred above the greeting; shrinks to 132 px once a conversation starts so the thread gets the room. State label in mono caps below it ("PIP · LISTENING") |
| **Greeting** | `text-headline` in Instrument Serif, by time of day ("Good evening, Nadia."); a one-line hint under it until the first message |
| **Thread** | Plasma clay, max 44 % of the screen height, scrolls. Your messages: accent clay bubbles on the right. Pip's: plain text on the surface, labelled PIP, with action chips |
| **Composer** | Plasma clay, 64 px, `--radius-2xl`. Text field, Send (becomes Stop while Pip answers), and the voice button: a 48 px accent clay circle, the one primary action on home |
| **Suggestions** | Up to four clay chips with real things Pip can do now. Hidden once a conversation starts |
| **Cards** | 284 px plasma clay cards in two columns: *Pick up where you left off*, *Today*, *Current task*, *This device*. Cards in a column touch, so they fuse. Draggable; drop snaps to the 24 px grid |
| **Below 1100 px** | Everything stacks in one scrolling column: Pip, conversation, suggestions, then cards in a grid |

**Typing anywhere on home goes to Pip.** With no window focused, the first key you press lands in
the composer. Clicking Pip's orb in the menu bar or the dock shows home from anywhere.

## Conversation

- **Local first.** Plain commands ("open files", "turn on night light", "switch to the ember mood",
  "put Terminal on the right") are understood on the device, instantly, with no network. They are
  marked *Handled on this device*.
- **Everything else** goes to the language model. On-device by default where hardware allows; a
  cloud model only after the person agrees, said in Pip's words: "This needs the cloud model.
  Nothing leaves until you say so."
- **Pip can act.** It can open, close and snap windows, change settings and switch moods. Every
  action shows as a chip under the reply (✓ *Snapped Files left*); failed actions show a Sun chip
  with the reason. Pip never claims an action it didn't take.
- **Changes to files ask first.** Anything that edits, moves or deletes the person's files puts Pip
  in its *Asking* state with a clear yes/no ("This one changes your files. Shall I?").
- **Stop is always there.** Send turns into Stop while Pip answers; the current task card has Stop
  too, and stopping says what did and didn't happen ("Stopped. Nothing was changed.").
- **When a window covers home**, Pip's reply also appears as a toast, so the person isn't left
  wondering.

## Voice

| Step | What the person sees and hears |
|---|---|
| Start | Tap the voice button or hold `Six + Space`. The button turns Ember with a stop glyph; Pip's rings drop flat and ripple (*Listening*); the tray shows a mic glyph |
| Speak | A live waveform and the transcript as it forms, inside the composer, so a misheard word is visible before anything runs |
| Finish | Pause or tap again. The transcript becomes a normal message in the thread |
| Answer | Pip replies in the thread and, with *Speak replies* on, reads it aloud; the core pulses while it speaks (*Speaking*). Tap the voice button to interrupt |

Rules:
- **No always-on wake word by default.** "Hey Pip" is an opt-in setting, processed on-device.
- The listening state is impossible to hide: Pip's rings, the button colour and the tray mic glyph.
- Every spoken reply is also written. Voice never carries information that the screen doesn't.
- Voice has full keyboard parity: everything voice does can be typed.
- Captions: the transcript and replies use the normal text size setting and can be enlarged.

> The prototype can't use the microphone, so in voice mode Pip "hears" a sample request and says
> so in the hint line. Spoken replies use the browser's speech engine where available.

## Pip's states

The home globe and every small orb share one state at a time.

| State | Globe | When |
|---|---|---|
| Ready | Twelve points turn slowly inside six rings | Idle, waiting |
| Listening | Rings lie flat and ripple outward | Mic is on |
| Thinking | Spin speeds up; signals race along the circuit lines | Working out an answer |
| Speaking | The core pulses with each word | Streaming or reading a reply |
| Searching | A scan ring sweeps up and down | Looking through files |
| Working | Steady fast turns | A long task runs (also shown in the task card) |
| Complete | Rings lock into one; a check appears; the core flares | Just finished |
| Asking | Leans in; a Sun badge appears | Needs a yes |
| Resting | Dim and still | Focus mode, battery saver, or the screen is idle |

The character canvas also defines the tower (thinking, speaking, asking) and cube (working,
resting) forms; the OS uses the globe for all states at small sizes and may morph to the other
forms on the home screen when performance allows.

## The small orb

Outside home, Pip is drawn as a dotted sphere (menu bar 21 px, dock 40 px, task cards 40 px,
message labels 16 px). Its states and rules are in [09 · Shell → Pip's small orb](09-shell.md#pips-small-orb).
The task card uses the *Background tasks* variant; every other small orb follows Pip's state.

## Accessibility

- Pip is `role="img"` with its state in the label; state changes are announced politely through a
  live region ("Pip, complete").
- The thread is a `log` region; new replies are announced without stealing focus.
- Under Reduce motion Pip stops turning and switches states with a crossfade; cards stop springing
  and jump to place; the wallpaper freezes.
- Under Reduce transparency or More contrast the plasma clay surfaces become solid.
- Cards can be moved with the keyboard: focus a card, then `Alt + arrow keys` moves it one grid
  step (the drag has a non-drag alternative, WCAG 2.5.7).
