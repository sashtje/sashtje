import React, { useContext } from "react";

import { SettingsContext } from "../../context";
import { useEffectOnce } from "../../hooks/useEffectOnce";

import "./styles.scss";

import {
  THEME_KEY,
  THEME,
  metaThemeTag,
  LIGHT_THEME_TOP,
  DARK_THEME_TOP,
} from "../../model/const.js";

const ThemeSwitcher = () => {
  let { isLightTheme, setIsLightTheme, isEnLang } = useContext(SettingsContext);

  const turnOnDarkTheme = () => {
    setIsLightTheme(false);
    document.documentElement.setAttribute("data-theme", THEME.DARK);
    metaThemeTag.setAttribute("content", DARK_THEME_TOP);
  };

  const turnOnLightTheme = () => {
    setIsLightTheme(true);
    document.documentElement.removeAttribute("data-theme");
    metaThemeTag.setAttribute("content", LIGHT_THEME_TOP);
  };

  const changeTheme = () => {
    setIsLightTheme((isLightTheme = !isLightTheme));

    if (isLightTheme) {
      turnOnLightTheme();
      localStorage.setItem(THEME_KEY, THEME.LIGHT);
    } else {
      turnOnDarkTheme();
      localStorage.setItem(THEME_KEY, THEME.DARK);
    }
  };

  const handleSystemThemeChange = ({ matches: isDark }) => {
    if (isDark) {
      turnOnDarkTheme();
    } else {
      turnOnLightTheme();
    }

    localStorage.removeItem(THEME_KEY);
  };

  /* synchronizing with the system */
  useEffectOnce(() => {
    window
      .matchMedia(`(prefers-color-scheme: ${THEME.DARK})`)
      .addEventListener("change", handleSystemThemeChange);

    return () => {
      window
        .matchMedia(`(prefers-color-scheme: ${THEME.DARK})`)
        .removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const getAreaLabel = (isLightTheme, isEnLang) => {
    if (isLightTheme) {
      return isEnLang ? THEME.LIGHT : THEME.LIGHT_RU;
    } else {
      return isEnLang ? THEME.DARK : THEME.DARK_RU;
    }
  };

  return (
    <button
      className="theme-toggle"
      title={
        isEnLang ? "Toggles light & dark" : "Переключает светлую и тёмную темы"
      }
      aria-label={getAreaLabel(isLightTheme, isEnLang)}
      aria-live="polite"
      onClick={changeTheme}
    >
      <svg
        className="theme-toggle__sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle
          className="theme-toggle__sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />

        <g className="theme-toggle__sun-beams" stroke="currentColor">
          <line
            className="theme-toggle__sun-beam_8"
            x1="12"
            y1="1"
            x2="12"
            y2="3"
          />
          <line
            className="theme-toggle__sun-beam_4"
            x1="12"
            y1="21"
            x2="12"
            y2="23"
          />
          <line
            className="theme-toggle__sun-beam_1"
            x1="4.22"
            y1="4.22"
            x2="5.64"
            y2="5.64"
          />
          <line
            className="theme-toggle__sun-beam_5"
            x1="18.36"
            y1="18.36"
            x2="19.78"
            y2="19.78"
          />
          <line
            className="theme-toggle__sun-beam_2"
            x1="1"
            y1="12"
            x2="3"
            y2="12"
          />
          <line
            className="theme-toggle__sun-beam_6"
            x1="21"
            y1="12"
            x2="23"
            y2="12"
          />
          <line
            className="theme-toggle__sun-beam_3"
            x1="4.22"
            y1="19.78"
            x2="5.64"
            y2="18.36"
          />
          <line
            className="theme-toggle__sun-beam_7"
            x1="18.36"
            y1="5.64"
            x2="19.78"
            y2="4.22"
          />
        </g>

        <mask className="theme-toggle__moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
      </svg>
    </button>
  );
};

export default ThemeSwitcher;
