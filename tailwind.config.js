/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        abryl: ['"Abril Fatface"']
      },
      height: {
        header: '10vh',
        section: '90vh'
      },
      lineHeight: {
        20: '100px'
      }
    }
  },
  plugins: []
}
