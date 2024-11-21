import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { underConstructionImage } from '@/assets/images';
import NavigationLinkExternal from '@/components/navigation/navigation-link-external';

const UnderConstructionView: React.FC = () => {
  const t = useTranslations('Pages.UnderConstruction');

  return (
    <section className="size-full bg-grey-light md:flex md:items-center">
      <div className="content pb-14 pt-12 md:py-0">
        <p className="title-h2 pb-8 text-center uppercase md:pb-8">{t('title')}</p>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="max-w-[480px] text-center md:flex md:max-w-full md:flex-[55%] md:flex-col md:justify-center md:text-start">
            <p className="pb-2">{t('welcomeText')}</p>

            <p className="pb-2">
              {t.rich('githubText', {
                code: chunk => (
                  <NavigationLinkExternal href="https://github.com/mlangumier/portfolio" className="underline">
                    {chunk}
                  </NavigationLinkExternal>
                ),
              })}
            </p>
            <p className="pb-2">
              {t.rich('linkedinText', {
                code: chunk => (
                  <NavigationLinkExternal href="https://www.linkedin.com/in/mathieu-langumier" className="underline">
                    {chunk}
                  </NavigationLinkExternal>
                ),
              })}
            </p>

            <p>{t('goodbyeText')}</p>
          </div>
          <div className="flex md:flex-[45%]">
            <Image
              src={underConstructionImage}
              alt=""
              width={480}
              height={295}
              className="m-auto w-full max-w-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderConstructionView;
