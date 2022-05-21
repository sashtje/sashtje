import React from "react";
import { SiDuolingo } from "react-icons/si";

import "./styles.scss";

const Languages = () => {
  return (
    <div className="languages">
      <div className="languages__block">
        <div className="languages__language">
          <div className="languages__language-title">RU</div>

          <div className="languages__language-subtitle">native</div>
        </div>

        <div className="languages__language">
          <div className="languages__language-title">EN</div>

          <div className="languages__language-subtitle">B2+</div>
        </div>
      </div>

      <section className="languages__section">
        <h2 className="languages__section-title">
          Certificate from{" "}
          <a
            className="link"
            href="https://www.efset.org/ef-set-50/"
            target="_blank"
            rel="noreferrer"
          >
            EF
          </a>
          :
        </h2>
      </section>

      <section className="languages__section">
        <h2 className="languages__section-title">
          Certificates from{" "}
          <a
            className="link"
            href="https://play.google.com/store/apps/details?id=ru.zengalt.simpler&hl=ru&gl=US"
            target="_blank"
            rel="noreferrer"
          >
            Simpler app
          </a>
          :
        </h2>
      </section>

      <p className="languages__text">
        I have experience of correspondence and communication with native
        speakers.
      </p>

      <p className="languages__text">
        I enjoy constantly improving my English using different platforms and
        books. Here you can{" "}
        <a
          className="link"
          href="https://www.duolingo.com/profile/RoboOwl"
          target="_blank"
          rel="noreferrer"
        >
          see my{" "}
          <span className="languages__text-icon">
            <SiDuolingo color="#58cc02" />
          </span>{" "}
          account
        </a>
        .
      </p>

      <p className="languages__text">
        If it is necessary, I will be happy to learn any other languages.
      </p>
    </div>
  );
};

export default Languages;
