import { setRequestLocale } from 'next-intl/server';
import React from 'react';

import MainLayout from '@/components/layout/main-layout';
import { Locale, routing } from '@/i18n/routing';
import { LayoutProps } from '@/utils/types';

// Next.js will build static pages within this layout (pages + locales)
export function generateStaticParams() {
    return routing.locales.map((locale: Locale) => ({ locale }));
}

export default async function Layout({ children, params }: LayoutProps) {
    const { locale } = await params;
    // Enable static rendering
    setRequestLocale(locale);

    return <MainLayout>{children}</MainLayout>;
}
