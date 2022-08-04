/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#50E18B',
        'second': '#F589BE',
        'third': '#F3E036'
      }
    },
    fontFamily: {
      sans: ['Noto Sans TC','Roboto'], 
      serif: ['Noto Serif TC','Times'],
      dela: ['Dela Gothic One']
    }
  }
}
