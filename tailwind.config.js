/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-bg': '#1A1A1A',
        'dark-blue': '#193264'
      }
    },
  },
  plugins: [],
}

