import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tinta:      "var(--tinta)",
        "tinta-2":  "var(--tinta-2)",
        bone:       "var(--bone)",
        "bone-light": "var(--bone-light)",
        "bone-3":   "var(--bone-3)",
        ambar:      "var(--ambar)",
        mute:       "var(--mute)",
        rule:       "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        bg:         "var(--bg)",
        "bg-elev":  "var(--bg-elev)",
        fg:         "var(--fg)",
        "fg-soft":  "var(--fg-soft)",
        surface: {
          0: "var(--surface-0)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
          4: "var(--surface-4)",
        },
        text: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary:  "var(--text-tertiary)",
        },
        border: {
          subtle:  "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
          strong:  "var(--border-strong)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      borderRadius: {
        DEFAULT: "2px",
        none: "0px",
      },
      maxWidth: {
        site: "1280px",
      },
      fontSize: {
        display: "var(--fs-display)",
        h1:      "56px",
        h2:      "40px",
        h3:      "22px",
        h4:      "18px",
        "body-l": "17px",
        body:    "15px",
        meta:    "11px",
      },
      lineHeight: {
        display: "0.98",
        heading: "1.1",
        body:    "1.6",
        tight:   "1.25",
      },
      letterSpacing: {
        display:  "-0.035em",
        h1:       "-0.025em",
        h2:       "-0.02em",
        h3:       "-0.015em",
        eyebrow:  "0.16em",
        mono:     "0.06em",
      },
      boxShadow: {
        "card-hover": "0 12px 28px -16px rgba(12, 14, 18, 0.18)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
