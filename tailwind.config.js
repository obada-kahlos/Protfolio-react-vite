/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-color": "#ff8700",
        firstDarkBgColor: "#2A3044",
        secondDarkBgColor: "#1C2135",
        titleDarkColor: "#fff",
        paragraphDarkColor: "#cecece",
        sidebarLightBgColor: "#e6e6e6",
        whiteLightBgColor: "#fff",
        titleLightColor: "#333333",
        paragraphLightColor: "#666666",
        error: "#d44040",
      },
    },
  },
  plugins: [],
};
