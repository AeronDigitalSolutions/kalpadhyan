/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nexa', 'Space Grotesk', 'Inter', 'sans-serif'],
        heading: ['Nexa', 'Syncopate', 'sans-serif'],
        nexa: ['Nexa', 'sans-serif'],
        mono: ['JetBrains Mono', 'Nexa', 'monospace'],
      },
      colors: {
        dark: {
          900: '#070708',
          800: '#0c0d0e',
          700: '#141518',
        }
      }
    },
  },
  plugins: [],
}
