import LanguageSelector from "public/shared/components/langueSelector";
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';
import { Link } from "react-router-dom";
import Sayna_space from "../../shared/assets/image/project/Sayna_space.png";
import baztille from "../../shared/assets/image/project/baztille.jpg";
import concoursEni from "../../shared/assets/image/project/concoursEni.png";
import momentum from "../../shared/assets/image/project/momentum.png";
import wiptify from "../../shared/assets/image/project/wiptify.png";

const Home: FC = () => {
  const { t } = useTranslation();

  const images = [baztille, concoursEni, momentum, Sayna_space, wiptify];

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 py-6 flex flex-col justify-center items-center">
        <LanguageSelector /> {/* Ajout du sélecteur de langue */}
        <h1 className="text-4xl font-semibold mb-6 text-center">{t('HOME.WELCOME')}</h1>
        <p className="text-lg mb-6 text-center max-w-2xl">
          {t('HOME.INTRODUCTION')}
        </p>
        <div className="w-full h-full overflow-hidden flex justify-center">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-full"
            columnClassName="pl-4"
          >
            {
              images.map((img, index) => (
                <div key={index} className="mb-4 overflow-hidden">
                  <img
                    className="w-full h-auto max-h-64 object-cover transition-transform duration-300 hover:scale-110"
                    src={img}
                    alt={`Image du projet ${index + 1}`}
                  />
                </div>
              ))
            }
          </Masonry>
        </div>
        <div className="text-center mt-6">
          <Link to="/public/about" className="text-blue-500 hover:underline">{t('HOME.LEARN_MORE')}</Link>
          <span className="mx-2">|</span>
          <Link to="/public/contact" className="text-blue-500 hover:underline">{t('HOME.CONTACT')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
