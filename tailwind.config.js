/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005271",
        primaryDark: "#07406f",
        primaryLight: "#9FBAC6",
        secondary: "#048785",
        secondaryDark: "#017771",
        secondaryLight: "#9FCFCE",
        bgPrimary: "#F6EBE6",
      },
    },

    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
