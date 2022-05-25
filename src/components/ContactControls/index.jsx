import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import { SettingsContext } from "../../context";

const ContactControls = () => {
  let { isEnLang } = useContext(SettingsContext);

  return (
    <div className="contact-controls">
      <Link
        className="contact-controls__btn contact-controls__contact-me"
        to="/contacts"
      >
        {isEnLang ? "Contact me" : "Написать мне"}
      </Link>
      <a
        className="contact-controls__btn contact-controls__download-cv"
        href={`${process.env.PUBLIC_URL}/cv/CV Aleksandra Rogova (Sashtje).txt`}
        download={true}
      >
        {isEnLang ? "Download CV" : "Скачать CV"}
      </a>
    </div>
  );
};

export default ContactControls;
