import React from 'react';

import { getNavigationRoutes } from '@/i18n/get-navigation-items';

import Footer from './footer';
import Header from './header';

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = async ({ children }) => {
  const navItems = await getNavigationRoutes();

  return (
    <>
      <Header navItems={navItems} />

      <main className="pt-20">{children}</main>

      <Footer navItems={navItems} />
    </>
  );
};

export default MainLayout;
