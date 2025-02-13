/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    '/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    '/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
    '/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
    '/content/**/*.{vue,js,jsx,mjs,ts,tsx}',
    '/composables/**/*.{js,ts,mjs}',
    'app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'sxvx-dark': 'rgba(43, 48, 53, 1)',
        'sxvx-light': 'rgba(242, 238, 230, 1)',
        'sxvx-dark-bg': 'rgba(33, 37, 41, 1)',
        'sxvx-light-bg': 'rgba(250,249,247, 1)',
        'muddy-waters': {
          50: '#f9f5f1',
          100: '#ece3d9',
          200: '#d8c6af',
          300: '#c4a585',
          400: '#b2865f',
          500: '#aa7656',
          600: '#965f49',
          700: '#7e4a3f',
          800: '#683e38',
          900: '#573430',
          950: '#301a18',
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
        'pos-200': '200% 200%',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '2000px',
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      keyFrames: {
        moveUp: {
          '0%': { opacity: 1, transform: 'translateX(0px) translateY(0px) scale(1)' },
          '25%': {
            opacity: 0,
            transform: 'translateX(10px) translateY(-10px) scale(0.9)',
          },
          '26%': {
            opacity: 0,
            transform: 'translateX(-10px) translateY(10px) scale(0.9)',
          },
          '55%': {
            opacity: 1,
            transform: 'translateX(0px) translateY(0px) scale(1)',
          },
        },
      },
      animation: {
        banana: 'moveUp 0.8s linear',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
