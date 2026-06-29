/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#D4AF37',
          DEFAULT: '#D4AF37',
        },
        accent: {
          gold: '#C8A97E',
          DEFAULT: '#C8A97E',
        },
        light: {
          bg: '#F8F5F2',
          DEFAULT: '#F8F5F2',
        },
        dark: {
          bg: '#121212',
          secondary: '#1C1C1C',
          DEFAULT: '#121212',
        },
        text: {
          light: { primary: '#1C1C1C', secondary: '#4A4A4A' },
          dark: { primary: '#F8F5F2', secondary: '#B0B0B0' },
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '5rem' }],
        'h2': ['3rem', { lineHeight: '3.5rem' }],
        'h3': ['2.25rem', { lineHeight: '2.75rem' }],
        'h4': ['1.75rem', { lineHeight: '2.25rem' }],
        'h5': ['1.25rem', { lineHeight: '1.75rem' }],
        'h6': ['1rem', { lineHeight: '1.5rem' }],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #C8A97E 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1C1C1C 0%, #121212 100%)',
        'gradient-light': 'linear-gradient(135deg, #F8F5F2 0%, #FFFFFF 100%)',
      },
      animation: {
        'slow-zoom': 'slowZoom 15s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1440px',
        '2xl': '1600px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
