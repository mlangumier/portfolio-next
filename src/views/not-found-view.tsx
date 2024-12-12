import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { notFoundImage } from '@/assets';

const NotFoundView: React.FC = () => {
  const t = useTranslations('Pages.NotFound');

  return (
    <section className="section section-h-screen">
      <div className="container flex grow flex-col items-center justify-center gap-8">
        <Image src={notFoundImage} alt="" width={480} height={320} className="w-full max-w-screen-sm" />
        <p className="title-section text-center">{t('text')}</p>
      </div>
    </section>
  );
};

export default NotFoundView;
