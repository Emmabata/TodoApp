/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue:'#072951',
        lightBlue:'#4393D840',
        },
    },
  },
  plugins: [],
}
