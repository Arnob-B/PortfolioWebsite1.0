/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth:{
    "1":"1px",
    "0.5":"0.5px",
    "0.15":"0.15px"
    },
    extend: {
    },
  },
  plugins: [],
}