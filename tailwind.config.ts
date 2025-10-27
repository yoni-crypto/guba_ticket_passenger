import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        display: "var(--font-poppins)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        focus: "var(--color-focus-ring)",
        surface: {
          DEFAULT: "var(--color-surface)",
          subtle: "var(--color-surface-subtle)",
          muted: "var(--color-surface-muted)",
          inverted: "var(--color-surface-inverted)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          emphasis: "var(--color-primary-emphasis)",
          muted: "var(--color-primary-muted)",
          foreground: "var(--color-primary-foreground)",
        },
        emerald: {
          DEFAULT: "var(--color-emerald)",
          foreground: "var(--color-emerald-foreground)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          foreground: "var(--color-gold-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      spacing: {
        0: "var(--space-0)",
        "0.5": "var(--space-0-5)",
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
        12: "var(--space-12)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-pill)",
      },
      borderWidth: {
        DEFAULT: "var(--border-width-thin)",
        hairline: "var(--border-width-hairline)",
        thin: "var(--border-width-thin)",
        thick: "var(--border-width-thick)",
      },
      fontSize: {
        xs: ["var(--font-size-xs)", { lineHeight: "var(--line-height-snug)" }],
        sm: ["var(--font-size-sm)", { lineHeight: "var(--line-height-snug)" }],
        base: ["var(--font-size-base)", { lineHeight: "var(--line-height-normal)" }],
        lg: ["var(--font-size-lg)", { lineHeight: "var(--line-height-normal)" }],
        xl: ["var(--font-size-xl)", { lineHeight: "var(--line-height-relaxed)" }],
        "2xl": ["var(--font-size-2xl)", { lineHeight: "var(--line-height-relaxed)" }],
        "3xl": ["var(--font-size-3xl)", { lineHeight: "var(--line-height-snug)" }],
        "4xl": ["var(--font-size-4xl)", { lineHeight: "var(--line-height-snug)" }],
        "5xl": ["var(--font-size-5xl)", { lineHeight: "var(--line-height-tight)" }],
      },
      lineHeight: {
        tight: "var(--line-height-tight)",
        snug: "var(--line-height-snug)",
        normal: "var(--line-height-normal)",
        relaxed: "var(--line-height-relaxed)",
      },
      transitionDuration: {
        short: "var(--motion-duration-short)",
        medium: "var(--motion-duration-medium)",
        long: "var(--motion-duration-long)",
      },
      transitionTimingFunction: {
        standard: "var(--motion-ease-standard)",
        emphasized: "var(--motion-ease-emphasized)",
        soft: "var(--motion-ease-soft)",
      },
    },
  },
} satisfies Config;

export default config;
