/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#B89A54",
        secondary: "#4A4A4A",
        primary: "#D4AF37",
        background: "#F5F5F5",
        error: "#D9534F",
        success: "#5CB85C",
        info: "#5BC0DE",
      },
    },
  },
  plugins: [],
};