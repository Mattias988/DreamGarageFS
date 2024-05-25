/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'garage':"url('./assets/images/bg-garage.jpg')",
      'mountain': "url('./assets/images/mountain.jpg')",
      'japanese': "url('./assets/images/jdmbackground.svg')"
      },
      fontFamily:{
        primary: ['Montserrat']
      },
      backdropBlur:{
        xs: '2px'
      },
      backgroundColor: {
        primary: '#131313',
        tertiary: '#2F2F2F',
        secondary: '#353535'
      },
    },
  },
  plugins: [],
}

