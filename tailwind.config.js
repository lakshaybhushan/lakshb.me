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
        'highlight-blue-2' : '#90f5fc',
        'box-gray' : '#1E1E1E',
        'holder-color' : '#444444',
      },
      fontFamily: {
        'Outfit': 'Outfit, sans-serif',
        'Bebas-Neue': 'Bebas Neue, sans-serif',
      },
      dropShadow: {
        'blue-3xl': '0 35px 35px rgba(152,192,200,0.2)',
      },
    },
  },
  plugins: [],
}