/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'garage':"url('./assets/bg-garage.jpg')"
      },
      fontFamily:{
        primary: ['Montserrat']
      },
      backdropBlur:{
        xs: '2px'
      }
    },
  },
  plugins: [],
}

