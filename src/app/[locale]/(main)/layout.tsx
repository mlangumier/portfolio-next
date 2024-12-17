import React from 'react';

import MainLayout from '@/components/layout/main-layout';
import { LayoutProps } from '@/utils/types';

export default async function Layout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
