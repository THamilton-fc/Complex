/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'neue': ['neue-haas-unica', 'sans-serif'],
      'times': ['Times New Roman'],
    },
    extend: {
      backgroundImage: {
        'pattern': 'url(https://images.complex.com/complex/image/upload/f_auto,q_auto/complex_edge-v3_lqcs5n.png)',
      }
    },
  },
  plugins: [],
}

