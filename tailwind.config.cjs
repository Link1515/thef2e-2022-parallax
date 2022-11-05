/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.(svelte|ts|html)', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      boxShadow: {
        solid: '10px 10px 0 #000'
      }
    },
  },
  plugins: [],
}
