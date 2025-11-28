/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "var(--color-primary-default)",
          lightText: "var(--color-primary-text)",
        },
        dark: {
          DEFAULT: "var(--color-primary-default)",
          lightText: "var(--color-primary-text)",
        },
      },
    },
  },

  plugins: [],
};
