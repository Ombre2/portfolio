import { motion } from 'framer-motion';
import { useAppSelector } from 'public/main/redux-store/app.hooks';
import { selectAllSkillState } from 'public/shared/reduxStore/skills/selectors';
import { containerVariants } from 'public/shared/utils';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SkeletonSkill from './components/SkeletonSkill';
import SkillItem from './components/SkillItem';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const { listSkill, loading } = useAppSelector(selectAllSkillState);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">{t('SKILLS.TITLE')}</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {loading
          ? Array(8)
              .fill(0)
              .map((_, index) => <SkeletonSkill key={index} />)
          : listSkill.map((skill, index) => <SkillItem key={index} skill={skill} />)}
      </motion.div>
    </div>
  );
};

export default Skills;
