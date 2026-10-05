/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#A6192E',
          'red-dark': '#871324',
          'red-vivid': '#C81D37',
          'red-light': '#FDF2F4',
          'red-50': '#FFF5F6',
          navy: '#0F2B5C',
          'navy-dark': '#091A38',
          'navy-light': '#F0F4FA',
          'navy-50': '#F4F7FB',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          subtle: '#F1F5F9',
          border: '#E2E8F0',
          dark: '#070A10',
          obsidian: '#080C14',
          'card-dark': '#0E1422',
          'border-dark': 'rgba(255, 255, 255, 0.08)',
        },
        charcoal: {
          DEFAULT: '#0A0E17',
          muted: '#475569',
          light: '#64748B',
          deep: '#030712',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'premium': '0 4px 20px -2px rgba(10, 14, 23, 0.05), 0 2px 6px -1px rgba(10, 14, 23, 0.02)',
        'premium-hover': '0 20px 40px -4px rgba(10, 14, 23, 0.08), 0 6px 16px -2px rgba(10, 14, 23, 0.04)',
        'elevated': '0 25px 50px -12px rgba(15, 43, 92, 0.12), 0 8px 24px -4px rgba(15, 43, 92, 0.06)',
        'glow-red': '0 0 35px -5px rgba(166, 25, 46, 0.35)',
        'glow-navy': '0 0 35px -5px rgba(15, 43, 92, 0.35)',
      },
      letterSpacing: {
        'tighter-editorial': '-0.04em',
        'tight-editorial': '-0.025em',
        'wide-editorial': '0.18em',
        'ultra-wide': '0.3em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
