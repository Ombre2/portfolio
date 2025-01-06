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
    <div className="container mx-auto sm:px-10  px-5">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl  font-semibold mb-6 text-blue-300"
        style={{ fontFamily: '"Montserrat", serif', fontWeight: 900 }}
      >
        {t('PROJECTS.TITLE')}
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {loadingProjectLists
          ? Array(4)
              .fill(0)
              .map((_, index) => <SkeletonProjectCard key={`motion_card_${index}`} />)
          : listProject.map(
              (project: IProject, index: number) => project.isReadyAll && <ProjectCard key={index} project={project} />
            )}
      </div>
    </div>
  );
};

export default Project;
