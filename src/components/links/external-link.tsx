import clsx from 'clsx';
import React from 'react';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
}

/**
 * Link component for external navigation (ex: links to socials, download files etc.)
 */
const ExternalLink: React.FC<Props> = ({ className, ...rest }) => {
  return <a className={clsx('btn btn-primary', className)} target="_blank" rel="noopener noreferrer" {...rest} />;
};

export default ExternalLink;
