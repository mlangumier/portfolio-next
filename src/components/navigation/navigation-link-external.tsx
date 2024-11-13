import React from 'react';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    className?: string;
}

const NavigationLinkExternal: React.FC<Props> = ({ className, ...rest }) => (
    <a target="_blank" rel="noreferrer" className={className} {...rest} />
);

export default NavigationLinkExternal;
