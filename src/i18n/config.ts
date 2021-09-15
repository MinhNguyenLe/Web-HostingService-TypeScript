import i18n from "i18next";
import en_headerMenu from "./en/header-menu.json";
import vi_headerMenu from "./vi/header-menu.json";

import en_login from "./en/login.json";
import vi_login from "./vi/login.json";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  en: {
    headerMenu: en_headerMenu,
    login: en_login,
  },
  vi: {
    headerMenu: vi_headerMenu,
    login: vi_login,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "vi"],
    resources: resources,
    fallbackLng: "en",
    ns: ["headerMenu", "login"],
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });
export default i18n;
