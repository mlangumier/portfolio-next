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
          DEFAULT: 'hsl(var(--primary))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
        },
        // grey: { ...colors.slate },
      },
      gridTemplateRows: {
        layout: '1fr auto',
      },
      boxShadow: {
        'bottom-right': '6px 6px 6px 0 rgba(var(--color-grey-dark) / 0.1)',
      },
      // Use keyframes and animations for reusable "fade" and "slide" animations
      // keyframes:{},
      // animations: {},
    },
  },
  plugins: [],
};

export default config;
