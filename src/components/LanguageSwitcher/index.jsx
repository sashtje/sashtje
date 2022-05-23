import React, { useContext } from "react";

import { SettingsContext } from "../../context";
import { useEffectOnce } from "../../hooks/useEffectOnce";

import "./styles.scss";

import { LANG_KEY, LANG } from "../../model/const.js";

const LanguageSwitcher = () => {
  let { isEnLang, setIsEnLang } = useContext(SettingsContext);

  const turnOnRuLang = () => {
    setIsEnLang(false);
    document.documentElement.setAttribute("data-lang", "ru");
  };

  const turnOnEnLang = () => {
    setIsEnLang(true);
    document.documentElement.removeAttribute("data-lang");
  };

  const handleClickEn = () => {
    if (isEnLang) return;

    turnOnEnLang();
    localStorage.setItem(LANG_KEY, LANG.EN);
  };

  const handleClickRu = () => {
    if (!isEnLang) return;

    turnOnRuLang();
    localStorage.setItem(LANG_KEY, LANG.RU);
  };

  /* get preferences for LANGUAGE */
  useEffectOnce(() => {
    //check in Local Storage
    const lang = localStorage.getItem(LANG_KEY);
    if (lang) {
      if (lang === LANG.RU) {
        turnOnRuLang();
      }

      return;
    }

    //if there isn't anything in Local Storage, check system preferences
    if (navigator.language === "ru-RU") {
      turnOnRuLang();
    }
  }, []);

  const handleSystemLangChange = () => {
    if (navigator.language === "ru-RU") {
      turnOnRuLang();
    } else {
      turnOnEnLang();
    }

    localStorage.removeItem(LANG_KEY);
  };

  /* synchronizing with the system */
  useEffectOnce(() => {
    window.addEventListener("languagechange", handleSystemLangChange);

    return () => {
      window.removeEventListener("languagechange", handleSystemLangChange);
    };
  }, []);

  return (
    <div className="lang-switcher">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 200 100"
      >
        <defs>
          <filter id="goo-effect" width="110%" height="215%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo-effect"
            />
            <feBlend in="SourceGraphic" in2="goo-effect" />
          </filter>
        </defs>

        <g filter="url(#goo-effect)">
          <circle
            className="lang-switcher__svg-item-down"
            cx="50"
            cy="50"
            r="45"
          />
          <circle
            className="lang-switcher__svg-item-down"
            cx="50"
            cy="50"
            r="45"
            transform="translate(94)"
          />
        </g>
      </svg>

      <svg
        className="lang-switcher__svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 200 100"
      >
        <g filter="url(#goo-effect)">
          <circle
            className="lang-switcher__svg-item lang-switcher__svg-item_1"
            cx="50"
            cy="50"
            r="45"
          />
          <circle
            className="lang-switcher__svg-item lang-switcher__svg-item_2"
            cx="50"
            cy="50"
            r="45"
          />
        </g>
      </svg>

      <button
        className="lang-switcher__btn lang-switcher__btn-en"
        onClick={handleClickEn}
      >
        En
      </button>
      <button
        className="lang-switcher__btn lang-switcher__btn-ru"
        onClick={handleClickRu}
      >
        Ru
      </button>
    </div>
  );
};

export default LanguageSwitcher;
