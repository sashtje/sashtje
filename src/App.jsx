import { useState } from "react";

import AppRouter from "./components/AppRouter";

import { SettingsContext } from "./context/index";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isEnLang, setIsEnLang] = useState(true);

  return (
    <SettingsContext.Provider
      value={{ isLightTheme, setIsLightTheme, isEnLang, setIsEnLang }}
    >
      <AppRouter />
    </SettingsContext.Provider>
  );
}

export default App;
