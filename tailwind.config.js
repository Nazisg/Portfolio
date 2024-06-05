/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffdb70',
        'head-color':'fafafa',
        'p-color':'d6d6d6'
      },
      backgroundColor: {
        'primary-bg': '#1e1e1f',
      }
    },
  },
  plugins: [],
}

