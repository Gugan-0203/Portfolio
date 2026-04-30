/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme surfaces
        canvas:  { DEFAULT: '#0f1117', light: '#f8f9fc' },
        panel:   { DEFAULT: '#161b27', light: '#ffffff' },
        surface: { DEFAULT: '#1e2436', light: '#f0f2f8' },
        card:    { DEFAULT: '#252d42', light: '#e8ebf5' },
        hover:   { DEFAULT: '#2e3650', light: '#dde1ee' },

        // Brand accent — professional indigo-orange
        accent:  {
          DEFAULT: '#6c8ef5',
          h:       '#839cf7',
          '2':     '#4f6de0',
          orange:  '#e87c4e',
          soft:    'rgba(108,142,245,0.12)',
        },

        // Semantics
        success: '#34d399',
        info:    '#60a5fa',
        violet:  '#a78bfa',
        warning: '#fbbf24',

        // Dark text
        ink:     { DEFAULT: '#e8eaf0', muted: '#8b92a9', dim: '#5c6380' },
        // Light text
        'ink-l': { DEFAULT: '#111827', muted: '#374151', dim: '#6b7280' },
      },
      fontFamily: {
        sans:    ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'brand-grad':  'linear-gradient(135deg, #6c8ef5, #4f6de0)',
        'brand-grad2': 'linear-gradient(135deg, rgba(108,142,245,0.1), rgba(79,109,224,0.05))',
        'orange-grad': 'linear-gradient(135deg, #e87c4e, #c96a3c)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      maxWidth: { chat: '760px' },
      width:    { sidebar: '260px' },
      animation: {
        'pulse-dot':   'pulseDot 2s infinite',
        'float':       'floatY 4s ease-in-out infinite',
        'spin-slow':   'spin 12s linear infinite',
        'fade-up':     'fadeSlideIn 0.5s ease both',
        'shimmer':     'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(52,211,153,0.5)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(52,211,153,0)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        fadeSlideIn: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
