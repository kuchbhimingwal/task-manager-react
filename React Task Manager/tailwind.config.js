/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        TBlue: '#3254C1',
        TBlueLight: '#D5DDFF',
      }
    },
  },
  plugins: [],
}

