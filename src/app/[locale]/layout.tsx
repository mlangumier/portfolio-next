import '@/styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';

import { Locale, routing } from '@/i18n/routing';
import { LayoutProps } from '@/utils/types';
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';

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
