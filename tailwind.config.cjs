/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3F20FF',
        'second': '#F589BE',
      }
    },
    fontFamily: {
      sans: ['Noto Sans TC','Roboto'], 
      serif: ['Noto Serif TC','Times'],
      dela: ['Dela Gothic One']
    }
  }
}
