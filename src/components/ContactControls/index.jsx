import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import CV from "../../assets/cv/CV_Aleksandra (Sashtje).txt";

const ContactControls = () => {
  return (
    <div className="contact-controls">
      <Link
        className="contact-controls__btn contact-controls__contact-me"
        to="/contacts"
      >
        Contact me
      </Link>
      <a
        className="contact-controls__btn contact-controls__download-cv"
        href={CV}
        download={true}
      >
        Download CV
      </a>
    </div>
  );
};

export default ContactControls;
