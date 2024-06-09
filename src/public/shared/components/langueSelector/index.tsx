import React from "react";
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector mb-4">
      <button onClick={() => changeLanguage('en')} className="mx-2 text-blue-500 hover:underline">English</button>
      <button onClick={() => changeLanguage('fr')} className="mx-2 text-blue-500 hover:underline">Français</button>
      <button onClick={() => changeLanguage('es')} className="mx-2 text-blue-500 hover:underline">Español</button>
    </div>
  );
};

export default LanguageSelector;
