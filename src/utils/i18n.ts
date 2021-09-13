import i18n from 'i18next';
// import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { getData } from '../utils/local-storage-helper';

import translationFR from '../data/fr.json';
import translationEN from '../data/en.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getData('LANGUAGE') ? getData('LANGUAGE') : 'fr',
    // lng: 'fr',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
