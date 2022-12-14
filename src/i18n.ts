import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "es", "de", "ru", "zh"],
    debug: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
    detection: {
      order: ["querystring", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
