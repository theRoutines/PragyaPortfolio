/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-dune': '#E2C799',
        'pine-teal': '#0F3D3E',
        'pale-oak': '#F5EFE6',
        'dark-teal': '#082C2D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
