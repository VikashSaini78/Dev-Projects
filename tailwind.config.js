/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{

        "image":"url('/src/media/neature image.jpg')",
        "left":"url('/src/media/weather_images.jpg')"
    }
      
    },
  },
  plugins: [],
}

