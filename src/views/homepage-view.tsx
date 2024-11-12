import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { nextjsIcon, profilePicture, reactjsIcon, tailwindcssIcon, typescriptIcon } from '@/assets/images';
import Button from '@/components/button';
import Card from '@/components/card';
import ExternalLink from '@/components/navigation/external-link';
import NavigationLink from '@/components/navigation/navigation-link';
import { githubLink, linkedinLink } from '@/utils/links';

const HomepageView = () => {
    const t = useTranslations('Pages.Homepage.content');
    const nav = useTranslations('Components.Header.navigation');

    const techList = [
        { label: 'React.js', icon: reactjsIcon },
        { label: 'Next.js', icon: nextjsIcon },
        { label: 'TypeScript', icon: typescriptIcon },
        { label: 'TailwindCSS', icon: tailwindcssIcon },
    ];

    return (
        <Card padding className="flex w-full max-w-2xl flex-col md:max-w-6xl">
            {/* Introduction */}
            <section id="introduction" className="flex flex-col-reverse justify-between gap-12 md:flex-row">
                <div className="flex flex-col gap-12 md:justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-large-22 font-bold text-primary-dark md:text-large-25">
                            {t('intro.name')}
                        </h1>
                        <h2 className="mb-4 mt-1 font-serif text-large font-bold uppercase text-primary md:text-large-25">
                            {t('intro.title')}
                        </h2>
                        <p className="text-medium">
                            {t.rich('intro.description', {
                                code: chunk => <span className="font-bold text-primary">{chunk}</span>,
                            })}
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-8 md:justify-start">
                        <Button aria-labelledby="nav-exp">
                            <NavigationLink id="nav-exp" href={'/experiences'}>
                                {nav('experiences')}
                            </NavigationLink>
                        </Button>
                        {/* TODO: add button when the page is done */}
                        {/* <Button aria-labelledby="nav-projects">
                            <NavigationLink id="nav-projects" href={'/projects'}>{nav('projects')}</NavigationLink>
                        </Button> */}
                    </div>
                </div>

                <div className="flex min-w-fit items-center justify-center">
                    <Image
                        src={profilePicture}
                        alt=""
                        height={250}
                        width={250}
                        className="size-[20rem] rounded-full md:size-[25rem]"
                    />
                </div>
            </section>

            <span className="m-auto mb-12 mt-16 h-[.1rem] w-[80%] bg-primary md:mb-16 md:mt-20 md:h-[.2rem] md:w-1/5" />

            <section>
                <h3 className="m-auto mb-16 w-fit border-b-2 border-secondary-light text-center text-large font-bold uppercase text-primary-dark md:mb-20 md:text-large-22">
                    {t('overview.title')}
                </h3>

                <div className="flex flex-col gap-16">
                    {/* Technical skills */}
                    <div>
                        <h4 className="relative z-10 mx-auto mb-8 w-fit px-8 md:mx-0">
                            <span className="absolute left-[5%] top-1/2 -z-10 h-6 w-4/5 bg-primary-transparent md:h-8" />
                            {t('overview.skills.title')}
                        </h4>
                        <div className="flex flex-row items-center justify-between gap-4 md:justify-center md:gap-20">
                            {techList.map(item => (
                                <Image
                                    key={item.label}
                                    src={item.icon}
                                    alt={`${item.label} logo`}
                                    className="size-20 md:size-24"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Experiences */}
                    <div>
                        <h4 className="relative z-10 mx-auto mb-8 w-fit px-8 md:mx-0">
                            <span className="absolute left-[5%] top-1/2 -z-10 h-6 w-4/5 bg-primary-transparent md:h-8" />
                            {t('overview.experiences.title')}
                        </h4>
                        <div className="mb-4 md:border-l-4 md:border-primary md:pl-4">
                            <h5 className="text-medium">
                                {t.rich('overview.experiences.dixeed.jobInfo', {
                                    code: chunk => <span className="font-bold text-primary">{chunk}</span>,
                                })}
                            </h5>
                            <p className="ml-4">
                                {t.rich('overview.experiences.dixeed.description', {
                                    code: chunk => <span className="font-bold text-secondary">{chunk}</span>,
                                })}
                            </p>
                        </div>
                        <div className="mb-4 md:border-l-4 md:border-primary md:pl-4">
                            <h5 className="text-medium">
                                {t.rich('overview.experiences.ffy.jobInfo', {
                                    code: chunk => <span className="font-bold text-primary">{chunk}</span>,
                                })}
                            </h5>
                            <p className="ml-4">
                                {t.rich('overview.experiences.ffy.description', {
                                    code: chunk => <span className="font-bold text-secondary">{chunk}</span>,
                                })}
                            </p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="relative z-10 mx-auto mb-8 w-fit px-8 md:mx-0">
                            <span className="absolute left-[5%] top-1/2 -z-10 h-6 w-4/5 bg-primary-transparent md:h-8" />
                            {t('overview.contact.title')}
                        </h4>
                        <p>{t('overview.contact.text')}</p>
                        <div className="mt-6 flex flex-row items-center justify-center gap-8 md:justify-start">
                            <Button aria-labelledby="link-linkedin">
                                <ExternalLink id="link-linkedin" colorsInverse href={linkedinLink.url}>
                                    {linkedinLink.label}
                                </ExternalLink>
                            </Button>
                            <Button aria-labelledby="link-github">
                                <ExternalLink id="link-github" colorsInverse href={githubLink.url}>
                                    {githubLink.label}
                                </ExternalLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Card>
    );
};

export default HomepageView;
