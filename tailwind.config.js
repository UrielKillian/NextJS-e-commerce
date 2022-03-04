const colors = require("tailwindcss/colors");
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
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
