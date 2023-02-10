/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '0px'
      },
      fontFamily: {

      },
      backgroundImage: {

      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // "primary": "#2F7A78",

          // "secondary": "#41AFA9",

          // "accent": "#DFF2F1",

          // "neutral": "#0E0E0E",

          // "base-100": "#17252A",

          // "info": "#FEFFFF",

          // "success": "#187C54",

          // "warning": "#E7BC0D",

          // "error": "#FB1820",

          // "fuerte": "#17252A",


        },
      },
    ],
  },
  plugins: [require("daisyui")],
};