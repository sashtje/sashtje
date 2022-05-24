import { THEME_KEY, THEME, metaThemeTag, DARK_THEME_TOP } from "./const.js";

function getPreferenceTheme() {
  //check in Local Storage
  const theme = localStorage.getItem(THEME_KEY);
  if (theme) {
    if (theme === THEME.DARK) {
      document.documentElement.setAttribute("data-theme", THEME.DARK);
      metaThemeTag.setAttribute("content", DARK_THEME_TOP);

      return false;
    }

    return true;
  }

  //if there isn't anything in Local Storage, check system preferences
  if (matchMedia(`(prefers-color-scheme: ${THEME.DARK})`).matches) {
    document.documentElement.setAttribute("data-theme", THEME.DARK);
    metaThemeTag.setAttribute("content", DARK_THEME_TOP);

    return false;
  }

  return true;
}

const isLightInitialTheme = getPreferenceTheme();

export default isLightInitialTheme;
