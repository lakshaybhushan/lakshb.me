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
        'highlight-blue' : '#34E6F2',
        'box-gray' : '#1E1E1E',
        'holder-color' : '#444444',
        'pxorange': '#FF8139',
        'urlify-green': '#049379',
        'urlify-white': '#FFF6ED',
        'greeney-green': '#00F4D0',
        'greeney-blue': '#021C23',
        'resume-color': '#3FADA8',
      },
      fontFamily: {
        'Outfit': 'Outfit, sans-serif',
        'Bebas-Neue': 'Bebas Neue, sans-serif',
      },
    },
  },
  plugins: [],
}