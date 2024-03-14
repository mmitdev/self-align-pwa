/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        light : {
          primary : 'rgb(91 155 245)',
          bg : '#ffffff',
          text: '#000000',
        }
      }
    },
  },
  plugins: [],
}