import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B1611",
        cream: "#F6F0E4",
        blue: "#2F5FE0",
        "blue-light": "#6E93FF",
        sage: "#6B8F71",
        clay: "#8A5A44",
        mute: "#8A7B6C",
        line: "#D8CBB8",
        "line-dark": "#3A3128",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        ticket: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
