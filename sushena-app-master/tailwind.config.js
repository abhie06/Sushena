/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xs": "345px",
        "2xs": "450px",
        xs: "560px",
        "7xl": "1900px",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          pink: {
            medium: "#FFB3BF",
            light: "#FFE1E5",
          },
        },
        secondary: {
          medium: "#6D7D93",
        },
        neutral: {
          gray: {
            100: "#F5F5F5",
            300: "#9B9B9B",
            500: "#666666",
            600: "#505050",
            700: "#333333",
            800: "#242426",
          },
        },
        success: "#00B027",
        link: "#0251E9",
        alert: "#DF1A1A",
      },
      fontSize: {},
      maxWidth: {
        "10vw": "10vw",
        "20vw": "20vw",
        "80vw": "80vw",
        "90vw": "90vw",
      },
      boxShadow: {},
      minWidth: {},
      height: { "50vh": "50vh", "75vh": "75vh" },
      minHeight: { "50vh": "50vh", "75vh": "75vh" },
      maxHeight: {
        "25vh": "25vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "75vh": "75vh",
      },
      width: {},
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
