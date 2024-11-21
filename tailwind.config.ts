import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Excon"', ...defaultTheme.fontFamily.sans],
      serif: ['"Ranade"', ...defaultTheme.fontFamily.serif],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          light: 'rgb(var(--color-primary-light))',
          dark: 'rgb(var(--color-primary-dark))',
          over: 'rgb(var(--color-primary-over))',
          transparent: 'rgba(var(--color-primary-transparent) / 0.2)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          light: 'rgb(var(--color-secondary-light))',
          dark: 'rgb(var(--color-secondary-dark))',
          over: 'rgb(var(--color-secondary-dark))',
          transparent: 'rgb(var(--color-secondary-transparent) / 0.5)',
        },
        grey: {
          DEFAULT: 'rgb(var(--color-grey))',
          light: 'rgb(var(--color-grey-light))',
          neutral: 'rgb(var(--color-grey-neutral))',
          dark: 'rgb(var(--color-grey-dark))',
          black: 'rgb(var(--color-grey-black))',
        },
        error: {
          DEFAULT: 'rgb(var(--color-error))',
        },
        warning: {
          DEFAULT: 'rgb(var(--color-warning))',
        },
        success: {
          DEFAULT: 'rgb(var(--color-success))',
        },
        info: {
          DEFAULT: 'rgb(var(--color-info))',
        },
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
  // plugins: [],
};

export default config;
