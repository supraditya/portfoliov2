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
  screens: {
    "max-2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    "max-xl": { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    "max-lg": { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    "max-md": { max: "767px" },
    // => @media (max-width: 767px) { ... }

    "max-sm": { max: "639px" },
    // => @media (max-width: 639px) { ... }

    "2xl": { min: "1536px" },
    // => @media (min-width: 1535px) { ... }

    xl: { min: "1280px" },
    // => @media (min-width: 1279px) { ... }

    lg: { min: "1024px" },
    // => @media (min-width: 1023px) { ... }

    md: { min: "768px" },
    // => @media (min-width: 767px) { ... }

    sm: { min: "640px" },
    // => @media (min-width: 639px) { ... }

    mobile: { min: "450px" },
    // => @media (min-width: 639px) { ... }
  },
  plugins: [],
}
