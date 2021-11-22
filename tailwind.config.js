const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.blueGray,
        'true-gray': colors.trueGray,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        violet: colors.violet,
        fuschia: colors.fuchsia,
        pink: colors.pink,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
