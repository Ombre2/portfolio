import en from '../shared/resource/locales/en.json';
import es from '../shared/resource/locales/es.json';
import fr from '../shared/resource/locales/fr.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es }
  },
  lng: 'fr', // langue par défaut
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
