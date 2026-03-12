/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#000080',
        'orange-vibrant': '#FF8C00',
        'brown-warm': '#8B7355',
        'brown-dark': '#6B5344',
      },
    },
  },
  plugins: [],
}
