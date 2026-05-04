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
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8CC7A",
          dark: "#9A7830",
          muted: "#7A6030",
        },
        ink: {
          DEFAULT: "#080808",
          100: "#111111",
          200: "#181818",
          300: "#222222",
          400: "#2a2a2a",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.35em",
        wide2: "0.2em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        shimmer: "shimmer 4s linear infinite",
        scrollLine: "scrollLine 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
