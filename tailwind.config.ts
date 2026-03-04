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
        background: "#050816",
        foreground: "#f9fafb",
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#f9fafb"
        },
        secondary: {
          DEFAULT: "#22c55e",
          foreground: "#022c22"
        },
        accent: {
          DEFAULT: "#06b6d4",
          foreground: "#0f172a"
        },
        muted: "#1f2937",
        border: "#1f2937"
      }
    }
  },
  plugins: []
};

export default config;

