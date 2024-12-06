import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
      screens: {
        lg: '1024px',
      },
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
        grey: {
          DEFAULT: 'var(--grey-text)',
          border: 'var(--grey-border)',
        },
      },
      gridTemplateRows: {
        layout: '1fr auto',
      },
      gridTemplateColumns: {
        'header-title-center': 'auto 1fr minmax(0, 2.5rem)',
        'header-title-start': 'auto 1fr',
      },
      boxShadow: {
        'card-25': '4px 4px 4px 0 rgba(var(--color-black) / 0.25)',
        'card-50': '4px 4px 4px 0 rgba(var(--color-black) / 0.50)',
      },
      backdropBlur: {
        xs: '2px',
      },
      // Use keyframes and animations for reusable "fade" and "slide" animations
      // keyframes:{},
      // animations: {},
    },
  },
  plugins: [],
};

export default config;
