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
      }
    }
  },
  plugins: []
};
