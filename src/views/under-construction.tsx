import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { underConstructionImage } from '@/assets/images';
import NavigationLinkExternal from '@/components/navigation/navigation-link-external';

const UnderConstructionView: React.FC = () => {
  const t = useTranslations('Pages.UnderConstruction');

  return (
    <div className="flex max-w-[480px] flex-col gap-12 md:max-w-[1140px] md:flex-row">
      <div className="text-center md:flex md:flex-[55%] md:flex-col md:justify-center md:text-start">
        <h2 className="pb-8 text-center text-large font-bold uppercase md:pb-12 md:text-large-25">[ {t('title')} ]</h2>

        <div>
          <p className="pb-4">{t('welcomeText')}</p>

          <p className="pb-4">
            {t.rich('githubText', {
              code: chunk => (
                <NavigationLinkExternal href="https://github.com/mlangumier/portfolio" className="underline">
                  {chunk}
                </NavigationLinkExternal>
              ),
            })}
          </p>
          <p className="pb-4">
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
      </div>
      <div className="flex md:flex-[45%]">
        <Image src={underConstructionImage} alt="" width={480} height={295} className="m-auto w-full max-w-[480px]" />
      </div>
    </div>
  );
};

export default UnderConstructionView;
