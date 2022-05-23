import { THEME_KEY, THEME } from "./const.js";

function getPreferenceTheme() {
  //check in Local Storage
  const theme = localStorage.getItem(THEME_KEY);
  if (theme) {
    if (theme === THEME.DARK) {
      document.documentElement.setAttribute("data-theme", THEME.DARK);

      return false;
    }

    return true;
  }

  //if there isn't anything in Local Storage, check system preferences
  if (matchMedia(`(prefers-color-scheme: ${THEME.DARK})`).matches) {
    document.documentElement.setAttribute("data-theme", THEME.DARK);

    return false;
  }

  return true;
}

const isLightInitialTheme = getPreferenceTheme();

export default isLightInitialTheme;
