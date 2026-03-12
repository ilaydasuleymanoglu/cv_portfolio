/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        600: '#4b5563',
        700: '#374151',
        900: '#111827',
      },
      navy: '#000080',
      'orange-vibrant': '#FF8C00',
      'brown-warm': '#8B7355',
      'brown-dark': '#6B5344',
      green: {
        100: '#dcfce7',
        800: '#166534',
      },
      red: {
        100: '#fee2e2',
        800: '#991b1b',
      },
    },
    extend: {},
  },
}

