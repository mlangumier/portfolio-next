import '@/styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';

import { ILocale, routing } from '@/i18n/routing';
import { LayoutProps } from '@/utils/types';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export function metadata(): Metadata {
  return {
    title: {
      template: '%s | Mathieu Langumier',
      default: 'Portfolio | Mathieu Langumier',
    },
    description: 'Portfolio - Next.js 15, TypeScript & TailwindCSS.',
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Ensures valid incoming `locale`
  if (!routing.locales.includes(locale as ILocale)) {
    notFound();
  }

  // Provides all messages to the client side for easier starting point (adapt later)
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSans.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics mode="production" />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
