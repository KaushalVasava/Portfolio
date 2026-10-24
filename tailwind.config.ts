import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101114",
        "surface-canvas": "#101114",
        "card-surface": "#191B20",
        "surface-dim": "#121316",
        "surface-container-lowest": "#0D0E11",
        "surface-container-low": "#1B1B1F",
        "surface-container": "#1F1F23",
        "surface-container-high": "#292A2D",
        "surface-container-highest": "#343538",
        "surface-bright": "#38393C",

        "primary-text": "#F5F5F5",
        "on-background": "#F5F5F5",
        "on-surface": "#E3E2E6",
        "secondary-text": "#A3A7B0",
        "on-surface-variant": "#A3A7B0",
        secondary: "#C3C6D0",

        "accent-lime": "#C7F36B",
        "primary-container": "#C7F36B",
        "on-primary-container": "#141F00",
        "primary-fixed": "#C7F36B",
        "primary-fixed-dim": "#ABD551",

        "subtle-border": "#2C2F36",
        "outline-variant": "#2C2F36",
        outline: "#8E937F",
      },
      fontFamily: {
        display: ["var(--font-geist)", "Geist", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "3rem",
        "margin-mobile": "1.25rem",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "pulse-subtle": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
