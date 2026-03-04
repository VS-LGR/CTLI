import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/ui/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#1e293b",
        primary: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#0f766e",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#0891b2",
          foreground: "#ffffff"
        },
        muted: "#f1f5f9",
        border: "#e2e8f0"
      }
    }
  },
  plugins: []
};

export default config;

