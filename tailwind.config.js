// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 7 row grid
        '7': 'repeat(7, minmax(0, 1fr))'
      }
    }
  },
  variants: {
    tableLayout: ['responsive']
  },
  plugins: []
}
