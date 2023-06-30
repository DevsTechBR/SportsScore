/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chumbo: '#2e2e2e',
        white: '#fff',
        textColor: '#f6f6f6',
        cards: '#222',
      },
      fontFamily: {
        'sans': ['Outfit'],
      },
      boxShadow: {
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 8px 20px 0px rgba(0, 0, 0, 0.25) inset',
      }
    },

  },
  plugins: [],
}