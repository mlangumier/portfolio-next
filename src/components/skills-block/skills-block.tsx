import { useTranslations } from 'next-intl';
import React from 'react';

interface Skill {
  title: string;
  description: string;
}

const SkillsBlock: React.FC = () => {
  const t = useTranslations('Pages.Homepage.sections.skills.cards');
  const skillsItem: Skill[] = [
    { title: t('technical.title'), description: t('technical.description') },
    { title: t('adapt.title'), description: t('adapt.description') },
    { title: t('teamwork.title'), description: t('teamwork.description') },
    { title: t('learning.title'), description: t('learning.description') },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {skillsItem.map((item: Skill, i) => (
        <article key={i} className="card animate-in slide-in-from-bottom">
          <p className="title-card">{item.title}</p>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
};

export default SkillsBlock;
