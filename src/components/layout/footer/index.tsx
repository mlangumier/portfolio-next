import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { githubIcon, linkedInIcon } from '@/assets/images';

interface ISocialMediaLink {
    label: string;
    url: string;
    icon: string;
}

const links: ISocialMediaLink[] = [
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mathieu-langumier/',
        icon: linkedInIcon,
    },
    {
        label: 'Github',
        url: 'https://github.com/mlangumier',
        icon: githubIcon,
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col-reverse px-8 pb-8 pt-12 md:flex-row md:items-center md:justify-between">
            <div className="m-auto mt-8 text-center md:m-0">
                <p className="">© 2024 Mathieu Langumier</p>
            </div>
            <div className="m-auto text-center md:m-0">
                <ul className="flew-row flex gap-8 py-4">
                    {links.map((link: ISocialMediaLink) => (
                        <Link key={link.label} href={link.url} target="_blank">
                            <Image
                                src={link.icon}
                                alt={`${link.label} icon`}
                                className="size-12 md:size-10"
                            />
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
