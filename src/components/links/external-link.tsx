import React from 'react';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
}

/**
 * Link component for external navigation (ex: links to socials, download files etc.)
 */
const ExternalLink: React.FC<Props> = ({ className, ...rest }) => {
  return <a target="_blank" rel="noopener noreferrer" className={className} {...rest} />;
};

export default ExternalLink;
