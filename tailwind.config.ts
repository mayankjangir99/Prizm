import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        noir: "#050505",
        obsidian: "#0d0c0b",
        ivory: "#f8f3ea",
        porcelain: "#fffdf7",
        champagne: "#d8d4ca",
        antique: "#8c867c",
        smoke: "#171717"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      boxShadow: {
        gold: "0 24px 90px rgba(215, 180, 106, 0.16)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, rgba(248,243,234,.9), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
