/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gravitas: ['"Gravitas One"', 'serif'],
      },
    },
  },
  plugins: [],
}