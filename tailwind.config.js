import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'polaris-site-width-wide': '935px',
      },
      animation: {
        fade: 'fadeOut 1.5s ease-out',
      },
      keyframes: {
        fadeOut: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      /**
       * These variables are used in the actual
       * instagram homepage.
       */
      colors: {
        'ig-separator': '#dbdbdb',
        'ig-separator-dark': '#363636',
        'ig-link': '#00376b',
        'ig-primary-button': '#0094f6',
        'ig-primary-button-hover': '#1877f2',
        'ig-secondary-text': '#737373',
        'ig-secondary-text-dark': '#a8a8a8',
        'cod-gray': {
          950: '#121212',
        },
      },
    },
  },
  plugins: [forms],
};
