import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props {
  id: string;
  full?: boolean;
  first?: boolean;
  containerStyle?: string;
  children: React.ReactNode;
}

/**
 * Section wrapper full-width with a container for content
 *
 * @param id - Section's name
 * @param full - Makes the section use the viewport's height, minus the Header.
 * @param first - (only for first section of the page) Reduces the padding-top on mobile
 * @param containerStyle - Adding style to container
 */
const SectionWrapper: React.FC<Props> = ({ id, first = false, full = false, containerStyle, children }) => {
  return (
    <section id={id} className={cn('', first ? 'section-py-first' : 'section-py', full && 'section-full')}>
      <div className={cn('container', containerStyle)}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
