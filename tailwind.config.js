module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        'compact': '0px 8px 8px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        'lato': ['Lato', 'cursive'],
        'open': ['"Open Sans"']
      }
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
      contrast: ['hover'],
      zIndex: ['hover'],
      dropShadow: ['hover']
    },
  },
  plugins: [],
}
