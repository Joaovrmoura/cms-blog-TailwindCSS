/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",              
    "./src/**/*.{html,js}",    
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#1E90FF',
        'dark-gray': '#2D3748',
        'light-gray': '#EDF2F7',
        'neon-green': '#39FF14',
        'tech-purple': '#6F42C1',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["night"], // Tema "night" do DaisyUI
  },
}