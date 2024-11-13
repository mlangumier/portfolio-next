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

    // Clean up overflow on unmount component (prevent unexpected behaviour)
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems: INavItem[] = [
    { label: t('navigation.about-me'), href: '/' },
    { label: t('navigation.experiences'), href: '/experiences' },
    // { label: t('navigation.projects'), href: '/projects' },
  ];

  return (
    <header className="fixed z-[100] mx-auto h-fit min-h-[8rem] w-full bg-white shadow-lg">
      <div className="mx-auto flex min-h-[8rem] max-w-screen-xl flex-row justify-between px-8 py-4 md:items-center">
        {/* Title */}
        <Link href="/" className="flex flex-col items-baseline hover:text-inherit lg:flex-row">
          <div className="flex flex-row items-center gap-4">
            <span className="hidden size-[18px] rotate-12 bg-primary sm:inline" />
            <p className="h1-like text-large-25 font-bold text-primary-dark lg:leading-[2rem]">{t('name')}</p>
          </div>
          <p className="text-[1.8rem] font-light uppercase">
            <span className="hidden lg:inline lg:px-4">/</span>
            {t('title')}
          </p>
        </Link>

        {/* Responsive navigation*/}
        <div
          className={clsx(
            'fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-grey-light transition-opacity duration-300 ease-in-out md:static md:h-auto md:w-auto md:bg-inherit md:opacity-100',
            isMenuOpen ? 'z-[100] opacity-100' : 'top-[-100%] opacity-0'
          )}
        >
          <ul className="flex flex-col items-center justify-center gap-14 md:flex-row md:gap-10 md:pb-0 portrait:pb-[15rem] landscape:gap-8 landscape:pb-0">
            {navItems.map((item: INavItem) => (
              <li key={item.href}>
                <NavigationLink
                  checkActive
                  className="font-sans text-large-25 font-bold uppercase transition-all duration-200 ease-in-out hover:text-primary-light md:text-large md:font-light"
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
        <div className="z-[100] flex items-center justify-center pt-4 md:hidden">
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
