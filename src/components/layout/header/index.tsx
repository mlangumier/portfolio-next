'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import LocalSwitcher from '@/components/locale-switcher/locale-switcher';
import NavigationLink from '@/components/navigation/navigation-link';
import { Link, Pathnames } from '@/i18n/routing';

import BurgerIcon from './burger-icon';

interface INavItem {
    label: string;
    href: Pathnames;
}

/**
 * The header uses the mobile navigation, at `md` it
 * switches to responsive desktop, and wide-screen at `lg`.
 */

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const t = useTranslations('Components.Header');

    const navItems: INavItem[] = [
        { label: t('navigation.about-me'), href: '/' },
        // { label: t('navigation.experiences'), href: '/experiences' },
        // { label: t('navigation.projects'), href: '/projects' },
    ];

    return (
        <header className="m-auto w-full max-w-screen-xl">
            <div className="flex flex-row justify-between px-8 py-12">
                {/* Title */}
                <Link
                    href="/"
                    className="flex flex-col items-baseline hover:text-inherit lg:flex-row"
                >
                    <div className="flex flex-row items-center gap-4">
                        <span className="hidden size-[18px] rotate-12 bg-primary sm:inline" />
                        <h1 className="text-large-25 font-bold lg:leading-[2rem]">
                            Mathieu Langumier
                        </h1>
                    </div>
                    <p className="text-[1.8rem] font-light uppercase">
                        <span className="hidden lg:inline lg:px-4">/</span>
                        {t('title')}
                    </p>
                </Link>

                {/* Responsive navigation*/}
                <div
                    className={clsx(
                        'absolute left-0 flex h-full w-full transform items-center justify-center bg-grey-light transition duration-500 ease-in-out md:static md:h-auto md:w-auto md:bg-inherit md:opacity-100',
                        isMenuOpen ? 'top-0 opacity-100' : 'top-[-100%] opacity-0'
                    )}
                >
                    <ul className="flex flex-col items-center gap-14 pb-[15rem] md:flex-row md:gap-10 md:pb-0">
                        {navItems.map((item: INavItem) => (
                            <NavigationLink
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </NavigationLink>
                        ))}

                        <LocalSwitcher handleCloseMobileMenu={() => setIsMenuOpen(false)} />
                    </ul>
                </div>

                {/* Mobile burger */}
                <div className="flex items-center justify-center pt-4 md:hidden">
                    <BurgerIcon
                        isOpen={isMenuOpen}
                        handleIsOpen={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
