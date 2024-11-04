import '@/styles/globals.css';

import React from 'react';

export function generateMetadata() {
    return {
        title: 'Portfolio Mathieu Langumier',
        description:
            'A portfolio project with my resume and examples of professional and personnal projects I have worked on.',
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
