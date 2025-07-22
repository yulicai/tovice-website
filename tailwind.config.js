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
          'brand-primary': '#13606d',
          'brand-secondary': '#b4e0e0',
          'brand-light': '#e8f4f4',
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }