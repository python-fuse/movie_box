/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { backgroundColor: {
      'black': '#121212',             // Deep black background
    },
    textColor: {
      'white': '#FFFFFF',             // White text for readability
      'red': '#E50914',               // Vibrant red (Primary Accent Color)
      'gold': '#FFD700',              // Gold/yellow (Secondary Accent Color)
    },
  },
  fontFamily: {
    'sans': ['Roboto', 'sans-serif'], // Body text font
    'cinzel': ['Cinzel', 'sans-serif'],// Header titles and button font
  },
  },
  plugins: [],
}

