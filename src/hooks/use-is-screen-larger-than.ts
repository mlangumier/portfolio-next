import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import config from '../../tailwind.config';

/**
 * Checks if the screen size is larger than the selected breakpoint. Takes into account resizing the window.
 * @param width Minimum screen width we want to check, corresponds to Tailwind CSS breapoints
 * @returns A boolean that confirms if the screen width is larger than the breakpoint
 */
export const useIsScreenLargerThan = (width: 'sm' | 'md' | 'lg' | 'xl'): boolean => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const tailwindConfig = resolveConfig(config);
  const breakpoint = tailwindConfig.theme.screens[width];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth > Number(breakpoint.slice(0, -2));
};
