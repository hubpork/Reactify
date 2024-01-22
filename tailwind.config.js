/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}",
    "index.html",
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
              50: '#fff1f1',
              100: '#F9E7E7',
              200: '#ffc5c5',
              300: '#ff9d9d',
              400: '#ff6565',
              500: '#ff3434',
              600: '#CC3D3D',
              700: '#bf0d0d',
              800: '#a50f0f',
              900: '#730808',
              950: '#4a0505'
          },
          secondary: {
              600: '#1f2a37'
          },
      },
    },
  },
  plugins: [],
}