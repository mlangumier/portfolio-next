import '@/styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';

import { Locale, routing } from '@/i18n/routing';
import { LayoutProps, PageProps } from '@/utils/types';
import { Analytics } from '@vercel/analytics/react';

export async function generateMetadata({ params }: PageProps) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Global.Metadata' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
    const { locale } = await params;

    // Ensures valid incoming `locale`
    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    // Providing all messages to the client side for easier starting point (adapt later)
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
