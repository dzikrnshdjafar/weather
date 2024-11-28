/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Poppins', 'sans-serif'], // Set font default ke Inter
    },
    colors: {
      'primary': '#171717',
      'secondary': '#6ee7b7',
      'sechov': '#10b981',
      'emerald' : '#d1fae5',
      'neutral' : '#262626',
      'slate': '#e2e8f0',
      'red': '#fca5a5',
      'redhov': '#f87171'
    },
    screens: {
      'hp': '300px',
    },
  },
  },
  plugins: [],
}
