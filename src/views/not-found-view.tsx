import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { notFoundImage } from '@/assets/images';

const NotFoundView: React.FC = () => {
  const t = useTranslations('Pages.NotFound');

  return (
    <section className="py-10">
      <div className="content flex grow flex-col items-center justify-center">
        <Image src={notFoundImage} alt="" width={480} height={320} className="w-full max-w-screen-sm" />
        <p className="title-h2 flex-1 pt-2 text-center uppercase">{t('text')}</p>
      </div>
    </section>
  );
};

export default NotFoundView;
