import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nova Post brand
        "np-red": "#ED1C24",
        "np-red-dark": "#B91219",
        // Neutral system
        "ink": "#0A0A0A",
        "ink-soft": "#1A1A1A",
        "paper": "#FAFAFA",
        "paper-dim": "#F0F0F0",
        // Accents for AI theme
        "accent": "#0066FF",
        "accent-soft": "#E6F0FF",
        // Muted
        "muted": "#6B7280",
        "muted-soft": "#9CA3AF",
        "border-soft": "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};

export default config;
