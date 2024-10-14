/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./login/Signin.html",
    "./login/login.html",
    "./welcome-page.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue": "linear-gradient(to right, #0000FF, #ADD8E6)",
      },
    },
  },
  plugins: [],
};
