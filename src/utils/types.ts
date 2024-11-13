import React from 'react';

export interface PageProps {
  params: Promise<{ locale: string }>;
}

export interface LayoutProps extends PageProps {
  children: React.ReactNode;
}
