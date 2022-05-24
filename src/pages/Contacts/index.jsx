import React, { useEffect, useRef, useState, useContext } from "react";
import { CircleLoader } from "react-spinners";
import { SiLinkedin, SiTwitter, SiGithub, SiGmail } from "react-icons/si";
import { BsBuilding } from "react-icons/bs";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";

import AnimatedLetters from "../../components/AnimatedLetters";
import ModalWindow from "../../components/ModalWindow";

import "./styles.scss";

import { override } from "../../model/loader";
import { SettingsContext } from "../../context";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalWindowShown, setIsModalWindowShown] = useState(false);
  const [messageForModalWindow, setMessageForModalWindow] = useState("");

  const form = useRef();

  let { isLightTheme, isEnLang } = useContext(SettingsContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mj2op5g",
        "template_b8gltyd",
        form.current,
        "WqsPwKKnOXyCGCq9h"
      )
      .then(
        () => {
          setMessageForModalWindow(
            "Your email was sent successfully. Thank you for your message :)"
          );
          setIsModalWindowShown(true);
        },
        () => {
          setMessageForModalWindow(
            "Sorry, something went wrong :( your email wasn't sent. Please, try again or contact me any other way above."
          );
          setIsModalWindowShown(true);
        }
      )
      .finally(() => {
        //clean the form
        form.current.reset();
      });
  };

  const closeModalWindow = () => {
    setIsModalWindowShown(false);
    setMessageForModalWindow("");
  };

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
            timeBeforeHoverActive={2.7}
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
            timeBeforeHoverActive={3.6}
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
            rel="noreferrer"
          >
            <SiLinkedin color="#0a66c2" />
          </a>

          <a
            className="contacts__contact-item contacts__contact-item_is_twitter"
            href="https://twitter.com/sashtje"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter color="#1da1f2" />
          </a>

          <a
            className="contacts__contact-item contacts__contact-item_is_github"
            href="https://github.com/sashtje"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub color="#181717" />
          </a>

          <a
            className="contacts__contact-item contacts__contact-item_is_gmail"
            href="mailto:sashtje.lefevre@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail color="#ea4335" />
          </a>
        </div>

        <div className="contacts__container">
          <div className="contacts__container-map">
            <div className="contacts__container-map-banner">
              Currently I live in Moscow, but I'm ready to consider relocation
            </div>

            <MapContainer center={[55.75232, 37.6116908]} zoom={5}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[55.75232, 37.6116908]}>
                <Popup>
                  <span className="contacts__container-map-popup-icon">
                    <BsBuilding />
                  </span>{" "}
                  Moscow, Russia
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <form
            className="contacts__container-form contacts-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contacts-form__container">
              <div className="contacts-form__row">
                <input
                  className="contacts-form__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="contacts-form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>

              <input
                className="contacts-form__input"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                className="contacts-form__textarea"
                name="message"
                placeholder="Message"
                required
              />

              <input
                className="contacts-form__btn-submit"
                type="submit"
                value="SEND"
              />
            </div>
          </form>
        </div>
      </main>

      {isModalWindowShown && (
        <ModalWindow closeWindow={closeModalWindow}>
          {messageForModalWindow}
        </ModalWindow>
      )}

      <CircleLoader
        size={100}
        color={isLightTheme ? "#b2b604" : "#fbfd66"}
        css={override}
        loading={isLoading}
        speedMultiplier={2}
      />
    </>
  );
};

export default Contacts;
