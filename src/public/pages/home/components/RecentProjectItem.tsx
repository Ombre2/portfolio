import { IProject } from 'public/shared/types/Project';
import React from 'react';

interface RecentProjectItemProps {
  project: IProject;
  onClick: (project: IProject) => void;
}

const RecentProjectItem: React.FC<RecentProjectItemProps> = ({ project, onClick }) => {
  const { id, images, title } = project;

  return (
    <div
      key={id}
      className="mb-6 overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
      aria-label={`Voir les détails du projet ${title}`}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105 max-h-[350px]"
          src={require(`../../../shared/assets/image/project/${images[0]}`)}
          alt={title || 'Image du projet'}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectItem;
