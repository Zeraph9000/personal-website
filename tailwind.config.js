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
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          separator: '#18181b',
        },
        text: {
          primary: '#e4e4e7',
          muted: '#9ca3af',
        },
        border: {
          DEFAULT: '#27272a',
        },
        accent: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}
