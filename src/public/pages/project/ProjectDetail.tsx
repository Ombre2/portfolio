import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Importation de l'icône de flèche gauche
import { getProjectById } from 'public/shared/service/project.service';
import { IProject } from 'public/shared/types/Project';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MotionDetailProject from './components/SkeletonDetailProject';

const ProjectDetail: React.FC = () => {
  /**
   * VARIABLES
   */
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * LIFECYCLE
   */
  useEffect(() => {
    if (!id) return;
    fetchProject(id);
  }, [id]);

  /**
   * API
   */
  const fetchProject = async (id: string) => {
    setLoading(true);
    try {
      const fetchedProject = await getProjectById(id);
      setProject(fetchedProject);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Erreur lors de la récupération du projet :', error);
    }
  };

  /**
   * RENDER
   */
  if (loading) {
    return <MotionDetailProject />;
  }

  if (!project) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-gray-500">Aucun projet trouvé.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Bouton retour */}
      <div className="mb-4">
        <button
          onClick={() => navigate('/public/home')}
          className="pe-2 py-3 transition flex items-center gap-4  text-white"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Retour à la liste des projets
        </button>
      </div>

      {/* Détails du projet */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6  text-white">{project.title}</h1>
        <p className="text-gray-700 mb-6 text-white">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-full border text-sm font-semibold px-3 py-1 rounded text-slate-400">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-row space-x-4">
          {project?.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-lg"
            >
              Voir le projet
            </a>
          )}
          {project?.link_github && (
            <a
              href={project?.link_github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-lg"
            >
              Voir le dépôt GitHub
            </a>
          )}
        </div>
      </div>

      {/* Liste des images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.images?.map((image, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-md bg-gray-100 flex justify-center items-center p-2"
          >
            <img
              src={require(`../../shared/assets/image/project/${image}`)}
              alt={`Project Image ${index + 1}`}
              className="max-w-full max-h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
