module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
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
        testWidth: "100%",
      },
      minWidth: {
        skillBarsWidth: "60px",
        testWidth: "100%",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: [
        "responsive",
        "motion-safe",
        "motion-reduce",
        "active",
      ],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
