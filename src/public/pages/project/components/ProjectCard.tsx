import { IProject } from 'public/shared/types/Project';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';

interface ProjectListProps {
  project: IProject;
}

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {
  /**
   * VARIABLE
   */
  const navigate = useNavigate();

  /**
   * FUNCTION
   */
  const handleShowDetailProject = () => {
    if (!project.id) return;
    navigate(`/public/project/${project.id}`);
  };

  return (
    <div className="space-y-4">
      <div key={project.images[0]} className="flex flex-col  p-4 rounded">
        {/* Image principale */}
        {project.images[0] && (
          <img
            src={require(`../../../shared/assets/image/project/${project.images[0]}`)}
            alt={project.title}
            className="w-full h-full object-scale-down rounded cursor-pointer"
            onClick={handleShowDetailProject} // Ouvre la modal
          />
        )}

        {/* Contenu */}
        <div className="mt-4  text-white">
          <h2 className="text-xl font-bold ">{project.title}</h2>
          {project.description && <p className=" mt-2">{project.description}</p>}

          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border text-sm font-semibold px-3 py-1 rounded text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          )}
          {project.link && (
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit site
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
