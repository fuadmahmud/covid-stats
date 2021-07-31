const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', "sans-serif"],
    },
    textColor: {
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
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: {
        DEFAULT: "#855CF8",
      },
      dark: {
        DEFAULT: "#263238",
      },
      purple: {
        DEFAULT: "#E289F2",
        100: "#E289F2",
        200: "#513795",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
