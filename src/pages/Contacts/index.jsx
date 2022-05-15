import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { SiLinkedin, SiTwitter, SiGithub, SiGmail } from "react-icons/si";

import AnimatedLetters from "../../components/AnimatedLetters";

import "./styles.scss";

import { override } from "../../model/loader";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <main className="page__content contacts">
        <h1 className="contacts__title">
          <AnimatedLetters
            strArray={[
              ["M", ""],
              ["y", ""],
            ]}
            startDelay={1.5}
            timeBeforeHoverActive={3}
          />{" "}
          <AnimatedLetters
            strArray={[
              ["c", ""],
              ["o", ""],
              ["n", ""],
              ["t", ""],
              ["a", ""],
              ["c", ""],
              ["t", ""],
              ["s", ""],
            ]}
            startDelay={1.8}
            timeBeforeHoverActive={3}
          />
        </h1>
        <p className="contacts__about">
          I'm looking for a{" "}
          <span className="contacts__about_is_highlight">full time remote</span>{" "}
          job as <span className="contacts__about_is_highlight">React</span>{" "}
          Developer. However, if you have other interesting offers or questions,
          don't hesitate to contact me using any convenient way for you.
        </p>

        <div className="contacts__contacts-block">
          <a
            className="contacts__contact-item contacts__contact-item_is_linkedin"
            href="https://www.linkedin.com/in/sashtje"
            target="_blank"
          >
            <SiLinkedin color="#0a66c2" />
          </a>

          <a
            className="contacts__contact-item contacts__contact-item_is_twitter"
            href="https://twitter.com/sashtje"
            target="_blank"
          >
            <SiTwitter color="#1da1f2" />
          </a>

          <a
            className="contacts__contact-item contacts__contact-item_is_github"
            href="https://github.com/sashtje"
            target="_blank"
          >
            <SiGithub color="#181717" />
          </a>

          <a
            className="contacts__contact-item contacts__contact-item_is_gmail"
            href="mailto:sashtje.lefevre@gmail.com"
            target="_blank"
          >
            <SiGmail color="#ea4335" />
          </a>
        </div>

        <div className="contacts__container">
          <div className="contacts__container-map"></div>

          <form className="contacts__form"></form>
        </div>
      </main>

      <CircleLoader
        size={100}
        color={"#b2b604"}
        css={override}
        loading={isLoading}
        speedMultiplier={2}
      />
    </>
  );
};

export default Contacts;
