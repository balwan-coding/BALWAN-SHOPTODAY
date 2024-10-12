/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        "spin-s": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
