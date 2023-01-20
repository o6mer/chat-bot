/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#e4eaed",
        third: "#b7bdc4",

        darkPrimary: "#121212",
        darkSecondary: "#43484d",
        darkThird: "#606870",
      },
    },
  },
  plugins: [],
};
