import React from 'react';
import { useTranslation } from 'react-i18next';

const IntroduceMyself: React.FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center overflow-hidden h-[400px] lg:h-dvh static">
      {/* Texte introductif */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 px-8 w-full text-white z-10 lg:pl-28">
        <div className="max-w-lg text-center lg:text-left">
          {/* Taille du texte ajustée pour mobile et desktop */}
          <h1 className="text-3xl sm:text-4xl lg:text-7xl leading-relaxed font-black">{t('HOME.INTRODUCTION')}</h1>
          <p className="mt-2 text-base sm:text-lg lg:text-xl">{t('HOME.DESCRIPTION')}</p>
          <div className="relative group inline-block cursor-pointer mt-4">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white px-8 py-3 rounded-md shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
              TELECHARGER CV
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-md blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Image responsive */}
      <div className="absolute bottom-0 right-0 w-[50%] lg:w-[40%] max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] hidden sm:block">
        <img
          src={require(`../../../shared/assets/image/johny.png`)}
          alt="Profile"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default IntroduceMyself;
