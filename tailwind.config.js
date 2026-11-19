/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Syncopate', 'Space Grotesk', 'sans-serif']
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
