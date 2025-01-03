import { useAppSelector } from 'public/main/redux-store/app.hooks';
import { selectAllProjectState } from 'public/shared/reduxStore/projects/selectors';
import { IProject } from 'public/shared/types/Project';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';
import { Link, useNavigate } from 'react-router-dom';

const Home: FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  /**
   * REDUX
   */
  const { listProject } = useAppSelector(selectAllProjectState);

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

  /**
   * FUNCTION
   */
  const handleShowDetailProject = (project: IProject) => {
    if (!project.id) return;
    navigate(`/public/project/${project.id}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
        {/* Image de profil */}
        <img
          src={require(`../../shared/assets/image/johny.jpg`)}
          alt=""
          className="w-60 h-60 rounded-full shadow-lg mb-6"
        />

        {/* Texte d'accueil */}
        {/* <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">{t('HOME.WELCOME')}</h1> */}
        <p className="text-lg mb-6 text-center max-w-2xl text-gray-600">{t('HOME.INTRODUCTION')}</p>

        {/* Liste des projets récents */}
        <div className="w-full h-full overflow-hidden flex justify-center">
          <Masonry breakpointCols={breakpointColumnsObj} className="flex w-full" columnClassName="pl-4">
            {listProject.map((project: IProject, index: number) => {
              const { images, isRecent, title } = project;
              return (
                isRecent && (
                  <div
                    key={index}
                    className="mb-6 overflow-hidden cursor-pointer group"
                    onClick={() => handleShowDetailProject(project)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <img
                        className="w-full h-auto max-h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        src={require(`../../shared/assets/image/project/${images[0]}`)}
                        alt={title}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">{title}</p>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </Masonry>
        </div>

        {/* Liens vers les autres pages */}
        <div className="text-center mt-6">
          <Link to="/public/about" className="text-blue-500 hover:underline">
            {t('HOME.LEARN_MORE')}
          </Link>
          <span className="mx-2">|</span>
          <Link to="/public/contact" className="text-blue-500 hover:underline">
            {t('HOME.CONTACT')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
