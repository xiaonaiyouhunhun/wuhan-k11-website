/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        k11: {
          primary: '#C4A484',
          secondary: '#2C2C2C',
          accent: '#D4AF37',
          light: '#F5F5F5',
          dark: '#1A1A1A'
        }
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
