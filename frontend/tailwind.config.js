module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        AppGreen: "#92CF58",
        AppDark: "#374A43",
        AppBack: "rgb(55, 74, 67, 0.5)",
        AppLiteBack: "rgb(146, 207, 88, 0.3)",
        AppGradiant:
          "linear-gradient(90deg, rgba(146, 207, 88, 1) 0%, rgba(55, 74, 67, 1) 100%)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
}
