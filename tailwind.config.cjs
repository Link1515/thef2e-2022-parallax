/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.(svelte|ts|html)', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      backgroundColor: {
        yellow: '#FED641'
      },
      boxShadow: {
        solid: '10px 10px 0 #000'
      },
      backgroundImage: {
        'decoration-dots': 'url("/images/dots.png")'
      }
    },
  },
  plugins: [],
}
