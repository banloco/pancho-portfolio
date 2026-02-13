/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'orange-accent': '#FF8C00',
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
