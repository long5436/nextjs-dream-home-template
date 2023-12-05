import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        primaryHover: 'rgba(var(--color-primary-hover), <alpha-value>)',
        footer: 'rgba(var(--color-footer), <alpha-value>)',
        textPrimary: 'rgba(var(--color-text-primary), <alpha-value>)',
        newPurple: 'rgba(var(--color-new-purple), <alpha-value>)',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        },
        screens: {
          // lg: '992px',
          // xl: '1140px',
          // '2xl': '1140px',
          // '2xl': '1520px',
          '2xl': '1490px',
        },
      },
      fontSize: {
        sm: '0.75rem',
      },
      animation: {
        menu: 'menu 0.5s ease forwards',
        'menu-close': 'menu-close 0.5s ease forwards',
        'overlay-in': 'overlay-in 0.5s ease-out forwards',
        'overlay-out': 'overlay-out 0.5s ease-out forwards',
        'icon-move': 'icon-move 0.3s linear',
        'image-mark': 'image-mark linear 5s infinite',
        rotate: 'rotate linear 15s infinite',
      },
      keyframes: {
        menu: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'menu-close': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'overlay-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'overlay-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'icon-move': {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },

          '49%': {
            transform: 'translateX(20px)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateX(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'image-mark': {
          '0%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
          '25%': {
            transform: 'translateY(-20px)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
          '75%': {
            transform: 'translateY(20px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
