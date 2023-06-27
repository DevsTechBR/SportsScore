/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      current: '#2e2e2e',
      white: '#fff',
    },
    fontFamily: {
      'sans': ['Outfit'],
    },
  },
  plugins: [],
}