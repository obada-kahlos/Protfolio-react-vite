/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#ff8700",
        firstDarkBgColor: "#2A3044",
        secondDarkBgColor: "#1C2135",
        error: "#d44040",
      },
    },
  },
  plugins: [],
};
