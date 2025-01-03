import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="border rounded px-1 py-1 text-blue-500 text-sm"
        defaultValue={i18n.language}
      >
        <option value="en">🇺🇸 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="es">🇪🇸 Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
