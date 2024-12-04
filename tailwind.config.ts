import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
    },
    // fontsize: {}
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          light: 'var(--primary-light)',
          'light-hover': 'var(--primary-light-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
        },
        grey: {
          DEFAULT: 'var(--grey)',
          light: 'var(--grey-light)',
        },
      },
      gridTemplateRows: {
        layout: '1fr auto',
      },
      boxShadow: {
        'card-25': '4px 4px 4px 0 rgba(var(--color-black) / 0.25)',
        'card-50': '4px 4px 4px 0 rgba(var(--color-black) / 0.50)',
      },
      // Use keyframes and animations for reusable "fade" and "slide" animations
      // keyframes:{},
      // animations: {},
    },
  },
  plugins: [],
};

export default config;
