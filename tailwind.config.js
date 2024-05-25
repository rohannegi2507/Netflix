/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondaryColor': 'rgba(0,0,0,0.7)'
      },
      backgroundColor:{
        'secondaryColor': 'rgba(0,0,0,0.7)'
      },
      backgroundImage:{
        signin:"url('https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
      }
    },
  },
  plugins: [],
}