/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "760px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },

      colors: {
        myCyan: "#2acfcf",
        myVoilet: "#3b3054",
        myRed: "#f46262",
        myAsh: "#bfbfbf",
      }
    },
  },
  plugins: [],
}

