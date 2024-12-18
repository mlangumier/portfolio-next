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

  // TODO: Each skill card appear with delay (300/each)
  // useEffect + time counter + activate / add tailwindcss classes ? (need more info)
  // duration-1000 animate-in fade-in slide-in-from-bottom
  // Bonus: check if need lazy & suspense+skeleton (in case useEffect prevents FCP)

  return (
    <div className="grid grid-cols-1 gap-5 py-20 sm:grid-cols-2 lg:grid-cols-4">
      {skillsItem.map((item: Skill, i) => (
        // Check doc Tailwindcss-animated: animate-in slide-in-from-bottom + slide-in-opacity
        <article key={i} className="card min-w-[15rem] space-y-7">
          <div className="">Logo</div>
          <div className="space-y-4">
            <p className="title-card">{item.title}</p>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SkillsBlock;
