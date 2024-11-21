import React from 'react';

import Footer from './footer';
import Header from './header';

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="mt-[90px] flex flex-col items-center justify-center">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
