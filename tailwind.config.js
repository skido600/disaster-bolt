/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./login/Signin.html", // This includes the signin.html file inside the login folder
    "./login.html", // This includes the login.html file outside the folder
    "./src/**/*.{html,js}", // This includes other HTML and JS files in the src directory
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
