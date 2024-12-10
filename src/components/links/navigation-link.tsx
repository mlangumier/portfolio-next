'use client';

import clsx from 'clsx';
import React, { ComponentProps } from 'react';

import { Link, usePathname } from '@/i18n/routing';

interface Props extends ComponentProps<typeof Link> {
  showActive?: boolean;
}

const NavigationLink: React.FC<Props> = ({ href, className, showActive = false, ...rest }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      aria-current={isActive && 'page'}
      className={clsx(className, showActive && isActive && 'nav-active')}
      href={href}
      {...rest}
    />
  );
};

export default NavigationLink;
