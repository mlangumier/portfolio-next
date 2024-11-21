import Image from 'next/image';
import React from 'react';

import NavigationLinkExternal from '@/components/navigation/navigation-link-external';
import { externalLinksList, INavigationLinkExternal } from '@/utils/links';

const Footer: React.FC = () => {
  return (
    <footer className="border-grey-neutral">
      <div className="content flex flex-col-reverse pb-4 pt-5 md:flex-row md:items-center md:justify-between">
        <div className="m-auto mt-8 text-center md:m-0">
          <p className="text-sm">© 2024 Mathieu Langumier</p>
        </div>
        <div className="m-auto text-center md:m-0">
          <ul className="flew-row flex gap-5 py-2">
            {externalLinksList.map((link: INavigationLinkExternal) => (
              <li key={link.label}>
                <NavigationLinkExternal href={link.url}>
                  <Image
                    src={link.icon}
                    alt={`${link.label} icon`}
                    height={32}
                    width={32}
                    className="size-8 md:size-6"
                  />
                </NavigationLinkExternal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
