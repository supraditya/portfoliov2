/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      figmaBlue: '#0C8CE9',
      white: '#FFFFFF',
    },
    fontFamily:{
      primary: ["Orbitron", "sans-serif"],
      secondary: ["Nunito Sans", "sans-serif"],
      writing: ["Shadows Into Light", "cursive"],
      code: ["Inconsolata", "monospace"],
    },
    extend: {},
  },
  plugins: [],
}
