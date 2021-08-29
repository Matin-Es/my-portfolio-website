module.exports = {
  mode: "jit",
  purge: { content: ["src/**/*.js", "src/**/*.jsx", "public/**/*.html"] },
  enabled: process.env.NODE_ENV === "production",
  darkMode: false, // or 'media' or 'class'
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

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
