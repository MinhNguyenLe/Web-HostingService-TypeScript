import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import login from './en/login.json';
// import register from './en/register.json';

export const resources = {
  en: {
    login,
    // register,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['login'],
  resources,
});
