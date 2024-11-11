import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { notFoundImage } from '@/assets/images';

const NotFoundView: React.FC = () => {
    const t = useTranslations('Pages.NotFound');

    return (
        <div className="flex flex-col items-center justify-center">
            <Image src={notFoundImage} alt={''} className="w-full max-w-screen-sm" />
            <h2 className="pt-4 text-center uppercase">{t('text')}</h2>
        </div>
    );
};

export default NotFoundView;
