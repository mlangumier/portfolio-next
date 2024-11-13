import { setRequestLocale } from 'next-intl/server';
import React from 'react';

import { PageProps } from '@/utils/types';
import UnderConstructionView from '@/views/under-construction';

export default async function Projects({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return <UnderConstructionView />;
}
