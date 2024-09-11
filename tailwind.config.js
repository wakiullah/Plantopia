/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F9500",
        black: "#222222",
        light: "#777777",
      },
    },
  },
  plugins: [],
};
