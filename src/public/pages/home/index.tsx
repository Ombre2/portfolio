import { useAppSelector } from 'public/main/redux-store/app.hooks';
import { selectAllProjectState } from 'public/shared/reduxStore/projects/selectors';
import { IProject } from 'public/shared/types/Project';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Joyride, { CallBackProps, Step } from 'react-joyride';
import Masonry from 'react-masonry-css';
import { Link, useNavigate } from 'react-router-dom';
import RecentProjectItem from './components/RecentProjectItem';
import SkeletonProjectItem from './components/SkeletonRecentProject';

const Home: FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  /**
   * REDUX
   */
  const { listProject, loadingProjectLists } = useAppSelector(selectAllProjectState);

  /**
   * VARIABLE
   */
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };
  const navigate = useNavigate();

  // Contrôle du tutoriel
  const [steps, setSteps] = useState<Step[]>([]);
  const [run, setRun] = useState<boolean>(false);

  /**
   * LIFECYCLE
   */
  useEffect(() => {
    if (loadingProjectLists || listProject.length < 1) return;

    const listRecent = listProject.filter((project) => project.isRecent);
    if (listRecent.length < 1) return;

    // Ajout d'un délai pour garantir que les cibles existent dans le DOM
    const timeout = setTimeout(() => {
      const newSteps = [
        {
          target: `.recent-project-${listRecent[0].id}`,
          content: 'Cliquer pour voir la détail du projet'
        }
      ];

      setSteps(newSteps);
      setRun(true); // Démarre le tutoriel automatiquement
    }, 500);

    return () => clearTimeout(timeout);
  }, [listProject, loadingProjectLists]);

  /**
   * FUNCTION
   */
  const handleShowDetailProject = (project: IProject) => {
    if (!project.id) return;
    navigate(`/public/project/${project.id}`);
  };

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses = ['finished', 'skipped'];
    if (finishedStatuses.includes(status)) {
      setRun(false); // Arrête le tutoriel lorsqu'il est terminé ou ignoré
    }
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={run} // Démarrage automatique du tutoriel
        callback={handleJoyrideCallback}
        showSkipButton
        continuous
        styles={{
          options: {
            zIndex: 10000,
            arrowColor: '#fff',
            backgroundColor: '#fff',
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            primaryColor: '#007bff',
            textColor: '#333'
          }
        }}
      />
      <div className="flex items-center justify-center min-h-screen overflow-hidden">
        <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
          {/* Image de profil */}
          <img
            src={require(`../../shared/assets/image/johny.jpg`)}
            alt=""
            className="w-60 h-60 rounded-full shadow-lg mb-6"
          />

          {/* Texte d'introduction */}
          <p className="text-lg mb-6 text-center max-w-2xl text-gray-600">{t('HOME.INTRODUCTION')}</p>

          {/* Liste des projets récents */}
          <div className="w-full h-full overflow-hidden flex justify-center">
            <Masonry breakpointCols={breakpointColumnsObj} className="flex w-full" columnClassName="pl-4">
              {loadingProjectLists
                ? Array(8)
                    .fill(0)
                    .map((_, index) => <SkeletonProjectItem key={`skeleton-${index}`} />)
                : listProject.map((project: IProject) => {
                    const { isRecent } = project;
                    return (
                      isRecent && (
                        <RecentProjectItem
                          key={`recent_project_${project.id}`}
                          project={project}
                          onClick={() => handleShowDetailProject(project)}
                        />
                      )
                    );
                  })}
            </Masonry>
          </div>

          {/* Liens vers les autres pages */}
          <div className="text-center mt-6">
            <Link to="/public/contact" className="text-blue-500 hover:underline">
              {t('HOME.CONTACT')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
