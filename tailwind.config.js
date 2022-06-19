/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '435px',
      },
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
