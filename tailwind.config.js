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
      },
      backgroundColor: {
        'primary-bg': '#1e1e1f',
      },
      boxShadow: {
        'custom': '-4px 8px 24px #00000020',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
      },
    },
  },
  plugins: [],
}

