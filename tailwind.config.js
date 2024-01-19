/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
        sans: ['"Inter"', 'sans-serif']
    },
    extend: {
        container: {
          center: true,
        },
        colors: {
            primary: {
                700: '#bf0d0d',
            },
            secondary: {
                600: '#1f2a37'
            },
        },
    },
  },
  plugins: [],
}