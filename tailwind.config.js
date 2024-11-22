/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      ...colors,
      figmaBlue: '#0C8CE9',
      white: '#FFFFFF',
      footerBlack: '#101010',
      black:'#000000',
      subtitleGray: '#686767',
    },
    fontFamily:{
      primary: ["Montserrat", "sans-serif"],
      secondary: ["Nunito Sans", "sans-serif"],
      writing: ["Shadows Into Light Two", "cursive"],
      code: ["Inconsolata", "monospace"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        commentExpandText:{
          '0%':{ width: '0',},
          '100%':{ width: '100%'},
        },
        commentExpandImageMargin: {
          '0%':{ marginRight: '0'},
          '100%':{ marginRight: '0.625rem'},
        },
        commentExpandBubblePadding:{
          '0%':{ padding: '0.25rem', width: '2.75rem', height: "2.75rem"},
          '100%':{ padding: '1.5rem', width: '24rem', height: "8rem"},
        },
        commentExpandBubblePaddingMobile:{
          '0%':{ padding: '0.25rem', width: '2.75rem', height: "2.75rem"},
          '100%':{ padding: '1.5rem', width: '21rem', height: "8rem"},
        }
      },
      animation:{
        'bounce-slow':'bounce 3s linear 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'comment-text-fade-in': 'commentExpandText 0.3s ease-in forwards',
        'comment-expand-image': 'commentExpandImageMargin 0.3s linear forwards',
        'comment-expand-bubble': 'commentExpandBubblePadding 0.3s ease-in forwards',
        'comment-expand-bubble-mobile': 'commentExpandBubblePaddingMobile 0.3s ease-in forwards'
      },
      animationDelay: {
        '2s': '2s', // Add a 2-second delay
      },
    },
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
