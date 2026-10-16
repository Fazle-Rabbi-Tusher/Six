/**
 * SIX OS Tailwind preset — lets shadcn/ui and 21st.dev components be re-skinned with
 * SIX tokens. Import tokens.css once at the app root, then:
 *
 *   // tailwind.config.js
 *   module.exports = { presets: [require("./design/tokens/tailwind.preset.js")], ... }
 *
 * Every value points at a CSS variable, so light/dark and the accessibility modes
 * (reduced transparency, more contrast, touch density) work without extra classes.
 */
const v = (name) => `var(--${name})`;

module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        ui: v("font-ui"),
        display: v("font-display"),
        mono: v("font-mono"),
        pixel: v("font-pixel"),
      },
      colors: {
        bg: v("c-bg"),
        surface: { DEFAULT: v("c-surface"), 2: v("c-surface-2"), 3: v("c-surface-3") },
        line: { DEFAULT: v("c-line"), strong: v("c-line-strong") },
        text: { DEFAULT: v("c-text"), 2: v("c-text-2"), 3: v("c-text-3"), "on-accent": v("c-text-on-accent") },
        accent: { DEFAULT: v("c-accent"), hover: v("c-accent-hover"), soft: v("c-accent-soft") },
        info: { DEFAULT: v("c-info"), soft: v("c-info-soft") },
        success: { DEFAULT: v("c-success"), soft: v("c-success-soft") },
        warning: { DEFAULT: v("c-warning"), soft: v("c-warning-soft") },
        danger: { DEFAULT: v("c-danger"), soft: v("c-danger-soft") },
        clay: {
          lilac: v("clay-lilac"),
          mint: v("clay-mint"),
          peach: v("clay-peach"),
          sky: v("clay-sky"),
          butter: v("clay-butter"),
          rose: v("clay-rose"),
        },
        // shadcn/ui variable names, mapped onto SIX tokens
        background: v("c-bg"),
        foreground: v("c-text"),
        primary: { DEFAULT: v("c-accent"), foreground: v("c-text-on-accent") },
        muted: { DEFAULT: v("c-surface-2"), foreground: v("c-text-3") },
        destructive: { DEFAULT: v("c-danger"), foreground: v("c-surface") },
        border: v("c-line"),
        input: v("c-line-strong"),
        ring: v("c-focus"),
      },
      spacing: {
        "target": v("target-min"),
        "control-sm": v("control-sm"),
        "control-md": v("control-md"),
        "control-lg": v("control-lg"),
      },
      borderRadius: {
        xs: v("radius-xs"),
        sm: v("radius-sm"),
        md: v("radius-md"),
        lg: v("radius-lg"),
        xl: v("radius-xl"),
        "2xl": v("radius-2xl"),
      },
      boxShadow: {
        "clay-1": v("clay-1"),
        "clay-2": v("clay-2"),
        "clay-3": v("clay-3"),
        "clay-pressed": v("clay-pressed"),
        1: v("shadow-1"),
        2: v("shadow-2"),
        3: v("shadow-3"),
        4: v("shadow-4"),
        focus: v("focus-ring"),
      },
      transitionDuration: {
        instant: v("dur-instant"),
        fast: v("dur-fast"),
        base: v("dur-base"),
        slow: v("dur-slow"),
      },
      transitionTimingFunction: {
        standard: v("ease-standard"),
        out: v("ease-out"),
        spring: v("ease-spring"),
      },
      maxWidth: { measure: v("measure") },
    },
  },
};
