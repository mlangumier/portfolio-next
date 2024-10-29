import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header></header>
            {children}
            <footer></footer>
        </>
    );
}
