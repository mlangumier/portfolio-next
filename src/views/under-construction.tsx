import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { underConstructionImage } from '@/assets';

const UnderConstructionView: React.FC = () => {
  const t = useTranslations('Pages.UnderConstruction');

  return (
    <section className="section section-h-screen">
      <div className="container flex grow flex-col items-center justify-center gap-8">
        <Image src={underConstructionImage} alt="" width={480} height={295} className="w-full max-w-screen-sm" />
        <p className="title-section text-center">{t('text')}</p>
      </div>
    </section>
  );
};

export default UnderConstructionView;
