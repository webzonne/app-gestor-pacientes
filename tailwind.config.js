/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'botoncolor': '#3eaf7c',
        'borderList': '#5BBDF4',
        'botonEdit':'#29778F',
        'botonEliminar':'#CF3636',
        'bgLayout':'#214E77'
      },
    },
  },
  plugins: [],
}
