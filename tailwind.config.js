/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        birthday: {
          // Shift palette toward forest greens and clean whites
          // Keep the same keys to avoid changing classnames in components
          pink: "#22C55E", // primary leaf green
          sky: "#86EFAC", // light mint/leaf for headings
          lemon: "#A3E635", // lime accent for highlights
          grape: "#14532D", // deep forest green for contrast
          white: "#F9FAFB", // soft off-white background
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', "cursive"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
