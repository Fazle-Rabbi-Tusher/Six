# The assistant (Six)

The one warm, living thing on a neutral screen. In SIX it is called **Six** (the OS is **SIX**); in another product, keep the behaviour and give it that product's name.

## Six in the menu bar

There is no notch. Six, the assistant, lives in its orb at the right of the menu bar, and
everything it does grows out of that orb. **When Six is idle it is just the orb.**

| State | When | What it shows |
|---|---|---|
| **Orb** | Six isn't doing anything (music playing, timers and other apps don't count) | Six's orb; click it to open the Six app |
| **Capsule** | Six is working, listening or talking over your windows | The orb grows into a terminal-black capsule that slides out to its left, pushing the status icons over, and types what Six is doing like a terminal line: its task with a progress ring ("Slides · 46 %"), "Slides are ready" for a few seconds when a task finishes, "Listening", or the request it's working on ("searching Documents", "asking Claude"), including ones typed in the Six app. A number that ticks over (46 → 47 %) just changes; new words type in |
| **Panel** | You talk to Six with windows open, or click the capsule | A panel drips down out of the orb: Six's state and source ("Asking · waiting for your review", "on this device"), a voice wave, what you said, Six's reply typed in like terminal output (`> …`) and review cards; below that the running task (with **Stop task**) and, if music is playing, its controls (play/pause, next) |

The panel hangs under the orb, right-aligned to it (as far right as the screen allows), 420 px
wide. It closes 6 s after Six answers (longer while a review waits), or at once with `Esc`, its
×, or a second click on the capsule; a click outside closes an activity panel. Right-click the
orb for *Talk to Six*, *Open the Six app*, *What can Six do?* and Six's settings. It works at
every screen size.

| Moment | Motion |
|---|---|
| Capsule grows | The orb's button widens to the left on the detent spring (560 ms), its ground darkens to terminal black, and the words type in at about 70 characters a second; the status icons slide over with it |
| Panel drips down | A black neck buds from the orb's underside and stretches to the panel (460 ms) while the panel opens as a circle spreading from the orb's position (`clip-path`, 640 ms on the detent spring); its contents fade in with a 6 px focus pull 170 ms later |
| Panel grows | Its height follows the conversation on the precise spring as the reply types in |
| Panel closes | Contents leave first (140 ms), then the circle draws back up into the orb (360 ms, ease-in) and the neck pulls back into it |

**Six reaches for what it changes.** When Six opens, snaps or closes a window, or adds or removes
a widget, a black tendril drops from the orb (or from the open panel) to the window's title bar
(or the widget) and holds on while it moves, so you can see what Six is touching. It then thins in
the middle, lets go, and the two halves draw back into the orb and into the window (about 1.6 s
in all). One tendril at a time; a second action waits its turn. See
08 · Motion › Tension.

## Six's states

Six is one design at every size: a sphere of points of light (see the small orb in
09). On home it is rendered realistically: about 1,100 points with
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
| Waiting | A comet circles | A service made Six wait | PIP · RATE LIMITED · TRY IN A MINUTE |
| Retrying | Turns, brakes, springs back, goes again | Trying a failed step once more | PIP · CONNECTION DROPPED · TRYING AGAIN |
| Compacting | A line sweeps across, packing the points | Making room in a long conversation | PIP · MAKING ROOM · OLDER MESSAGES |
| Complete | Glows green once | Just finished | PIP · COMPLETE |
| Failed | Turns red and slows | Something didn't work; the reply says why | PIP · APP NOT FOUND |
| Cancelled | Dims | The person said no or pressed Stop | PIP · CANCELLED |
| Resting | Dim and almost still | Focus mode, battery saver, or the screen is idle | PIP · RESTING |

Outcome states (Complete, Failed, Cancelled, Waiting) settle back to Ready on their own after 1.4
to 9 s; the reply in the thread keeps the record.

Six's personality and voice still come from the character canvas; its earlier globe-of-rings
look is replaced by the dotted orb in the OS.

## Six's looks

*Settings › Six & voice › Look: Bloom / Halo / Ripple / Dotted / Ink / Mosaic* sets Six everywhere at once (home,
the menu bar, the dock, the menu-bar capsule, the task card). **Bloom** is the default. On a graphite and
silver screen Six is the one thing with colour, so it can be found at a glance and has a character
of its own. On home Six is 330 px (230 px when moved out of the middle, 240 px on a phone).

### Bloom (the default)

A soft ball of warm colour: orange and red flowing over violet, a pink haze lighting the air
around it, and a fine film grain, so it reads as a material rather than a gradient.

| Part | How it's drawn |
|---|---|
| Colour | Slow, domain-warped noise on the surface of a turning ball: warm low on the left, cooling to violet up and to the right; the flow never repeats |
| Form | Shaded as a matte ball (velvet, not gloss): lit from the side Six is looking at, the far side sinking into violet, a pink rim where the light wraps round, and a soft sheen |
| Haze | The ball's colour lighting the air around it: pink above, amber below. Reduced at small sizes so the shape stays crisp |
| Grain | Animated film grain over the ball and its haze (lighter below 30 px) |
| Rendering | One fragment shader on a shared WebGL canvas draws all three looks and copies into each orb; gradients without WebGL |

### Halo

A ring of cold light spinning about its vertical axis, caught over a short exposure, from the
long-exposure light rings it is modelled on. Each moment of the spin is an ellipse; together they
make a translucent 3D shell, brightest at the top and bottom where the ring is seen edge-on, with
a dark seam down the middle, vertical streaks where the spin lingered and the far half dimmer than
the near one. The exposure always catches at least half a turn, so its outline is always a circle.
It has no backing: on a dark page it is light, and on a light page it is drawn as blue ink, so it
sits on the page with nothing behind it.

### Ripple

A terraced pool seen from above, from the teal rings it is modelled on: eight steps of colour
falling from pale sky blue at the rim through aqua to a near-black centre. Each step's lip catches the light on the
side facing it and shades the step below, the outer rings thin out to nothing, and the deeper rings
shift further than the outer ones as Six looks around, so it reads in depth. The rings flow slowly
outward, like ripples.

### Ink: the look that shows what Six is saying

A paragraph out of focus, after a blurred-text poster: six rows of soft ink blots, wider than tall,
overlapping their neighbours, about one in four paler as if further out of focus. Every blot drifts
sideways on its own slow sine and breathes in width, so the cloud is never still.

**It shows Six's words.** When Six speaks, each word of the reply comes into focus in turn, about
three words a second, where a blot dissolves to make room for it. Words land in reading order
(top row to bottom, left to right, three blots on for each word, so the few words in focus at once
never share a blot), sharpen in 200 ms and blur back out over 420 ms as later words arrive, so
three or four are readable at any moment. A streamed reply keeps its place as it grows. Listening,
Ink shows the words it heard, faster. At rest it says a short line of its own every few seconds
(*I walk with you.*, *Ready when you are.*, *Say the word.*). Words are set in Share Tech Mono at
21 % of the cloud's radius: navy ink (`#0E123E`) and near-black words on light, pale periwinkle
blots and white words on dark.

| State | Ink |
|---|---|
| Listening | Rows pulse in a wave from top to bottom with your voice; the words it heard come into focus |
| Thinking | The rows slide past each other, as if the paragraph were being rearranged |
| Speaking | Blots swell with the voice; the reply comes into focus word by word |
| Working | Blots above the fill line fade, so the paragraph fills from the bottom as the task runs |
| Searching | A band of focus sweeps across, the rest stays faint |
| Failed | Blots fade and the words turn red |
| Resting, Cancelled | Pale and almost still |

In the menu bar and the dock (under 60 px) Ink is three rows of blots in the orb's own colour, with
no words.

### Mosaic

A ball of square tiles, after an optical-illusion study. The tiles sit on a cube projected onto the
sphere (11 × 11 per face on home), so every tile is close to square and none crowd at a pole. Each
tile is its own hinged particle: a travelling wave tilts every tile in turn while one light rakes
across from the upper left, so the ball shimmers between solid and see-through, and the rim fades
to nothing. The ball turns slowly and leans toward the pointer.

| State | Mosaic |
|---|---|
| Ready | A slow diagonal wave runs through the tiles |
| Listening | Rings of tilt run out from the middle |
| Thinking | A fast diagonal sweep, with tiles twinkling across it |
| Speaking | The wave grows with the voice |
| Working | Tiles settle flat and bright from the bottom up as the task fills |
| Searching | The light roams around the ball |
| Compacting | Every tile folds in and out together |
| Complete, Failed | A green flash once; a red cast while failed |
| Resting, Cancelled | Dim, the wave almost still |

### What each state does

A state changes how the colour or light moves, never the shape, and every change eases in over
about half a second.

| State | Bloom | Halo | Ripple |
|---|---|---|---|
| Ready | The colour drifts slowly | Turns slowly | The rings flow slowly outward |
| Listening | Ripples run out from the centre; it swells a little | The shell breathes with your voice | Waves run through the rings |
| Thinking | The colour stirs into a swirl and a spark crosses it | Spins faster into a fuller shell; a bright knot runs round | The rings wind into a spiral; a spark crosses |
| Speaking | Swells and brightens with each word | Brightens with each word | Brightens with each word |
| Searching | A bright spot roams across the face | A bright knot circles the ring | A bright spot roams across the pool |
| Working | Fills like a glass of water as the task progresses | Lights from the bottom up as the task progresses | Lights from the centre out as the task progresses |
| Asking | A beam turns round the rim until you answer | A beam of light circles the ring | A beam turns round the rim |
| Waiting | A slower beam circles | A slow comet circles | A slower beam circles |
| Retrying | Wobbles, settles, then tries again | Spins faster, then tries again | Flows faster, then tries again |
| Compacting | The colour winds tightly in on itself | Spins tighter | The spiral winds tighter |
| Complete | Warms green once, then settles | Turns green once | Turns green once |
| Failed | Cools red and slows | Turns red and slows | Turns red and slows |
| Cancelled, Resting | Fades to grey, dim and almost still | Fades to grey, dim | Fades to grey, dim |

### Personality

- **Six looks at you.** The light on Bloom, the tilt of Halo and the depth of Ripple turn toward
  the pointer; bring it close and Six leans in, looks harder and brightens a little.
- **Six watches you type.** Start typing in a field and it glances at what you're writing.
- **Six blinks.** While idle, Six squashes for a moment every few seconds and springs back.
- **Six reacts.** It hops when a task completes (and lands with a squash), shakes its head when
  something fails, nods when it asks you something, and says hello with a hop when it appears.
- **Six is water.** Poke it and it squashes; drag it across home (or fling it) and it stretches
  the way it moves and settles.
- **Six gets drowsy.** Left alone for 40 seconds it dims, breathes slower and looks down; move the
  mouse or press a key and it wakes with a little hop.

All of these are off under Reduce motion, where Six is drawn still on a fixed frame and changes
state at once. None of them carries information on its own: the state label under Six and the
reply always say what happened.

### The review card

| Part | Content |
|---|---|
| Heading | ⓘ *Review before I do this* |
| Target | The exact item: file icon, full name, location, size and when it last changed. Several items list each one, never "3 files" |
| Effect | One line per consequence, in plain words: "Moves this one file to the Bin. Nothing else changes." "You can put it back from the Bin for 30 days." |
| Buttons | The action named by its verb (*Move to Bin*, Ember for destructive actions) and *Cancel*. Never *OK* / *Yes* |
| After | The card dims and its buttons disable; the reply says what happened, the action shows as a chip, and a toast offers **Undo** |

Cancel is never a failure: Six says "Cancelled. Nothing was changed." and the orb shows
*Cancelled* for a moment before returning to *Ready*.

## Voice

Voice is how home works, so the microphone is always one press away and its state is always
visible.

| Way to talk | How |
|---|---|
| **Press to talk** (default) | The mic button in the menu bar, clicking Six on home, `Six + Space` (`Ctrl + Space` in the prototype), or holding Space on home and letting go when you're done |
| **Always listening for "Hey Six"** | Turned on in Control Center (*Listen for "Hey Six"*) or Settings › Six & voice. The wake word is detected on the device; nothing is processed or kept until it is heard. "Hey Six, turn on night light" works in one breath; "Hey Six" alone starts listening |

| Step | What the person sees and hears |
|---|---|
| Listening | Six ripples (*Listening*); the menu-bar mic turns into an amber pill; the caption shows a live waveform and "Listening…" |
| Hearing | The transcript forms in the caption as you speak, so a misheard word is visible before anything runs |
| Working | The caption keeps what Six heard; the orb and status label show what Six is doing ("PIP · ARRANGING WINDOWS") |
| Answer | The reply appears under what you said, in Share Tech Mono, and is spoken aloud (Settings › Six & voice › *Speak replies*) |
| Review | Changes to files show the review card inside the caption with "Say "yes" or "no"". Six waits; you can answer by voice or with the buttons |
| With windows open | Six talks from the **menu bar**: its orb grows into a capsule and a panel drips down out of it with what you said, Six's reply (typed in like terminal output) and any review card (see 09 · Six in the menu bar) |

Rules:
- **The mic has two visible states, never a hidden one.** Amber pill = Six is hearing you now. A
  small green dot on the mic = Six is only listening for "Hey Six", on this device.
- Every spoken reply is also written, in the caption and in the Six app. Voice never carries
  information the screen doesn't.
- Everything voice does can be typed in the Six app, and everything typed can be said.
- A new request closes an open review as *Cancelled*, so nothing waits half-answered.
- Captions follow the text size setting.

> In the prototype, voice uses the browser's speech recognition where it can (for example opening
> the file locally in Chrome). Where it can't, which includes most embedded previews, the hint
> line says *demo voice* and Six "hears" sample requests; the **Try saying** chips play exact
> phrases. Spoken replies use the browser's speech engine.

## Home with the assistant

| Part | Spec |
|---|---|
| **Six** | 330 px orb in the middle of home, drawn as Bloom by default (see Six's looks). It is a button: click it to talk. A status label in mono caps appears below it only while Six is busy: the state, or what Six is actually doing ("SIX · SEARCHING DOCUMENTS", "SIX · WAITING FOR YOUR REVIEW"). At rest there is no label |
| **The intro** | Not on screen by default. Ask Six "what can you do?" (or "help"), or right-click home or Six and pick *What can Six do?*, and it pops up under the orb: the greeting typed in like a terminal line (`text-headline`, "Good evening, Nadia."), one line saying how to talk ("Press the mic in the menu bar, or hold Space, and talk.", or with Hey Six on, "Say "Hey Six", then what you need."), the **Try saying** examples and the hint line, each fading in 120 ms after the last. It goes when you close it (× at the end of the hint line, or `Esc`) or start talking. *Settings › Home & widgets › Keep the intro on home* keeps it on screen |
| **Moving Six** | Six starts in the middle, but it's yours to place: drag it anywhere on home and it stays there (a little smaller, 190 px, like something set down), clear of the menu bar and dock; the greeting and examples close up the space it left. Right-click it for *Move Six back to the middle* or *Hide Six from home*; `Alt + arrows` moves it from the keyboard. Hidden, Six still listens through the menu bar mic; *Settings › Home & widgets › Six on home* brings it back. Its place is remembered |
| **Caption** | A plasma clay capsule that appears while you talk: a live waveform, what Six heard ("Open Files and Terminal side by side"), then Six's reply in Share Tech Mono, **typed in like terminal output**: a `>` prompt mark, the words arriving a few at a time behind a block cursor that blinks out 1.6 s after the last word. A streamed reply keeps typing toward the longer text instead of starting over. Review cards, previews and recovery chips appear inside it. A round × in its corner puts it away at once (speech stops; an open review is cancelled); otherwise it fades 9 s after the reply (longer when there are chips). *Settings › Six & voice › Type replies like a terminal* off shows the whole reply at once, as does Reduce motion |
| **Try saying** | Part of the intro. Up to four example requests as chips. Clicking one plays it as if you had said it, which is also how the prototype is tested without a microphone |
| **Hint line** | Part of the intro. The listening mode with its shortcut, **Type instead** (opens the Six app) and × to close the intro |
| **Widgets** | 284 px plasma clay cards in two columns (see Widgets below). Cards in a column sit 12 px apart, so they fuse. Draggable; drop snaps to the 24 px grid; double-click a moved card to send it back. Drop one card on another to stack them |
| **Below 1100 px** | Everything stacks in one scrolling column: Six, caption, examples, then widgets in a grid |
