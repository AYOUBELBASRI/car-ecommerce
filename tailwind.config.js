/** @type {import('tailwindcss').Config} */
module.exports = {
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