import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const CategoryBlock: React.FC<Props> = ({ title, children, className }) => (
  <div className={className}>
    <h6 className="title-category">{title}</h6>
    <ul className="mt-2 flex flex-col gap-2">{children}</ul>
  </div>
);
