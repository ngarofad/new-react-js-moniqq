/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
  },


  plugins: [
    require('flowbite/plugin')
  ],
}
