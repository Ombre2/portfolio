import { IProject } from "public/shared/types/Project";
import React from 'react';
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: IProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  /**
  * TRADUCTION
  */
  const { t } = useTranslation();

  /**
   * VARIABLE
   */
  const { description, file_name, link, technologies, title } = project;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={require(`../../../shared/assets/image/project/${file_name}`)} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies?.map((tech: string) => (
          <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tech}
          </span>
        ))}

      </div>
      <div className="px-6 pb-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {t('PROJECTS.VISIT_SITE')}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
