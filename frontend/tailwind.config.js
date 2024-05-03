/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'garage':"url('./assets/images/bg-garage.jpg')",
      'mountain': "url('./assets/images/mountain.jpg')"
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

