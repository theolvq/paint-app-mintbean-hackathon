module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGreen: '17BEBB',
        raisinBlack: '2E282A',
        rose: 'FAE1DF',
        fuscia: 'C04ABC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
