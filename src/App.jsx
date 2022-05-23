import { useState } from "react";

import AppRouter from "./components/AppRouter";

import { useEffectOnce } from "./hooks/useEffectOnce";
import { SettingsContext } from "./context/index";

import { THEME_KEY, LANG_KEY, THEME, LANG } from "./model/const.js";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isEnLang, setIsEnLang] = useState(true);

  /* get preferences for LANGUAGE */
  useEffectOnce(() => {
    //check in Local Storage
    const lang = localStorage.getItem(LANG_KEY);
    if (lang) {
      if (lang === LANG.RU) {
        setIsEnLang(false);
      }

      return;
    }

    //if there isn't anything in Local Storage, check system preferences
    if (navigator.language === "ru-RU") {
      setIsEnLang(false);
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{ isLightTheme, setIsLightTheme, isEnLang, setIsEnLang }}
    >
      <AppRouter />
    </SettingsContext.Provider>
  );
}

export default App;
