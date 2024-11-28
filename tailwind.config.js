/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      transitionDuration: {
        600 : '600ms'
      }
    },
  },
  plugins: [],
}