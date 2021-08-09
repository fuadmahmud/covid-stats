const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', "sans-serif"],
    },
    textColor: {
      white: "#FFFFFF",
      primary: "#855CF8",
      dark: "#263238",
      "purple-100": "#E289F2",
      "purple-200": "#513795",
    },
    color: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: {
        DEFAULT: "#855CF8",
        100: "#855CF8",
      },
      dark: {
        DEFAULT: "#263238",
        100: "#263238",
      },
      purple: {
        DEFAULT: "#E289F2",
        100: "#E289F2",
        200: "#C253B3",
        300: "#513795",
        400: "#855CF8",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
