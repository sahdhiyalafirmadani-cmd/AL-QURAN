import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#046a38", // main green from Alquran_4
        secondary: "#0a0a0a",
        gold: "#f1c40f",
        textDark: "#1a1a1a",
        textLight: "#777",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
