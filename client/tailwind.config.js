import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        'max-2xl': { max: '1399.98px' },

        xl: '1280px',
        'max-xl': { max: '1199.98px' },

        lg: '1024px',
        'max-lg': { max: '991.98px' },

        md: '768px',
        'max-md': { max: '767.98px' },

        sm: '640px',
        'max-sm': { max: '575.98px' }
      },
      colors: {
        'body-color': 'hsl(258, 60%, 98%)',
        'container-color': '#fff',
        'frist-color': 'hsl(353, 100%, 65%)',
        'text-color': 'hsl(244, 16%, 43%)',
        'title-color': 'hsl(244, 24%, 26%)'
      },
      keyframes: {
        buttonHover: {
          '50%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' }
        },
        aniMouse: {
          '0%': { top: '29%' },
          '15%': { top: '50%' },
          '50%': { top: '50%' },
          '100%': { top: '29%' }
        }
      },
      animation: {
        buttonHover: 'buttonHover 0.2s ease-in-out',
        aniMouse: 'aniMouse 2s linear infinite'
      }
    }
  },
  plugins: []
};
