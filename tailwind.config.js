/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        backgroundColor: "#18191B",
        primaryAccentColor: "#6565FF",
        secondaryAccentColor: "#FA00FF",
        primaryTextColor: "#FFFFFF",
        secondaryTextColor: "#9FA0A0",
        successColor: "#009F06",
        filterBackgroundColor: "hsl(220,6,10)",
        backgroundColorLottie: "#222222",
      },
    },
  },
  plugins: [],
};
