module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandbg: `#F3F3F3`,
      },
      spacing: {
        headingSpacing: "33rem",
     
      },
      maxWidth: {
        skillBarsWidth: "102px",
        testWidth:"100%"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
};
