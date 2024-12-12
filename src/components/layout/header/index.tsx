'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import NavigationLink from '@/components/links/navigation-link';
import LocalSwitcher from '@/components/locale-switcher';
import { useIsScreenLargerThan } from '@/hooks/use-is-screen-larger-than';
import { INavRouteItem } from '@/utils/types';

import BurgerIcon from './burger-icon';

interface Props {
  navItems: INavRouteItem[];
}

const Header: React.FC<Props> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const tHeader = useTranslations('Layout.Header');
  const isLargeScreen = useIsScreenLargerThan('md');

  const handleBurgerMenu = (state: 'open' | 'close') => {
    setIsMenuOpen(state === 'open');
  };

  const toggleBurgerMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Closes the mobile menu when increasing the browser's window size
  // -> 'overflow-hidden' would otherwise stay and prevent the user from navigation the page
  useEffect(() => {
    if (isLargeScreen) {
      setIsMenuOpen(false);
    }
  }, [isLargeScreen]);

  // Disables scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed z-40 w-full bg-background">
      <div className="container relative flex h-20 flex-row items-center justify-between">
        {/* Title */}
        <div className="grid w-full grid-cols-header-title-center items-center gap-3 md:w-fit md:grid-cols-header-title-start">
          <div id="website-name-square" className="hidden size-6 rotate-[15deg] bg-accent md:inline-block" />
          <BurgerIcon isOpen={isMenuOpen} handleIsOpen={toggleBurgerMenu} className="md:hidden" />

          <NavigationLink href="/" onClick={() => handleBurgerMenu('close')}>
            <p className="text-nowrap text-center text-2xl font-bold text-primary md:text-wrap md:text-start">
              {tHeader('title')}
            </p>
          </NavigationLink>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:block">
          <ul className="flex flex-row gap-6">
            {navItems.map((item: INavRouteItem, i) => (
              <li key={i}>
                <NavigationLink href={item.pathname} showActive className="nav nav-header">
                  {item.label}
                </NavigationLink>
              </li>
            ))}
            <LocalSwitcher />
          </ul>
        </div>

        {/* Navigation - Mobile */}
        <div
          className={clsx(
            'fixed inset-0 top-20 z-40 flex flex-row md:hidden',
            'transition-all duration-500',
            isMenuOpen ? 'visible left-0' : 'invisible left-[-100%]'
          )}
        >
          <div className="flex h-full w-full min-w-fit max-w-screen-sm flex-col gap-4 bg-background px-6">
            <div className="mt-4">
              <p className="font-light uppercase text-foreground-muted">{tHeader('pages')}</p>
              <ul className="flex h-full flex-col">
                {navItems.map((item: INavRouteItem, i) => (
                  <li key={i} className="flex border-b border-grey-border last-of-type:border-none">
                    <NavigationLink
                      href={item.pathname}
                      showActive
                      className="nav nav-mobile w-full px-4 py-4"
                      onClick={() => handleBurgerMenu('close')}
                    >
                      {item.label}
                    </NavigationLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-light uppercase text-foreground-muted">{tHeader('switchLanguage')}</p>
              <ul className="flex h-full flex-col">
                <li className="mt-2 px-4">
                  <LocalSwitcher handleCloseMobileMenu={() => handleBurgerMenu('close')} />
                </li>
              </ul>
            </div>
          </div>

          <div
            id="backdrop"
            className={clsx(
              'backdrop w-full',
              'transition-all delay-100 duration-500',
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            )}
            onClick={() => handleBurgerMenu('close')}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
