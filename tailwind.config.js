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
      },
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'], // ตั้งชื่อฟอนต์ เช่น inria
      },
    },
  },
  plugins: [],
}