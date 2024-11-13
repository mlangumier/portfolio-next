import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        fontFamily: {
            sans: ['"Excon"', ...defaultTheme.fontFamily.sans],
            serif: ['"Ranade"', ...defaultTheme.fontFamily.serif],
        },
        fontSize: {
            'small-10': ['1rem', '2rem'],
            small: ['1.4rem', '2rem'],
            base: ['1.6rem', '2rem'],
            medium: ['1.8rem', '2rem'],
            large: ['2rem', '2.5rem'],
            'large-22': ['2.2rem', '3rem'],
            'large-25': ['2.5rem', '3.5rem'],
            'large-30': ['3rem', '4rem'],
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
            boxShadow: {
                'bottom-right': '6px 6px 6px 0 rgba(var(--color-grey-dark) / 0.1)',
            },
            // Use keyframes and animations for reusable "fade" and "slide" animations
            // keyframes:{},
            // animations: {},
        },
    },
    plugins: [
        // Set the base font-size for the project, allows for more developer-friendly use of REM values.
        // If using the VSCode extension, change VSCode setting "tailwindCSS.rootFontSize" to "10"
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: '10px' },
            });
        }),
    ],
};

export default config;
