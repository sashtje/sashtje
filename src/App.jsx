import { useState } from "react";

import AppRouter from "./components/AppRouter";

import { useEffectOnce } from "./hooks/useEffectOnce";
import { SettingsContext } from "./context/index";

import { THEME_KEY, LANG_KEY, THEME, LANG } from "model/const.js";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isEnLang, setIsEnLang] = useState(true);

  /* get preferences for THEME */
  useEffectOnce(() => {
    //check in Local Storage
    const theme = localStorage.getItem(THEME_KEY);
    if (theme) {
      theme === THEME.LIGHT ? setIsLightTheme(true) : setIsLightTheme(false);
      return;
    }

    //if not anything in Local Storage, check system preferences
  }, []);

  /* get preferences for LANGUAGE */
  useEffectOnce(() => {
    //check in Local Storage
    const lang = localStorage.getItem(LANG_KEY);
    if (lang) {
      lang === LANG.EN ? setIsEnLang(true) : setIsEnLang(false);
      return;
    }

    //if not anything in Local Storage, check system preferences
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
