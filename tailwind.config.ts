import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0B0D14",
        surface: "#141625",
        ink: "#F4F3F8",
        "ink-muted": "#9896AC",
        "aurora-violet": "#8C7CFF",
        "aurora-teal": "#45D6C0",
        "aurora-rose": "#FF7FAE",
        line: "rgba(244,243,248,0.09)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
