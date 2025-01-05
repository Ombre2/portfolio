import React from 'react';
import { useTranslation } from 'react-i18next';

const IntroduceMyself: React.FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center overflow-hidden h-dvh static">
      {/* Texte introductif */}
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 px-8 w-full text-white z-10">
        <div className="max-w-lg text-center lg:text-left">
          {/* Taille du texte ajustée pour mobile et desktop */}
          <h1 className="text-3xl sm:text-4xl lg:text-7xl leading-relaxed font-black">{t('HOME.INTRODUCTION')}</h1>
          <p className="mt-2 text-base sm:text-lg lg:text-xl">{t('HOME.DESCRIPTION')}</p>
        </div>
      </div>

      {/* Image responsive */}
      <div className="absolute bottom-0 right-0 w-[50%] lg:w-[40%]  max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px]">
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
