// /** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");

// module.exports = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['"DM Sans"', "sans-serif"],
//       },
//     },
//   },
//   plugins: [
//     plugin(function ({ addComponents }) {
//       addComponents({
//         ".heading-h2": {
//           fontSize: "24px",
//           lineHeight: "25px",
//           fontWeight: "700",
//           fontFamily: '"DM Sans", sans-serif',
//         },
//         ".heading-h3": {
//           fontSize: "18px",
//           lineHeight: "25px",
//           fontWeight: "700",
//           fontFamily: '"DM Sans", sans-serif',
//         },
//         ".heading-h4": {
//           fontSize: "12px",
//           lineHeight: "16px",
//           fontWeight: "700",
//           fontFamily: '"DM Sans", sans-serif',
//         },
//         ".text-p": {
//           fontSize: "12px",
//           lineHeight: "16px",
//           fontWeight: "700",
//           fontFamily: '"DM Sans", sans-serif',
//         },
//       });
//     }),
//   ],
// };

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { transform } = require("typescript");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: { "loop-scroll": "loop-scroll 50s linear infinite" },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }, 
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".heading-h2": {
          fontSize: "24px",
          lineHeight: "25px",
          fontWeight: "700",
          fontFamily: '"DM Sans", sans-serif',
        },
        ".heading-h3": {
          fontSize: "18px",
          lineHeight: "25px",
          fontWeight: "700",
          fontFamily: '"DM Sans", sans-serif',
        },
        ".heading-h4": {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: "700",
          fontFamily: '"DM Sans", sans-serif',
        },
        ".text-p": {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: "700",
          fontFamily: '"DM Sans", sans-serif',
        },
      });
    }),
  ],
};
