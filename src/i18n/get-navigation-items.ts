import { getTranslations } from 'next-intl/server';

import { INavRouteItem } from '../utils/types';

export const getNavigationRoutes = async () => {
  const t = await getTranslations('Common.Routes');

  const items: INavRouteItem[] = [
    { label: t('home'), pathname: '/' },
    { label: t('aboutMe'), pathname: '/about-me' },
    { label: t('projects'), pathname: '/projects' },
  ];

  return items;
};

// export const getProjectRoutes = async () => {};
