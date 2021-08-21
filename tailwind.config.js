module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandbg: `#F3F3F3`,
      },
      spacing:{
        'headingSpacing': '36rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
