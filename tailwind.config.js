/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0e27',
          surface: '#0f1629',
          card: '#151b2e',
          border: '#1e2a47',
        },
        blue: {
          dark: '#1e3a5f',
          medium: '#2563eb',
          light: '#3b82f6',
          accent: '#60a5fa',
          glow: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.4)',
      },
    },
  },
  plugins: [],
}
