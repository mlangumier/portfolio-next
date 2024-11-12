import clsx from 'clsx';
import React from 'react';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    className?: string;
    colorsInverse?: boolean;
}

const ExternalLink: React.FC<Props> = ({ colorsInverse = false, className, ...rest }) => (
    <a
        target="_blank"
        rel="noreferrer"
        className={clsx('', className, colorsInverse || 'text-primary hover:text-primary-over')}
        {...rest}
    />
);

export default ExternalLink;
