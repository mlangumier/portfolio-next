import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

const Card: React.FC<Props> = ({ children, className, padding = false }) => {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-[1rem] bg-white shadow-bottom-right',
        className,
        padding && 'px-8 py-12 md:px-12 md:py-16'
      )}
    >
      {children}
    </div>
  );
};

export default Card;
