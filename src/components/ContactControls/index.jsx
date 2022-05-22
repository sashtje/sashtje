import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

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
        href={`${process.env.PUBLIC_URL}/cv/CV Aleksandra Rogova (Sashtje).txt`}
        download={true}
      >
        Download CV
      </a>
    </div>
  );
};

export default ContactControls;
