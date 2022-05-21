import React from "react";
import { SiDuolingo } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";

import "./styles.scss";

import efCertImg from "../../assets/images/languages/EF-SET-Certificate.webp";
import elemImg from "../../assets/images/languages/elementary.webp";
import preInterImg from "../../assets/images/languages/pre-intermediate.webp";
import interImg from "../../assets/images/languages/intermediate.webp";
import upperInterImg from "../../assets/images/languages/upper-intermediate.webp";

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

        <div className="certificates">
          <div className="certificates__item certificates__item_is_single-cert">
            <img
              className="certificates__item-photo"
              src={efCertImg}
              alt="EF English First certificate, C2"
            />

            <a
              className="certificates__item-link"
              href="https://www.efset.org/cert/Qr3FLW"
              target="_blank"
              rel="noreferrer"
            >
              <GoLinkExternal />
            </a>
          </div>
        </div>
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

        <div className="certificates certificates_is_two-col">
          <div className="certificates__item">
            <img
              className="certificates__item-photo"
              src={elemImg}
              alt="elementary certificate, Simpler app"
            />
          </div>

          <div className="certificates__item">
            <img
              className="certificates__item-photo"
              src={preInterImg}
              alt="pre-intermediate certificate, Simpler app"
            />
          </div>

          <div className="certificates__item">
            <img
              className="certificates__item-photo"
              src={interImg}
              alt="intermediate certificate, Simpler app"
            />
          </div>

          <div className="certificates__item">
            <img
              className="certificates__item-photo"
              src={upperInterImg}
              alt="upper-intermediate certificate, Simpler app"
            />
          </div>
        </div>
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
