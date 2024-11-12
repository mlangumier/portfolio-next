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

            <main className="mt-[8rem] flex grow flex-col items-center justify-center bg-grey-light px-8 py-12 md:px-12 md:py-16">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
