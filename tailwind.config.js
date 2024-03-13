/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  theme: {
    colors: {
      primary: "#ffffff",
      secondary: "#d86141",
      black: "#333333",
      white: "#f4f4f4",
      red: "#FF0000",
      gray: "#8F8F9D",
      mediumGray: "#E4E3E9",
      blue: "#315af9",
    },
    extend: {
      fontSize: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
