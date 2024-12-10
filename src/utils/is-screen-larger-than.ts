import resolveConfig from 'tailwindcss/resolveConfig';

import config from '../../tailwind.config';

/**
 * Checks if the screen size is larger than the selected breakpoint
 * @param width The size we're checking, corresponds to Tailwind CSS breakpoints
 * @returns A boolean confirms if the screen is larger than the breakpoint
 */
export const isScreenLargerThan = (width: 'sm' | 'md' | 'lg' | 'xl'): boolean => {
  const tailwindConfig = resolveConfig(config);
  const breakpoint = tailwindConfig.theme.screens[width];

  return window.matchMedia(`(min-width: ${breakpoint})`).matches;
};
