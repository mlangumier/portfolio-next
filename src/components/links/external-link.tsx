import clsx from 'clsx';
import React from 'react';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
}

const ExternalLink: React.FC<Props> = ({ className, ...rest }) => {
  return <a target="_blank" rel="noopener noreferrer" className={clsx('', className)} {...rest} />;
};

export default ExternalLink;
