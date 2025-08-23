/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        birthday: {
          pink: "#FF80B5",
          sky: "#38BDF8",
          lemon: "#FDE047",
          grape: "#A78BFA",
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
