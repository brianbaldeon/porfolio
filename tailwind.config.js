/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#34495e',
          light: '#3d5772',
          dark: '#2c3e50',
        },
        accent: {
          DEFAULT: '#1abc9c',
          light: '#48d1b4',
          dark: '#16a085',
        },
        cloud: '#ecf0f1',
        silver: '#cbd5e1',
        slate: {
          gray: '#7f8c8d',
          light: '#95a5a6',
          dark: '#5d6d7e',
        },
        premium: '#8e44ad',
        azure: {
          DEFAULT: '#3498db',
          light: '#5dade2',
          dark: '#2874a6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'glow-accent': '0 0 25px rgba(26, 188, 156, 0.45)',
        'glow-premium': '0 0 25px rgba(142, 68, 173, 0.35)',
        'glow-azure': '0 0 30px rgba(52, 152, 219, 0.45)',
        'glow-white': '0 0 35px rgba(255, 255, 255, 0.2)',
        'glow-silver': '0 0 25px rgba(203, 213, 225, 0.2)',
        soft: '0 8px 30px rgba(0, 0, 0, 0.12)',
        'soft-white': '0 8px 30px rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
