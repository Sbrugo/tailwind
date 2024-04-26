/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#22181c",
        "custom-light-dark": "#A89B8C",
        "custom-beige": "#EDF0DA",
        "custom-primary": "#db162f",
      },
    },
  },
  plugins: [],
};
