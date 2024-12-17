import React from 'react';

interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}
/**
 * Title block for sections
 * @param title - h2 title
 * @param description - Description of the section
 * @param children - CTAs
 * @returns The title block with a list of CTAs
 */
const SectionTitle: React.FC<Props> = ({ title, description, children }) => (
  <div id="section-title" className="relative text-center">
    <h2 className="section-title">{title}</h2>
    {description && <p className="mt-5">{description}</p>}
    {children && <div className="mt-8 flex flex-row flex-wrap justify-center gap-4">{children}</div>}
  </div>
);

export default SectionTitle;
