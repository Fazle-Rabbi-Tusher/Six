# 01 · Research: what makes a desktop OS easy to use

This page summarizes the research behind the SIX design language. Each finding ends with the
**decision** it led to, so the rest of the guide can be traced back to evidence.

> Two of the visual references (the plasma-ui workspace demo and thinkingorbs.com) could not be
> loaded directly while this was written. Their design ideas are taken from their published
> source and package descriptions, linked under Sources.

---

## A. Usability evidence

### 1. Familiarity beats novelty for people switching operating systems
- A 2025 eye-tracking study (60+ participants, System Usability Scale) compared Windows, macOS
  and Linux. Windows scored best on perceived usability. The authors attribute this to familiar
  interaction patterns and **spatial memory**: people find things where they expect them.
- In a survey of 1,275 IT professionals, the biggest obstacle to leaving Windows was the fear of
  "painful and distracting" change, ahead of technical problems.
- Switcher reports keep naming the same pain points: menus, search, closing windows, finding apps,
  and keyboard shortcuts that change (Cmd vs Ctrl).

**Decision:** SIX keeps the Windows *map*: launcher in the bottom-left, taskbar at the bottom,
window controls top-right in the order minimize, maximize, close, right-click menus everywhere, and
the same keyboard shortcuts. Everything new (Six Search, Pip on the home screen, Overview) is added on top of that
map and never replaces it. See [12 · Coming from Windows](12-windows-migration.md).

*Update:* by product direction, the default bottom bar is now a macOS-style dock with a menu
bar. To keep this finding's benefit, Windows shortcuts, right-click and window controls are
unchanged, and the Windows-style **Taskbar layout** is one setting away and is the default after
importing from Windows.

### 2. Fitts's law: edges and corners are the easiest targets
- Screen edges stop the pointer, so targets touching an edge are effectively infinitely deep and
  fast to hit. Corners are the fastest of all (NN/g; Smashing Magazine).
- The same speed makes destructive actions in corners risky.

**Decisions:**
- The Six logo in the menu bar reaches the **top-left pixel**; menu bar items reach the top edge.
- A maximized window's close button extends to the **top-right pixel**.
- The dock's hit areas extend to the bottom edge even though the dock floats 8 px above it.
- Hot corners exist but are **off by default** and can never be set to a destructive action.

### 3. Seeing windows side by side reduces memory load
- When people cannot see two windows at once, they hold one in short-term memory while switching
  (Nielsen's critique of Windows 8 full-screen apps).
- Microsoft Research found that on larger displays people keep more windows open and spend more
  time arranging and switching them (GroupBar).
- A 2025 study of dynamic window management measured **37.8 % faster** task completion in
  multi-window workflows.

**Decision:** Snap Layouts (hover the maximize button, or drag to an edge) are core, not hidden.
"Auto-arrange" (dynamic tiling) is an optional mode per desktop. Window groups can be named and
restored from the dock. See [09 · Shell](09-shell.md).

### 4. Translucency hurts legibility when it sits behind text
- Reviews of Apple's Liquid Glass (iOS 26) consistently report low contrast, text fading into busy
  backgrounds, and controls that are hard to recognize as tappable. Apple's fix was to raise
  opacity and point people to *Reduce Transparency* and *Increase Contrast*.
- Critics argue those settings are patches instead of foundations.

**Decision:** Plasma glass is allowed **only on system chrome that floats** (menu bar, dock, menus,
popovers, notifications). Glass fill never drops below 78 % (light) / 72 % (dark) opacity, text on
glass must still pass 4.5:1 against the worst-case wallpaper, and *Reduce transparency* is a
first-class mode tested in every review, not an afterthought.

### 5. Claymorphism is readable, neumorphism is not
- Neumorphism signals state with soft, low-contrast shadows, which fails people with low vision.
- Claymorphism puts a **filled, coloured** shape above the page with a coloured drop shadow plus
  two inner shadows (light top-left, dark bottom-right). The fill carries the contrast, so it stays
  readable.

**Decision:** Clay is the material for things you press. State is always carried by fill colour,
icon or label, never by shadow alone. See [05 · Materials](05-materials.md).

### 6. Bigger, distinct primary actions are found faster
- Google's research for Material 3 Expressive (46 studies, 18,000+ participants) reports people
  located key actions **up to 4× faster** when the action was larger, coloured and shaped
  differently, and older participants closed the gap with younger ones. These were concept designs
  and Google's own numbers.

**Decision:** Every view has one obvious primary action: accent fill, clay elevation, and larger
than its siblings. Secondary actions stay quiet.

### 7. Accessibility baseline: WCAG 2.2 AA
- **2.5.8 Target Size (Minimum):** 24 × 24 CSS px (44 × 44 recommended).
- **2.4.11 Focus Not Obscured:** a focused control must not be hidden by sticky UI.
- **2.4.13 Focus Appearance (AAA):** visible, high-contrast focus indicators.

**Decision:** Minimum pointer target 32 px, touch mode 44 px; the 2 px + 2 px focus ring is never
removed; the dock and popovers never cover the focused element. See
[11 · Accessibility](11-accessibility.md).

### 8. Nielsen's 10 heuristics, applied to an OS shell

| Heuristic | Where it shows up in SIX |
|---|---|
| Visibility of system status | Pip's states, progress in dock icons, clear battery/network glyphs |
| Match with the real world | Plain names: "Files", "Settings", "Bin" (not "Nautilus", "Trash" vs "Recycle Bin" confusion) |
| User control & freedom | Undo toasts for delete/move, "Restore" for closed windows, Esc always backs out |
| Consistency & standards | One menu component, one dialog pattern, Windows shortcuts |
| Error prevention | Confirm only irreversible actions; everything else is undoable |
| Recognition over recall | Labels above dock icons on hover, search that shows shortcuts next to results |
| Flexibility & efficiency | Six Search actions, keyboard-first everything, snap layouts |
| Aesthetic & minimalist | Three materials with strict roles, one accent hue |
| Help users recover from errors | Errors say what happened and the fix, with a button for the fix |
| Help & documentation | "?" in every Settings page opens the relevant help, offline |

## B. Visual references and what we take from each

| Reference | What it is | What SIX borrows | What SIX avoids |
|---|---|---|---|
| **plasma-ui** (cruxgarden) | WebGL "liquid" React components inspired by Liquid Glass: surfaces refract what is behind them, fuse when they touch, snap to a 24 px grid, springy motion; materials plasma, crystal, metal, wood, stone, cloud; falls back to a CSS frosted panel without WebGL2 | The **plasma glass** material for floating chrome, the 24 px snap grid for windows/widgets, spring motion, iridescent rim, a CSS fallback path | GPU-heavy effects on every surface; fusing/stretching on functional UI (kept for the wallpaper and widgets only) |
| **thinking orbs** | Animated status orbs for AI agents: distinct states (idle, thinking, working…) instead of a spinner | **Pip's states**: one presence for the assistant and long-running tasks, with states that differ in shape and motion, not just colour | Many variants; Pip never replaces a progress bar where a percentage is known |
| **21st.dev** | Community registry of React + Tailwind (shadcn-style) components | Fast prototyping: pull a component, re-skin it with `tailwind.preset.js` | Shipping a component that fails the checklist in [10 · Components](10-components.md#adopting-community-components) |
| **macOS** | Coherent materials, Spotlight, Quick Look, consistent menus | Six Search (Spotlight), space-bar preview, one menu style, attention to typography | Global top menu bar, window controls on the left, Cmd-based shortcuts |
| **Claymorphism** | Soft 3D shapes: filled pastel, coloured drop shadow, inner highlight and shade | The **clay** material for buttons, toggles, tiles and app icons | Clay on large surfaces (windows, documents), pastel-on-pastel low contrast |
| **Windows 10/11** | The layout most PC users already know | Taskbar position, Start, Snap Layouts, shortcuts, right-click, title-bar controls | Two settings apps, inconsistent dialogs, ads and upsells in system UI |

## Sources

- Eye-tracking comparison of Windows, macOS and Linux GUIs (iMotions summary): https://imotions.com/blog/publications/the-force-of-habit-comparing-graphical-user-interfaces-of-popular-operating-systems-using-eye-tracking-analysis/
- Organizations find switch from Windows better than expected (Linux Magazine): https://www.linux-magazine.com/index.php/Online/News/Organizations-Find-Switch-from-Windows-Better-than-Expected/(language)/eng-US
- Novell desktop migration usability study: https://conference2005.kde.org/cfp/develconf/pete.goodall.y.cornelius.schumacher-novell.desktop.migration.study.php.html
- Fitts's law (NN/g): https://www.nngroup.com/articles/fitts-law/
- Fitts' law in the touch era (Smashing Magazine): https://smashingmagazine.com/2022/02/fitts-law-touch-era/
- Nielsen on Windows 8 (secondary): https://ignorethecode.net/blog/2012/11/27/nielsen_on_windows_8/
- GroupBar: The TaskBar Evolved (Microsoft Research): https://www.microsoft.com/en-us/research/?p=145448
- A Dynamic Take on Window Management (arXiv 2025): https://arxiv.org/abs/2511.17516
- Liquid Glass accessibility review (Infinum): https://infinum.com/blog/apples-ios-26-liquid-glass-sleek-shiny-and-questionably-accessible/
- How Apple is making Liquid Glass legible (MobileSyrup): https://mobilesyrup.com/2025/06/10/how-apple-is-making-sure-liquid-glass-as-legible-as-possible/
- Implementing claymorphism with CSS (LogRocket): https://blog.logrocket.com/implementing-claymorphism-css
- Glassmorphism vs neumorphism vs claymorphism (Pixso): https://pixso.net/articles/glassmorphism-vs-neumorphism-vs-claymorphism/
- Neumorphism and where it fails (Setproduct): https://www.setproduct.com/blog/neumorphism-design-guide
- Material 3 Expressive research (Android Authority): https://www.androidauthority.com/google-material-3-expressive-details-3554486/
- What's new in WCAG 2.2 (W3C): https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- plasma-ui: https://github.com/cruxgarden/plasma-ui
- Thinking Orbs (Product Hunt launch coverage): https://aitoolly.com/ai-news/article/2026-10-05-thinking-orbs-launches-on-product-hunt-enhancing-visual-feedback-and-user-experience-in-modern-ai-in
- thinking-orbs npm package: https://www.jsdelivr.com/package/npm/thinking-orbs
- 21st.dev: https://21st.dev
- JetBrains Mono typeface: https://www.jetbrains.com/lp/mono/
- Share Tech Mono typeface: https://fonts.google.com/specimen/Share+Tech+Mono
- VT323 typeface: https://fonts.google.com/specimen/VT323
- Phosphor icons: https://phosphoricons.com
