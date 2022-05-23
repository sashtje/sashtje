import { LANG_KEY, LANG } from "./const.js";

function getPreferenceLang() {
  //check in Local Storage
  const lang = localStorage.getItem(LANG_KEY);
  if (lang) {
    if (lang === LANG.RU) {
      document.documentElement.setAttribute("data-lang", "ru");

      return false;
    }

    return true;
  }

  //if there isn't anything in Local Storage, check system preferences
  if (navigator.language === "ru-RU") {
    document.documentElement.setAttribute("data-lang", "ru");

    return false;
  }

  return true;
}

const isEnInitialLang = getPreferenceLang();

export default isEnInitialLang;
