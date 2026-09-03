import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F7FB",
        surface: "#FFFFFF",
        ink: "#0B1F3A",
        navy: {
          DEFAULT: "#123056",
          deep: "#0A1A30",
        },
        accent: {
          DEFAULT: "#4A7FBF",
          hover: "#3A6AAB",
          soft: "#E6EEF8",
        },
        text: {
          primary: "#0B1F3A",
          muted: "#5C6B80",
        },
        line: "#D7E1EE",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-figtree)", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        btn: "9999px",
      },
      boxShadow: {
        glow: "0 18px 40px rgba(74, 127, 191, 0.18)",
        card: "0 12px 40px rgba(11, 31, 58, 0.06)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        pageIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        washDrift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(3%, 4%, 0) scale(1.06)" },
        },
        markGrow: {
          from: { backgroundSize: "0% 2px" },
          to: { backgroundSize: "100% 2px" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 400ms ease-out",
        pageIn: "pageIn 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeUp: "fadeUp 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
        washDrift: "washDrift 18s ease-in-out infinite",
        markGrow: "markGrow 700ms 650ms ease forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
