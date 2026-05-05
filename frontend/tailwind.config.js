/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3fad28",
        primaryDark: "#2e8b1d",
        gold: "#e68d15",
        "gold-light": "#f7a941",
        charcoal: "#000000",
        cream: "#FAF9F6",
        sage: "#7ecb6e",
        "primary-light": "#4ec433",
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
