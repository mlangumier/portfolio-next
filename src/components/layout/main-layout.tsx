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

      <main className="mt-[90px] hidden">{children}</main>
      <div></div>
      {/* <main className="mt-[90px] flex flex-col items-center justify-center">{children}</main> */}

      <Footer navItems={navItems} />
    </>
  );
};

export default MainLayout;
