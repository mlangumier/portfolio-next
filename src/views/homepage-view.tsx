import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { profilePicture } from '@/assets';

const HomepageView = () => {
  const t = useTranslations('Pages.Homepage.content');

  // const techList = [
  //   { label: 'React.js', icon: reactjsIcon },
  //   { label: 'Next.js', icon: nextjsIcon },
  //   { label: 'TypeScript', icon: typescriptIcon },
  //   { label: 'TailwindCSS', icon: tailwindcssIcon },
  // ];

  return (
    <>
      {/* Introduction */}
      <section className="flex flex-col-reverse justify-between gap-8 py-20 md:flex-row">
        <div className="flex flex-col gap-8 md:justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-primary">{t('intro.name')}</h1>
            <h2 className="mb-2 mt-1 font-bold uppercase text-primary">{t('intro.title')}</h2>
            <p>
              {t.rich('intro.description', {
                code: chunk => <span className="font-bold text-primary">{chunk}</span>,
              })}
            </p>
          </div>
        </div>

        <div className="flex min-w-fit items-center justify-center">
          <Image
            src={profilePicture}
            alt="Mathieu Langumier"
            className="size-[200px] rounded-full md:size-[250px]"
            priority // For LCP
          />
        </div>
      </section>
    </>
  );
};

export default HomepageView;
