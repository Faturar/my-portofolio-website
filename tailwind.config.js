/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.8rem',
    },
    colors: {
      'transparent': 'transparent',
      'primary': '#3C79F5',
      'primary-light': '#F5F9FF',
      'primary-hover': '#448AFF',
      'primary-active': '#87B4FF',
      'main': '#262626',
      'secondary': '#748090',
      'secondary-hover': '#A2AAB6',
      'secondary-active': '#D9D9D9',
      'white': '#ffffff',
    },
    extend: {
      animation: {
        wave: 'wave 2s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      }
    }
  },
  plugins: [],
}