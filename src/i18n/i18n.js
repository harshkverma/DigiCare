import { initReactI18next } from "react-i18next";
import { DateTime } from "luxon";
import i18n from "i18next";
import * as engTrans from "./en/en.json";
import * as frTrans from "./fr/fr.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: engTrans,
      },
      fr: {
        translation: frTrans,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      format: (value, format, lng) => {
        // legacy usage
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      },
    },
  });
