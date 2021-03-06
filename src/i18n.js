import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import enUsTrans from "./locales/en-us.json";
import zhCnTrans from "./locales/zh-cn.json";
import {initReactI18next} from 'react-i18next';

i18n.use(LanguageDetector) //嗅探当前浏览器语言
    .use(initReactI18next) //init i18next
    .init({
        resources: {
            en: {
                translation: enUsTrans,
            },
            zh: {
                translation: zhCnTrans,
            },
        },
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

i18n.changeLanguage('en');

export default i18n;
