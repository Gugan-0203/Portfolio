/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables
        base:    'var(--bg-base)',
        panel:   'var(--bg-panel)',
        surface: 'var(--bg-surface)',
        card:    'var(--bg-card)',
        hover:   'var(--bg-hover)',
        border:  'var(--border)',

        // Brand accent
        accent: {
          DEFAULT: 'var(--accent)',
          h:       'var(--accent-hover)',
          '2':     '#4f6de0',
          orange:  'var(--accent-orange)',
          soft:    'var(--accent-soft)',
        },

        // Semantics
        success: '#34d399',
        info:    '#60a5fa',
        violet:  '#a78bfa',
        warning: '#fbbf24',

        // Typography
        ink: {
          DEFAULT: 'var(--text-primary)',
          muted:   'var(--text-secondary)',
          dim:     'var(--text-muted)',
        },
        // Legacy support (to be phased out or mapped)
        'ink-l': {
          DEFAULT: 'var(--text-primary)',
          muted:   'var(--text-secondary)',
          dim:     'var(--text-muted)',
        },
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
