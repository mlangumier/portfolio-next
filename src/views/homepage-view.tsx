import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { nextjsIcon, profilePicture, reactjsIcon, tailwindcssIcon, typescriptIcon } from '@/assets';
import ExternalLink from '@/components/links/external-link';
import { socials } from '@/utils/socials';

const HomepageView = () => {
  const t = useTranslations('Pages.Homepage.content');

  const techList = [
    { label: 'React.js', icon: reactjsIcon },
    { label: 'Next.js', icon: nextjsIcon },
    { label: 'TypeScript', icon: typescriptIcon },
    { label: 'TailwindCSS', icon: tailwindcssIcon },
  ];

  return (
    <>
      {/* Introduction */}
      <section className="content flex flex-col-reverse justify-between gap-8 py-20 md:flex-row">
        <div className="flex flex-col gap-8 md:justify-between">
          <div className="flex flex-col">
            {/* TODO: text-primary-dark */}
            <h1 className="font-bold text-primary">{t('intro.name')}</h1>
            <h2 className="mb-2 mt-1 font-bold uppercase text-primary">{t('intro.title')}</h2>
            <p>
              {t.rich('intro.description', {
                code: chunk => <span className="font-bold text-primary">{chunk}</span>,
              })}
            </p>
          </div>

          {/* TODO: add button when the page is done */}
          {/* <div className="flex flex-row items-center justify-center gap-8 md:justify-start">
            <NavigationLink href={'/projects'} className="btn">
              {nav('projects')}
            </NavigationLink>
          </div> */}
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

      <span className="m-auto mb-8 mt-10 h-[1px] w-4/5 bg-primary md:mb-10 md:mt-12 md:h-[2px] md:w-1/5" />

      <section className="content pb-24 pt-20">
        {/* TODO: text-primary-dark */}
        <h2 className="border-secondary-light m-auto mb-10 w-fit border-b-2 text-center font-bold uppercase text-primary md:mb-12">
          {t('overview.title')}
        </h2>

        <div className="flex flex-col gap-10">
          {/* Technical skills */}
          <div>
            {/* TODO: title-bg utility class (how to do ::before) */}
            <h3 className="relative z-10 mx-auto mb-5 w-fit px-5 md:mx-0">
              {/* TODO: bg-primary-transparent */}
              <span className="absolute left-[5%] top-1/2 -z-10 h-4 w-4/5 bg-primary md:h-5" />
              {t('overview.skills.title')}
            </h3>
            <div className="flex flex-row items-center justify-center gap-5 md:gap-10">
              {techList.map(item => (
                <Image key={item.label} src={item.icon} alt={`${item.label} logo`} className="size-12 md:size-16" />
              ))}
            </div>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="relative z-10 mx-auto mb-5 w-fit px-5 md:mx-0">
              {/* TODO: bg-primary-transparent */}
              <span className="absolute left-[5%] top-1/2 -z-10 h-4 w-4/5 bg-primary md:h-5" />
              {t('overview.experiences.title')}
            </h3>
            <div className="mb-3 md:border-l-4 md:border-primary md:pl-3">
              <h4>
                {t.rich('overview.experiences.dixeed.jobInfo', {
                  code: chunk => <span className="font-bold text-primary">{chunk}</span>,
                })}
              </h4>
              <p className="ml-3">
                {t.rich('overview.experiences.dixeed.description', {
                  code: chunk => <span className="font-bold text-secondary">{chunk}</span>,
                })}
              </p>
            </div>
            <div className="mb-3 md:border-l-4 md:border-primary md:pl-3">
              <h4>
                {t.rich('overview.experiences.ffy.jobInfo', {
                  code: chunk => <span className="font-bold text-primary">{chunk}</span>,
                })}
              </h4>
              <p className="ml-3">
                {t.rich('overview.experiences.ffy.description', {
                  code: chunk => <span className="font-bold text-secondary">{chunk}</span>,
                })}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="relative z-10 mx-auto mb-5 w-fit px-5 md:mx-0">
              {/* TODO: bg-primary-transparent */}
              <span className="absolute left-[5%] top-1/2 -z-10 h-4 w-4/5 bg-primary md:h-5" />
              {t('overview.contact.title')}
            </h3>
            <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:gap-5">
              <p>{t('overview.contact.text')}</p>
              <div className="flex flex-row items-center justify-center gap-5 md:justify-start">
                <ExternalLink id="link-linkedin" href={socials.linkedin.url} className="btn">
                  {socials.linkedin.label}
                </ExternalLink>
                <ExternalLink id="link-github" href={socials.github.url} className="btn">
                  {socials.github.label}
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageView;
