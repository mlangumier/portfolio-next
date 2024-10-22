import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // fontFamily: {},
    fontSize: {
      "small-10": "1rem",
      small: "1.2rem",
      base: "1.4rem",
      medium: "1.6rem",
      large: "2rem",
      "large-22": "2.2rem",
      "large-25": "2.5rem",
      "large-30": "3rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          over: "rgb(var(--color-primary-over))",
          light: "rgb(var(--color-primary-light))",
          dark: "rgb(var(--color-primary-dark))",
          transparent: "rgb(var(--color-primary-transparent))",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          over: "rgb(var(--color-secondary-over))",
          dark: "rgb(var(--color-secondary-dark))",
          transparent: "rgb(var(--color-secondary-transparent))",
        },
        grey: {
          DEFAULT: "rgb(var(--color-grey))",
          light: "rgb(var(--color-grey-light))",
          dark: "rgb(var(--color-grey-dark))",
          black: "rgb(var(--color-grey-black))",
        },
        error: {
          DEFAULT: "rgb(var(--color-error))",
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning))",
        },
        success: {
          DEFAULT: "rgb(var(--color-success))",
        },
        info: {
          DEFAULT: "rgb(var(--color-info))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
