// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'saffron': '#FF9933', // Top band of the flag
        'white': '#FFFFFF',   // Middle band of the flag
        'green-india': '#138808', // Bottom band of the flag
        'ashoka-blue': '#000080', // The color of the Ashoka Chakra
        'light-gray': '#F2F2F2', // A light background color
        'dark-gray': '#333333',  // Dark text or accents
      },
    },
  },
  plugins: [],
};