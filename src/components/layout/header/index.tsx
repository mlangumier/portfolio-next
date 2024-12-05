'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import LocalSwitcher from '@/components/locale-switcher';
import NavigationLink from '@/components/links/navigation-link';
import { Link } from '@/i18n/routing';
import { INavRouteItem } from '@/utils/types';

import BurgerIcon from './burger-icon';

/**
 * The header uses the mobile navigation, at `md` it
 * switches to responsive desktop, and wide-screen at `lg`.
 */
interface Props {
  navItems: INavRouteItem[];
}
const Header: React.FC<Props> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const tHeader = useTranslations('Layout.Header');

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

  return (
    <header className="fixed z-[100] mx-auto w-full bg-white shadow-lg">
      <div className="content flex min-h-[90px] flex-row items-center justify-between py-2">
        {/* Title */}
        <Link href="/" className="flex flex-col items-baseline">
          <div className="flex flex-row items-center gap-3">
            <span className="hidden size-[18px] rotate-12 bg-primary sm:inline" />
            {/* TODO: text-primary-dark */}
            <p className="title-h1 text-2xl font-bold text-primary">{tHeader('title')}</p>
          </div>
        </Link>

        {/* Responsive navigation*/}
        <div
          className={clsx(
            'fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-grey-light transition-opacity duration-300 ease-in-out md:static md:h-auto md:w-auto md:bg-inherit md:opacity-100',
            isMenuOpen ? 'z-[100] opacity-100' : 'top-[-100%] opacity-0'
          )}
        >
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6 portrait:pb-[15rem]">
            {navItems.map((item: INavRouteItem) => (
              <li key={item.pathname}>
                <NavigationLink
                  showActive
                  // TODO: rework "hover:text-primary-dark"
                  className="text-2xl font-bold uppercase transition-all duration-200 ease-in-out hover:text-primary md:text-xl md:font-light"
                  href={item.pathname}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavigationLink>
              </li>
            ))}
            <LocalSwitcher handleCloseMobileMenu={() => setIsMenuOpen(false)} />
          </ul>
        </div>

        {/* Mobile burger */}
        <div className="z-[100] pt-2 md:hidden">
          <BurgerIcon isOpen={isMenuOpen} handleIsOpen={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
