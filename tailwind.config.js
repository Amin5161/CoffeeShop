/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1Ac",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        personal: "0px 3px 8px rgba(0, 0, 0, 0.24) ",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        vazir: "Vazir",
        vazirLight: "Vazir-Light",
        vazirMedium: "Vazir-Medium",
        vazirBold: "Vazir-Bold",
      },
      screens: {
        xs: "420px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "10px",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
