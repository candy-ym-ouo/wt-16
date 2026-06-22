/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space': {
          900: '#05060f',
          800: '#0a0e1f',
          700: '#0f1530',
          600: '#1a2248',
          500: '#2a3566'
        },
        'star': {
          gold: '#ffd700',
          blue: '#8ec5ff',
          white: '#ffffff',
          pink: '#ffb3de'
        },
        'nebula': {
          purple: '#6b5bff',
          cyan: '#4ff0d9',
          orange: '#ff8a5b'
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'mono': ['Courier New', 'monospace']
      },
      animation: {
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'pulse-slow': 'pulse var(--hint-pulse-speed, 1.2s) ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow var(--hint-pulse-speed, 1.2s) ease-in-out infinite alternate'
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}
