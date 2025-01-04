import { useAppSelector } from 'public/main/redux-store/app.hooks';
import { selectAllProjectState } from 'public/shared/reduxStore/projects/selectors';
import { IProject } from 'public/shared/types/Project';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './components/ProjectCard';
import SkeletonProjectCard from './components/SkeletonProjectCard';

const Project: React.FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  /**
   * REDUX
   */
  const { listProject, loadingProjectLists } = useAppSelector(selectAllProjectState);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-semibold mb-6 text-center">{t('PROJECTS.TITLE')}</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingProjectLists
          ? Array(4)
              .fill(0)
              .map((_, index) => <SkeletonProjectCard key={`motion_card_${index}`} />)
          : listProject.map((project: IProject, index: number) => <ProjectCard key={index} project={project} />)}
      </div>
    </div>
  );
};

export default Project;
