# 11 · Accessibility

Baseline: **WCAG 2.2 level AA** for every shell surface and first-party app, with AAA where
listed. Accessibility settings are designed states, tested like dark mode.

## Built-in modes

| Mode | What changes | Token hook |
|---|---|---|
| **Reduce transparency** | All glass becomes solid `--c-surface`; blur off | `[data-transparency="reduced"]` |
| **More contrast** | Secondary text → primary; dividers → strong; glass off; focus ring 3 px | `[data-contrast="more"]` |
| **Reduce motion** | Movement → crossfades; wallpaper, SIX and home cards still | `[data-motion="reduced"]` + `prefers-reduced-motion` |
| **Text size** | One text size for SIX's windows and other apps, 80 to 200 %; layouts reflow | root font scale |
| **Touch density** | Targets 44 px, rows 44 px, title bar 52 px | `[data-density="touch"]` |
| **High contrast** | Pure black and white with one strong accent (deep blue in light, yellow in dark), in both designs; body text 7:1, large text and glyphs 4.5:1; includes More contrast; no texture or wallpaper art behind text. Values in [	okens/high-contrast.css](../tokens/high-contrast.css) | `[data-hc="on"]` |
| **Colour filters** | Grayscale, deuteranopia/protanopia/tritanopia filters (Settings › Accessibility) | compositor |

Settings › Accessibility holds them all. Control Center has tiles for Touch, More contrast, Reduce
motion and Reduce transparency (Solid); the sign-in and lock screens have an Accessibility button;
the installer has "Accessibility and appearance" on its first page. In Sculpted, More contrast and
Reduce transparency replace every shadow with a 1.5 px line.

Every screen SIX can open is measured in a real browser engine, in both designs, light and dark,
every accent, More contrast and High contrast, against what is really behind each line, and held to the limits ([04](04-color.md#the-contrast-rule)).

## Checklist for every screen

**Perceivable**
- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 for ≥ 24 px or 19 px bold); UI boundaries ≥ 3:1.
- [ ] No information by colour alone (icon + word for every state).
- [ ] Works at 200 % text size without clipping or horizontal scrolling in content.
- [ ] Text on glass passes contrast over a white *and* a black wallpaper.

**Operable**
- [ ] Everything works with keyboard only; logical tab order; no keyboard traps.
- [ ] Focus ring visible (2 px surface gap + 2 px accent) and never hidden behind the dock or menu bar,
      a sticky header or a toast (WCAG 2.4.11).
- [ ] Pointer targets ≥ 32 px (24 px is the WCAG floor; we exceed it), 44 px in touch mode.
- [ ] Drag actions have a non-drag alternative (WCAG 2.5.7), e.g. snap via the maximize flyout
      or `Super + arrows`; reorder via menu "Move left/right".
- [ ] Timeouts (toasts with actions, lock screen) can be extended or turned off.
- [ ] No content flashes more than 3 times per second.

**Understandable**
- [ ] Labels above inputs; errors explain the fix.
- [ ] Consistent placement of the same controls across apps (consistent help: WCAG 3.2.6).
- [ ] No re-entering information the system already has (redundant entry: WCAG 3.3.7).
- [ ] Sign-in doesn't require a cognitive test; allow paste and password managers (3.3.8).

**Robust**
- [ ] Every control exposes role, name, state and value to AT-SPI (Linux) / the shell's
      accessibility tree; tested with the built-in screen reader.
- [ ] Custom-drawn shell surfaces (menu bar, the notch, dock, home cards) publish an accessibility tree, not a
      bitmap.

## Screen reader and magnifier
- The built-in screen reader announces SIX's state changes politely ("Backup finished") and
  never interrupts typing.
- Magnifier follows keyboard focus and the text caret, not only the pointer.
- Dock items announce as "Files, running, 2 windows".

## Language
- Every UI string is translatable; layouts allow +40 % text length (German) and right-to-left
  mirroring (Arabic, Hebrew, Urdu). Icons with direction (back, forward, undo) mirror; clocks,
  media play and checkmarks don't.
- Bengali, Devanagari and other Indic scripts get +2 px line height (see Typography).
