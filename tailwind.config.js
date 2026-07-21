/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        cream: {
          DEFAULT: "#FAF7F0",
          soft: "#F3EEE3",
        },
        ink: {
          DEFAULT: "#20241F",
          soft: "#5B594F",
        },
        accent: {
          DEFAULT: "#2C4A3E",
          light: "#3F6B58",
          soft: "#E4EBE6",
        },
        line: "#E4DFD1",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(32, 36, 31, 0.12)",
        card: "0 2px 12px -2px rgba(32, 36, 31, 0.08)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};