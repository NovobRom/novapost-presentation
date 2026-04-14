import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Nova Post brand
        "np-red": "#ED1C24",
        "np-red-dark": "#B91219",
        // Pop accent — для критичних чисел
        "pop": "#FF3366",
        "pop-soft": "#FFE5EC",
        // AI accent — електричний синій
        "electric": "#0014FF",
        "electric-soft": "#E6E9FF",
        // Neutral system — теплий paper для editorial відчуття
        "ink": "#0A0A0A",
        "ink-soft": "#1A1A1A",
        "paper": "#F5F2EC",
        "paper-bright": "#FAFAF7",
        "paper-dim": "#EDE9DF",
        // Muted
        "muted": "#6B6560",
        "muted-soft": "#9C958D",
        "border-soft": "#D9D4C9",
        "border-dim": "#E8E3D9",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 12vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3rem, 9vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      animation: {
        "gradient-shift": "gradient-shift 15s ease infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
