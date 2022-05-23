import { useState } from "react";

import AppRouter from "./components/AppRouter";

import { SettingsContext } from "./context/index";
import isLightInitialTheme from "./model/initial-theme";
import isEnInitialLang from "./model/initial-lang";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(isLightInitialTheme);
  const [isEnLang, setIsEnLang] = useState(isEnInitialLang);

  return (
    <SettingsContext.Provider
      value={{ isLightTheme, setIsLightTheme, isEnLang, setIsEnLang }}
    >
      <AppRouter />
    </SettingsContext.Provider>
  );
}

export default App;
