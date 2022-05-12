import React from "react";

import "./styles.scss";

const LanguageSwitcher = () => {
  let lang = "en";

  const handleClickEn = () => {
    if (lang === "en") return;

    lang = "en";
    document.documentElement.setAttribute("data-lang", "en");
  };

  const handleClickRu = () => {
    if (lang === "ru") return;

    lang = "ru";
    document.documentElement.setAttribute("data-lang", "ru");
  };

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
