import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { notFoundImage } from '@/assets/images';

const NotFoundView: React.FC = () => {
  const t = useTranslations('Pages.NotFound');

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full grow flex-col items-center justify-center">
        <Image src={notFoundImage} alt="" width={480} height={320} className="w-full max-w-screen-sm" />
        <h2 className="flex-1 pt-4 text-center uppercase">{t('text')}</h2>
      </div>
    </div>
  );
};

export default NotFoundView;
