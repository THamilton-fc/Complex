/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'stix': ['STIX Two Math', 'sans-serif'],
      'vogue': ['Vogue', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
      }
    },
  },
  plugins: [],
}

