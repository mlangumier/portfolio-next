'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import LocalSwitcher from '@/components/locale-switcher';
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

  useEffect(() => {
    // Disable scrolling on body when mobile menu opens
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleans up overflow on unmount component (prevent unexpected behaviour)
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems: INavItem[] = [
    { label: t('navigation.about-me'), href: '/' },
    // { label: t('navigation.projects'), href: '/projects' },
  ];

  return (
    <header className="fixed z-[100] mx-auto w-full bg-white shadow-lg">
      <div className="content flex min-h-[90px] flex-row items-center justify-between py-2">
        {/* Title */}
        <Link href="/" className="flex flex-col items-baseline">
          <div className="flex flex-row items-center gap-3">
            <span className="hidden size-[18px] rotate-12 bg-primary sm:inline" />
            <p className="title-h1 text-2xl font-bold text-primary-dark">{t('name')}</p>
          </div>
          <p className="text-lg font-light uppercase">{t('title')}</p>
        </Link>

        {/* Responsive navigation*/}
        <div
          className={clsx(
            'fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-grey-light transition-opacity duration-300 ease-in-out md:static md:h-auto md:w-auto md:bg-inherit md:opacity-100',
            isMenuOpen ? 'z-[100] opacity-100' : 'top-[-100%] opacity-0'
          )}
        >
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6 portrait:pb-[15rem]">
            {navItems.map((item: INavItem) => (
              <li key={item.href}>
                <NavigationLink
                  checkActive
                  className="font-sans text-2xl font-bold uppercase transition-all duration-200 ease-in-out hover:text-primary-light md:text-xl md:font-light"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavigationLink>
              </li>
            ))}
            <LocalSwitcher btnLabel={t('localeSwitcher.label')} handleCloseMobileMenu={() => setIsMenuOpen(false)} />
          </ul>
        </div>

        {/* Mobile burger */}
        <div className="z-[100] pt-2 md:hidden">
          <BurgerIcon
            btnLabel={t('navigation.btnBurger')}
            isOpen={isMenuOpen}
            handleIsOpen={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
