import clsx from 'clsx';
import React from 'react';

interface Props {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const ExternalLink: React.FC<Props> = ({ children, href, className }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx('text-primary hover:text-primary-over', className)}
    >
        {children}
    </a>
);

export default ExternalLink;
