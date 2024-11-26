/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'product-pink': '#ebcbbe',
          'product-green': '#a1cd9d',
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }