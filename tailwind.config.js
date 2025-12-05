/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4ca',
          300: '#8fcea5',
          400: '#5cb079',
          500: '#38915a',
          600: '#2a7447',
          700: '#235c3a',
          800: '#1f4a31',
          900: '#1a3e29',
        },
        'trust-blue': {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9deff',
          300: '#7cc4ff',
          400: '#36a5ff',
          500: '#0c8aff',
          600: '#006ce8',
          700: '#0055d4',
          800: '#0647ac',
          900: '#0b3f87',
        },
        'warm-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        'handwritten': ['"Kalam"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(56, 145, 90, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(56, 145, 90, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

