import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import { SettingsContext } from "../../context";
import { HREF_CV_EN, HREF_CV_RU } from "../../model/const.js";

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
        href={isEnLang ? HREF_CV_EN : HREF_CV_RU}
        download={true}
      >
        {isEnLang ? "Download CV" : "Скачать CV"}
      </a>
    </div>
  );
};

export default ContactControls;
