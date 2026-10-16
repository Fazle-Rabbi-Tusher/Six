# 02 · Principles

SIX's design language is called **Soft Matter**: an interface built from a few physical-feeling
materials, each with one job, arranged on a layout people already know.

## The five principles

### 1. Familiar map, fresh materials
People keep their muscle memory: what shortcuts do, how windows behave, where right-click
leads. SIX's default layout is macOS-style (menu bar + dock); the Windows-style Taskbar layout
is one setting away, so switchers can keep things where they *are*.
*Test:* could a Windows user find Start, close a window, and copy a file in the first minute
without help?

### 2. Touch it, float it, read it
Every pixel belongs to one of four materials:

| Material | Role | Examples |
|---|---|---|
| **Clay** | things you press | buttons, toggles, quick-setting tiles, app icons |
| **Satin** | things that float above content for a moment, and every control | menu bar, dock, menus, popovers, notifications, Six Search; buttons, switches, sliders |
| **Paper** (flat) | things you read and work in | window content, documents, lists, settings pages |
| **Plasma clay** | the living surfaces of home | home cards, Six's conversation and composer, desktop widgets |

If you can't say which material an element is, it's a design bug.

### 3. One obvious next step
Each screen has one primary action, and it looks like it: accent fill, clay elevation, bigger.
Everything else is quieter. If two things are shouting, one of them is wrong.

### 4. Calm by default, alive on purpose
Motion and colour explain what happened (a window came *from* its dock icon, Six is
*thinking*). Ambient effects (plasma wallpaper, Six's slowly turning globe) are slow and can be
turned off. Nothing blinks for attention unless the user must act.

### 5. Everyone, every setting
Reduced transparency, reduced motion, more contrast, large text and touch density are designed
states that we test like light and dark mode. A screen is not done until it works in all of them.

## What SIX never does
- Ads, upsells or "suggestions" for paid products in system UI.
- Move or rename a core control in an update without an opt-in.
- Ask "Are you sure?" for something that can be undone. Offer **Undo** instead.
- Put text directly on a wallpaper or raw glass without a guaranteed-contrast fill.
- Use colour as the only signal for state.
- Steal focus from what the user is typing.
