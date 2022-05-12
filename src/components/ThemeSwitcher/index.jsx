import React from "react";

import "./styles.scss";

const ThemeSwitcher = () => {
  let themeValue = "light";

  const changeTheme = () => {
    themeValue = themeValue === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeValue);
  };

  return (
    <button
      className="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
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
