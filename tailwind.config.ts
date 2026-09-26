import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest:  { DEFAULT: '#2d4a1e', light: '#3a5c26', dark: '#1e3210' },
        earth:   { DEFAULT: '#c8973a', light: '#e8b84b', dark: '#a07828' },
        cream:   { DEFAULT: '#f7f3ec', dark: '#ede6d9' },
        bark:    '#6b4f2f',
        sky:     '#e8f4f0',
      },
      fontFamily: {
        serif:  ['Georgia', 'Times New Roman', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/pool-eve.jpg')",
      },
    },
  },
  plugins: [],
}

export default config
