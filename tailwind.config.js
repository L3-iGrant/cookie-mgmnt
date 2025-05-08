/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Byrd", "sans-serif"],
        base: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
