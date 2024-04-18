/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['"Roboto"', 'sans-serif'],
      'serif': ['"Roboto"', 'serif'],
      'mono': ['"Roboto"', 'monospace'],
    },
    extend: {
      colors: {
        'primary': '#e3242b',
        'secondary': '#0a3d91',
        'titanium-white': '#f3f4f7',
        'accent': '#0a3d91'
      },
    },
  },
  plugins: [],
}
