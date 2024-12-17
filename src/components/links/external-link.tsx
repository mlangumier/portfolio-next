import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
}

/**
 * Link component for external navigation (ex: links to socials, download files etc.)
 */
const ExternalLink: React.FC<Props> = ({ className, ...rest }) => {
  return <a className={cn('btn btn-primary', className)} target="_blank" rel="noopener noreferrer" {...rest} />;
};

export default ExternalLink;
