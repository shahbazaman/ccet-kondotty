import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a3a6b",
          light: "#2a5298",
          dark: "#0f2240",
        },
        accent: {
          DEFAULT: "#f5a623",
          light: "#fbbf24",
          dark: "#d97706",
        },
      },
      fontFamily: {
        heading: ["Georgia", "serif"],
        body: ["'Segoe UI'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;