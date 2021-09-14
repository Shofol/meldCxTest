module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'deep-org': '#D76845',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
