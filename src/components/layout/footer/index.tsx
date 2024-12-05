import { useTranslations } from 'next-intl';
import React from 'react';

import ExternalLink from '@/components/links/external-link';
import NavigationLink from '@/components/links/navigation-link';
import { socialsList } from '@/utils/socials';
import { INavRouteItem } from '@/utils/types';

import { CategoryBlock } from './category-block';

interface Props {
  navItems: INavRouteItem[];
}

const Footer: React.FC<Props> = ({ navItems }) => {
  const tFooter = useTranslations('Layout.Footer');
  const tFiles = useTranslations('Common.Files');

  return (
    <footer className="pt-8 sm:pb-6 md:pb-8 md:pt-12">
      <div className="container grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:grid-rows-1 sm:gap-y-0">
        <CategoryBlock title={tFooter('pages')}>
          {navItems.map((route, i) => (
            <li key={i}>
              <NavigationLink href={route.pathname}>{route.label}</NavigationLink>
            </li>
          ))}
        </CategoryBlock>

        <CategoryBlock title={tFooter('socials')}>
          {socialsList.map((link, i) => (
            <li key={i}>
              <ExternalLink href={link.url}>{link.label}</ExternalLink>
            </li>
          ))}
        </CategoryBlock>

        {/* <CategoryBlock title={tFooter('projects')} className="hidden">
          <li>(soon)</li>
        </CategoryBlock> */}

        <CategoryBlock title={tFooter('download')} className="sm:col-start-4">
          <li>
            <ExternalLink href="/CV_Developpeur_Frontend.pdf">{tFiles('resume')}</ExternalLink>
          </li>
        </CategoryBlock>
      </div>
    </footer>
  );
};

export default Footer;
