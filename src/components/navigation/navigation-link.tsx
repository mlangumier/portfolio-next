'use client';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

import { Link, usePathname } from '@/i18n/routing';

const NavigationLink: React.FC<ComponentProps<typeof Link>> = ({ href, className, ...rest }) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={clsx(
                'font-sans text-large-25 font-bold uppercase md:text-large md:font-light',
                className,
                isActive && 'text-primary'
            )}
            href={href}
            {...rest}
        />
    );
};

export default NavigationLink;
