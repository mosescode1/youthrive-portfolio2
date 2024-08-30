/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/accaro.png')",
        'second-patterm': "url('/public/facebook.png')",
        'about-pattern': "url('/public/aboutBackgroud.png')",

      }
    }
  },
  plugins: [],
}

