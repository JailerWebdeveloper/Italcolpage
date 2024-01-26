/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f70",
        
"secondary": "#ffa",
        
"accent": "#ffffff",
        
"neutral": "#ffffff",
        
"base-100": "#ffffff",
        
"info": "#ffffff",
        
"success": "#00ffff",
        
"warning": "#ffffff",
        
"error": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}