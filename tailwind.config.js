/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        'dark-gray': '#131313',
        'cyber-red': {
          DEFAULT: '#FF0033',
          50: '#FFEBEE',
          100: '#FFCCD2',
          200: '#FF99A6',
          300: '#FF6680',
          400: '#FF3359',
          500: '#FF0033',
          600: '#CC0029',
          700: '#99001F',
          800: '#660015',
          900: '#33000A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 0, 51, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 0, 51, 0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(255, 0, 51, 0.5)',
        'red-glow-sm': '0 0 5px rgba(255, 0, 51, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};