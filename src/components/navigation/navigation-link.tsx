'use client';

import clsx from 'clsx';
import React, { ComponentProps } from 'react';

import { Link, usePathname } from '@/i18n/routing';

interface Props extends ComponentProps<typeof Link> {
  checkActive?: boolean;
}

const NavigationLink: React.FC<Props> = ({ href, className, checkActive = false, ...rest }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      aria-current={isActive && 'page'}
      className={clsx('', className, checkActive && isActive && 'text-primary')}
      href={href}
      {...rest}
    />
  );
};

export default NavigationLink;
