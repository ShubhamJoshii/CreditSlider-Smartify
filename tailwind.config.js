/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '650px',
      'custome850':"850px",
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}

