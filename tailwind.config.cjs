/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0F5F9",
        secondary: "#d3d8db",
        third: "#606870",

        darkPrimary: "#1E2022",
        darkSecondary: "#43484d",
        darkThird: "#606870",
      },
    },
  },
  plugins: [],
};
