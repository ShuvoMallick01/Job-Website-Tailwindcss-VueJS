/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#005271",
        primaryDark: "#07406f",
        secondary: "#048785",
        secondaryDark: "#017771",
      },
    },

    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
