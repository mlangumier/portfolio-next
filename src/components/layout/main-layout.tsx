import React from 'react';

import Footer from './footer';
import Header from './header';

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div className="flex min-h-svh flex-col">
            <Header />

            <main className="flex grow flex-col items-center justify-center">{children}</main>

            <Footer />
        </div>
    );
};

export default MainLayout;
