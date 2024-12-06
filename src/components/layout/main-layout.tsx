import React from 'react';

import Footer from './footer';
import Header from './header';
import { getNavigationRoutes } from '@/i18n/get-navigation-items';

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = async ({ children }) => {
  const navItems = await getNavigationRoutes();

  return (
    <>
      <Header navItems={navItems} />

      {/* <main className="hidden pt-20">{children}</main>
      <div></div> */}
      <main className="flex flex-col items-center justify-center bg-primary pt-20">{children}</main>

      <Footer navItems={navItems} />
    </>
  );
};

export default MainLayout;
