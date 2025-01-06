import { useAppSelector } from 'public/main/redux-store/app.hooks';
import { selectAllProjectState } from 'public/shared/reduxStore/projects/selectors';
import { IProject } from 'public/shared/types/Project';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Joyride, { CallBackProps, Step } from 'react-joyride';
import { useNavigate } from 'react-router-dom';
import Contact from '../contact';
import Project from '../project';
import Skills from '../skills';
import IntroduceMyself from './components/IntroduiceMyself';

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
      <div className="flex gap-10 flex-col">
        <IntroduceMyself />
        <Project />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Home;
