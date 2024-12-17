import React, { ComponentProps } from 'react';

import { Link } from '@/i18n/routing';
import { cn } from '@/utils/tailwindcss';

/**
 * Link component for internal routes navigation set in `src/i18n/routing.ts`
 */
const NavigationLink: React.FC<ComponentProps<typeof Link>> = ({ className, ...rest }) => {
  return <Link className={cn('btn btn-primary', className)} {...rest} />;
};

export default NavigationLink;
