/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  fontFamily: {
      yukita: ['YUKITA', 'sans-serif'],
      sfpro: ['SFPROTEXT', 'sans-serif'],
      gilroy: ['GILROY', 'sans-serif'],
      gilroysemibold: ['GILROYSEMIBOLD', 'sans-serif'],
    },
    colors: {
      'primary': '#F5F5F7',
      'secondary': '#3E3E3E',
      'green': '#716A4E'
    },},
  },
  plugins: [],
}
