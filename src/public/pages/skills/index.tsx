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
    <div className="container mx-auto px-4 py-4 sm:py-6">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 text-blue-300"
        style={{ fontFamily: '"Montserrat", serif', fontWeight: 900 }}
      >
        {t('SKILLS.TITLE')}
      </h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8"
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
