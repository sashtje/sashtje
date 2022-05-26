import React, { useContext } from "react";
import { SiDuolingo } from "react-icons/si";

import CustomLink from "../CustomLink";
import Certificates from "../Certificates";
import CertifItem from "../Certificates/CertifItem";

import "./styles.scss";

import efCertImg from "../../assets/images/languages/EF-SET-Certificate.webp";
import elemImg from "../../assets/images/languages/elementary.webp";
import preInterImg from "../../assets/images/languages/pre-intermediate.webp";
import interImg from "../../assets/images/languages/intermediate.webp";
import upperInterImg from "../../assets/images/languages/upper-intermediate.webp";
import { SettingsContext } from "../../context";

const Languages = () => {
  let { isEnLang } = useContext(SettingsContext);

  return (
    <div className="languages">
      <div className="languages__block">
        <div className="languages__language">
          <div className="languages__language-title">RU</div>

          <div className="languages__language-subtitle">
            {isEnLang ? "native" : "родной"}
          </div>
        </div>

        <div className="languages__language">
          <div className="languages__language-title">EN</div>

          <div className="languages__language-subtitle">B2+</div>
        </div>
      </div>

      <section className="languages__section">
        <h2 className="languages__section-title">
          {isEnLang ? "Certificate from" : "Сертификат от"}{" "}
          <CustomLink href="https://www.efset.org/ef-set-50/">EF</CustomLink>:
        </h2>

        <Certificates isTable={false}>
          <CertifItem
            isDiploma={false}
            isLink={true}
            src={efCertImg}
            alt="EF English First certificate, C2"
            href="https://www.efset.org/cert/Qr3FLW"
          />
        </Certificates>
      </section>

      <section className="languages__section">
        <h2 className="languages__section-title">
          {isEnLang ? "Certificates from" : "Сертификаты от"}{" "}
          <CustomLink href="https://apps.apple.com/ca/app/english-learning-with-simpler/id1265670676">
            Simpler app
          </CustomLink>
          :
        </h2>

        <Certificates isTable={true}>
          <CertifItem
            isDiploma={false}
            isLink={false}
            src={elemImg}
            alt="elementary certificate, Simpler app"
          />

          <CertifItem
            isDiploma={false}
            isLink={false}
            src={preInterImg}
            alt="pre-intermediate certificate, Simpler app"
          />

          <CertifItem
            isDiploma={false}
            isLink={false}
            src={interImg}
            alt="intermediate certificate, Simpler app"
          />

          <CertifItem
            isDiploma={false}
            isLink={false}
            src={upperInterImg}
            alt="upper-intermediate certificate, Simpler app"
          />
        </Certificates>
      </section>

      <p className="languages__text">
        {isEnLang ? (
          <>
            I have experience of correspondence and communication with native
            speakers.
          </>
        ) : (
          <>
            У меня есть опыт переписки и общения с носителями английского языка.
          </>
        )}
      </p>

      <p className="languages__text">
        {isEnLang ? (
          <>
            I enjoy constantly improving my English using different platforms
            and books. Here you can{" "}
            <CustomLink href="https://www.duolingo.com/profile/RoboOwl">
              see my{" "}
              <span className="languages__text-icon">
                <SiDuolingo color="#58cc02" />
              </span>{" "}
              account
            </CustomLink>
            .
          </>
        ) : (
          <>
            Мне нравится постоянно улучшать свой английский, используя разные
            приложения, видео и книги. Здесь вы можете{" "}
            <CustomLink href="https://www.duolingo.com/profile/RoboOwl">
              посмотреть мой{" "}
              <span className="languages__text-icon">
                <SiDuolingo color="#58cc02" />
              </span>{" "}
              профиль
            </CustomLink>
            .
          </>
        )}
      </p>

      <p className="languages__text">
        {isEnLang ? (
          <>If it is necessary, I will be happy to learn any other languages.</>
        ) : (
          <>Если будет нужно, с радостью выучу любые другие языки.</>
        )}
      </p>
    </div>
  );
};

export default Languages;
