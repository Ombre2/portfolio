import { useAppSelector } from "public/main/redux-store/app.hooks";
import LanguageSelector from "public/shared/components/langueSelector";
import { selectAllProjectState } from "public/shared/reduxStore/projects/selectors";
import { IProject } from "public/shared/types/Project";
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from "./components/ProjectCard";

const Project: React.FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  /**
   * REDUX
   */
  const { listProject } = useAppSelector(selectAllProjectState)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className=" text-center">
        <LanguageSelector /> {/* Ajout du sélecteur de langue */}
      </div>
      <h1 className="text-4xl font-semibold mb-6 text-center">{t('PROJECTS.TITLE')}</h1>
      <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
        {t('PROJECTS.DESCRIPTION')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listProject.map((project: IProject, index: number) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
