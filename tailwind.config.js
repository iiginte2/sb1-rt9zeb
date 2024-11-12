/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef4e7',
          100: '#fde7cf',
          200: '#fbd09f',
          300: '#f8b46f',
          400: '#f5983f',
          500: '#ec7e13', // Our main brand color
          600: '#bd640f',
          700: '#8e4b0b',
          800: '#5f3208',
          900: '#2f1904',
        }
      }
    },
  },
  plugins: [],
};