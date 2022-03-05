const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          10: "#161622",
        },
        orange: {
          10: "FBC390",
        },
        skin: {
          10: "#E7D6CF",
        },
        skyblue: {
          10: "#C5F1FE",
        },
        bone: {
          10: "EFF0F2",
        },
        cyan: colors.cyan,
        palette: {
          1: "#3A6344",
          2: "#291E0B",
          3: "#FFFFFF",
          4: "#F1EDEF",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        Lora: ["Lora", ...defaultTheme.fontFamily.sans],
        workSans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
