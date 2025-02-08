const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        truegray: { ...colors.trueGray, 850: '#1F1F1F' },
      },
      animation: {
        fade: 'fade 6s infinite',
        move: 'move 7s infinite',
      },
      keyframes: {
        fade: {
          '0%, 33.3%': {
            opacity: '0',
            transform: 'translateY(-15px)',
          },
          '35%, 66.6%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          '68.3%, 100%': {
            opacity: '0',
            transform: 'translateY(15px)',
          },
        },
        move: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-50px, 10px) scale(1.1)' },
          '66%': { transform: 'translate(10px, 5px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
