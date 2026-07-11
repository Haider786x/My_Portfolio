/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0c0c0c',
        surface: '#161616',
        'surface-2': '#1e1e1e',
        'surface-3': '#252525',
        accent: '#d4a853',
        'accent-dim': '#b08940',
        border: '#262626',
        'border-light': '#333333',
        text: '#f0ede8',
        'text-muted': '#888580',
        'text-subtle': '#555250',

        // Light mode
        'light-bg': '#fafaf8',
        'light-surface': '#f2f0eb',
        'light-surface-2': '#e8e5de',
        'light-border': '#d4d0c8',
        'light-text': '#0f0e0c',
        'light-text-muted': '#6b6762',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      maxWidth: {
        content: '56rem',
        wide: '72rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
