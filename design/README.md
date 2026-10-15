# SIX OS · Soft Matter design language

The design guide and interactive prototype for **SIX**, a desktop operating system built on
**Fedora Linux** to replace Windows on everyday PCs. Soft Matter keeps the layout Windows users
already know and renders it in soft materials: **clay** you press, **plasma glass** that floats,
**paper** you work on, and **plasma clay**, the liquid surfaces of the home screen. Home is
**voice first**: you talk to **Pip**, the assistant; the written conversation lives in the Pip app
at the top right. A macOS-style menu bar and dock frame it all (a Windows-style taskbar layout is
one setting away), with Settings, Files, Software and Calendar as the system apps.

![SIX home screen with Pip, dark theme](screens/home-dark.png)

## Start here

| | |
|---|---|
| **Try it** | Open [`prototype/index.html`](prototype/index.html) in a browser. Home is voice only: press the mic in the menu bar, click Pip, hold Space or press `Ctrl + Space`, or click a **Try saying** example. Drag Pip anywhere on home, or right-click it to hide it. With windows open, Pip talks from the **notch** at the top centre, which appears only while Pip is working (a task, a request, a conversation) and shows its progress. Right-click anything for its menu, like Windows; right-click a widget to make it **float** over every app; add the **Video** widget and drag its corner to resize it; Settings › Pip & voice sets its look: Bloom, Halo, Ripple or Dotted (in previews without a microphone Pip hears sample requests). Pip watches the pointer, leans in when it's close, blinks, hops when a task completes, shakes its head when one fails, and gets drowsy if left alone. Try the tension studies: pull the top card of a stack (it holds on until 150 px), ask Pip to "open files" and watch the notch reach for the window, turn on Bluetooth and then Airplane mode in Control Center, pull a slider's thumb off its track, drag a file to the dock's Bin and put it back, and right-click anywhere. Try "delete interview notes" for a review card you can answer by voice. Click the Pip icon at the top right for the chat. Open **Settings** (search "dark" or "bangla"), **Files** (walk folders, move something to the Bin and put it back), **Software** and **Calendar** from the dock. Click **Add widgets**, drag one widget onto another to stack them, `Ctrl + K` for Six Search, and lock the screen from the Six menu |
| **Why** | [01 · Research](guide/01-research.md): the usability evidence behind every decision, with sources |
| **Rules** | [02 · Principles](guide/02-principles.md) |

## The guide

| Chapter | What it covers |
|---|---|
| [01 · Research](guide/01-research.md) | Switcher studies, Fitts's law, window management, glass legibility, claymorphism, WCAG 2.2, references (plasma-ui, thinking orbs, 21st.dev, macOS) |
| [02 · Principles](guide/02-principles.md) | Five principles and the "never" list |
| [03 · Typography](guide/03-typography.md) | Geist, Instrument Serif, Geist Mono, Noto fallbacks (incl. Bangla), type scale, rules |
| [04 · Color](guide/04-color.md) | Graphite and silver: neutral greys, the graphite accent (silver in dark) and its options, Pip's colour, semantic colours, clay pastels, plasma moods, verified contrast |
| [05 · Materials](guide/05-materials.md) | Clay, plasma glass, paper, wallpaper, plasma clay (the home's surfaces, drawn as water) and tension, elevation scale |
| [06 · Layout](guide/06-layout.md) | 4 px grid, control sizes, radii, window anatomy, breakpoints |
| [07 · Iconography](guide/07-iconography.md) | Phosphor system glyphs, clay app icons, folder, drive and file icons |
| [08 · Motion](guide/08-motion.md) | The feel (precise, continuous, lit; after the Ferrari Luce interior by LoveFrom), durations, precise, detent, recoil and membrane springs, tension (the six places things hold on to each other, its rules and tokens), choreography for windows, stacks, the dock, menus, voice and unlock, reduced motion |
| [09 · Shell](guide/09-shell.md) | Menu bar (with the mic and Pip), the Pip notch, right-click menus, macOS-style dock, Six Menu, Six Search, windows & Snap Layouts, Control Center, notifications, Pip's small orb, Overview, first run |
| [10 · Components](guide/10-components.md) | Buttons, toggles, inputs, menus, lists, dialogs, toasts… and a checklist for adopting 21st.dev / shadcn components |
| [11 · Accessibility](guide/11-accessibility.md) | Built-in modes and the per-screen checklist |
| [12 · Coming from Windows](guide/12-windows-migration.md) | Shortcut parity, Windows apps, how change is introduced, term mapping |
| [13 · Writing](guide/13-writing.md) | Voice and UI copy patterns |
| [14 · Home](guide/14-home-assistant.md) | The voice-first home: talking to Pip (press to talk or "Hey Pip"), captions, review by voice, widgets (gallery and widgets Pip makes), stacks, the Pip app, failures and recovery, Pip's looks (Bloom, the default, a grainy 3D ball of warm colour; Halo, a spinning ring of light caught as a 3D shell; Ripple, a terraced teal pool; the dotted sphere), its states and personality, and moving or hiding Pip |
| [15 · Testing and build order](guide/15-testing-and-build.md) | Who to test with, seventeen tasks, targets, and the order to build SIX in |
| [16 · System apps](guide/16-system-apps.md) | Pip, Settings (every section and page), Files, Software, Calendar, the lock screen, and the navigation rules they share |
| [17 · SIX on Fedora](guide/17-fedora.md) | The system design: the stack, which Fedora piece runs each feature, image-based updates and rollback, the shell, Pip on the device, security defaults, and the rules for building on Fedora |

## Concepts

| File | What it is |
|---|---|
| [`concepts/tension.html`](concepts/tension.html) | **Tension studies**: live concepts for elastic surfaces in SIX, in graphite and silver satin glass (after the *Tensionmorphism* reference; refractive and 3D, rendered with WebGL): a card stretching out of a stack, Pip's notch reaching for the window it's moving, Control Center radios that merge, answers growing out of questions, Files and the Bin, menus budding from the click. With rules, tokens and a build order. All six are now built into the prototype (see [08 · Motion › Tension](guide/08-motion.md#tension)) |

## Tokens

| File | Use |
|---|---|
| [`tokens/tokens.css`](tokens/tokens.css) | **Source of truth.** CSS custom properties for light, dark, the accent options and the accessibility modes |
| [`tokens/tokens.json`](tokens/tokens.json) | W3C Design Tokens format for native toolkits (Qt/QML, GTK, Flutter) or Style Dictionary |
| [`tokens/tailwind.preset.js`](tokens/tailwind.preset.js) | Tailwind preset so shadcn/ui and 21st.dev components use SIX tokens |
| [`tokens/build_tokens.py`](tokens/build_tokens.py) | Regenerates `tokens.json` from `tokens.css` |
| [`tokens/check_contrast.py`](tokens/check_contrast.py) | Verifies every text/background pair passes WCAG 2.2 in both themes, for every accent option |

```sh
python3 design/tokens/build_tokens.py     # after editing tokens.css
python3 design/tokens/check_contrast.py   # fails if any pair drops below its minimum
```

## Screens

| Talking to Pip on home | Pip answers in a caption | Review by voice |
|---|---|---|
| ![](screens/home-voice.png) | ![](screens/voice-reply.png) | ![](screens/pip-review.png) |

| Pip in the notch over windows | The Pip app | A failure with recovery chips |
|---|---|---|
| ![](screens/voice-hud.png) | ![](screens/pip-app.png) | ![](screens/pip-failed.png) |

| Settings › Display | Settings › Pip & voice | Control Center |
|---|---|---|
| ![](screens/settings.png) | ![](screens/settings-pip.png) | ![](screens/control-center.png) |

| Files › Pictures | Files › Home | Software |
|---|---|---|
| ![](screens/files.png) | ![](screens/files-home.png) | ![](screens/software.png) |

| Calendar | Lock screen | Home, light theme |
|---|---|---|
| ![](screens/calendar.png) | ![](screens/lock.png) | ![](screens/home-light.png) |

| Widget gallery | Clock and Now playing added | Phone width |
|---|---|---|
| ![](screens/widgets.png) | ![](screens/widgets-home.png) | ![](screens/phone-dark.png) |

| Dragging a card onto another | A stack with previews | Stack opened in place |
|---|---|---|
| ![](screens/stack-drop.png) | ![](screens/stack.png) | ![](screens/stack-open.png) |

| The notch with Pip's task | The notch while Pip asks for a review | A floating video widget over Settings |
|---|---|---|
| ![](screens/notch-task.png) | ![](screens/notch-voice.png) | ![](screens/widget-floating.png) |

| Right-click on home | Right-click a widget |
|---|---|
| ![](screens/menu-desktop.png) | ![](screens/menu-widget.png) |

| The clay app icons |
|---|
| ![](screens/dock-icons.png) |

| Design guide app | Pip's small orb, every state and variant |
|---|---|
| ![](screens/guide-pip.png) | ![](screens/small-orbs.png) |

| Pip as Halo on home | Halo in every state | Pip as Ripple on home | Ripple in every state |
|---|---|---|---|
| ![](screens/home-halo.png) | ![](screens/halo-states.png) | ![](screens/home-ripple.png) | ![](screens/ripple-states.png) |

| The five drawn wallpapers (Obsidian, Signal, Contour, Strata, Velvet) and their picker in Settings |
|---|
| ![](screens/wallpapers.png) |

| Tension: the notch reaching for the window Pip opened | Tension: radios fused, a slider pulled off its track | Tension: the Bin reaching for a file | Pip moved out of the middle |
|---|---|---|---|
| ![](screens/notch-reach.png) | ![](screens/cc-fuse.png) | ![](screens/files-bin.png) | ![](screens/home-pip-moved.png) |

## Credits

Pip's orb motion is ported from [Thinking Orbs](https://www.thinkingorbs.com/) by Yogesh
([github.com/yogesharc/thinking-orbs](https://github.com/yogesharc/thinking-orbs), MIT licence).
System glyphs are [Phosphor](https://phosphoricons.com) (MIT). SIX is built on Fedora Linux;
Fedora is a trademark of Red Hat, Inc., and SIX is not affiliated with or endorsed by the Fedora Project.
