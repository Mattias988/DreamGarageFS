/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'garage':"url('./assets/bg-garage.jpg')"
      }
    },
  },
  plugins: [],
}

