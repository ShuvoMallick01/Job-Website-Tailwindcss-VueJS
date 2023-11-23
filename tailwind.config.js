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

      boxShadow: {
        small:
          "0px 4px 12px 0px rgba(31, 27, 45, 0.08), 0px 2px 2px -2px rgba(31, 27, 45, 0.08)",
        medium:
          "0px 4px 16px 0px rgba(31, 27, 45, 0.12), 0px 2px 8px -4px rgba(31, 27, 45, 0.12)",
        large:
          "0px 8px 16px 0px rgba(31, 27, 45, 0.16), 0px 4px 12px -6px rgba(31, 27, 45, 0.20)",
      },
    },

    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
