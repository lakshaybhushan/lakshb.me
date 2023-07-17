/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-black' : '#111111',
        'lakshay-blue' : '#C4DBE0',
        'highlight-blue' : '#41D6E1',
      },
      fontFamily: {
        'Outfit': 'Outfit, sans-serif',
        'Bebas-Neue': 'Bebas Neue, sans-serif',
      },
    },
  },
  plugins: [],
}