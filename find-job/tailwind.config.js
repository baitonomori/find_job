/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: "#3FB84B",
      secondary: "#C9F4CD" ,
      white: "#FFFFFF", 
      black: "#000000",
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
 },
}
