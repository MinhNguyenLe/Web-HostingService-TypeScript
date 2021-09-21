import i18n from "i18next";
import en_headerMenu from "./en/header-menu.json";
import vi_headerMenu from "./vi/header-menu.json";

import en_login from "./en/login.json";
import vi_login from "./vi/login.json";

import en_register from "./en/register.json";
import vi_register from "./vi/register.json";

import en_domain from "./en/domain.json";
import vi_domain from "./vi/domain.json";

import en_admin from "./en/admin.json";
import vi_admin from "./vi/admin.json";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  en: {
    headerMenu: en_headerMenu,
    login: en_login,
    register: en_register,
    domain: en_domain,
    admin: en_admin,
  },
  vi: {
    headerMenu: vi_headerMenu,
    login: vi_login,
    register: vi_register,
    domain: vi_domain,
    admin: vi_admin,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "vi"],
    resources: resources,
    fallbackLng: "en",
    ns: ["headerMenu", "login", "register", "domain", "admin"],
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });
export default i18n;
