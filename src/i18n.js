import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";
import i18next from "i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
  },
  lng: "en",
  falbackingLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
