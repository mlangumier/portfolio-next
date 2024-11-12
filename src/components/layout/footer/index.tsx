import Image from 'next/image';
import React from 'react';

import ExternalLink from '@/components/navigation/external-link';
import { externalLinksList, IExternalLink } from '@/utils/links';

const Footer: React.FC = () => {
    return (
        <footer className="mx-auto w-full border-t border-grey-neutral">
            <div className="mx-auto flex max-w-screen-xl flex-col-reverse px-8 pb-6 pt-8 md:flex-row md:items-center md:justify-between">
                <div className="m-auto mt-8 text-center md:m-0">
                    <p>© 2024 Mathieu Langumier</p>
                </div>
                <div className="m-auto text-center md:m-0">
                    <ul className="flew-row flex gap-8 py-4">
                        {externalLinksList.map((link: IExternalLink) => (
                            <li key={link.label}>
                                <ExternalLink href={link.url}>
                                    <Image
                                        src={link.icon}
                                        alt={`${link.label} icon`}
                                        height={30}
                                        width={30}
                                        className="size-12 md:size-10"
                                    />
                                </ExternalLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
