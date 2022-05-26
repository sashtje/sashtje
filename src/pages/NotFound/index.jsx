import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import { SettingsContext } from "../../context";

const NotFound = () => {
  let { isEnLang } = useContext(SettingsContext);

  return (
    <div className="page__content not-found">
      <div className="not-found__content">
        {isEnLang ? (
          <>
            Page not found.{" "}
            <Link className="link" to="/">
              Go to Home page.
            </Link>
          </>
        ) : (
          <>
            Страница не найдена.{" "}
            <Link className="link" to="/">
              Перейти на домашнюю страницу.
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NotFound;
