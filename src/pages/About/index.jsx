import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import {
  SiRedux,
  SiCss3,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiWebpack,
  SiFigma,
  SiSass,
  SiAdobephotoshop,
  SiVisualstudiocode,
} from "react-icons/si";

import AnimatedLetters from "../../components/AnimatedLetters";

import "./styles.scss";

import { override } from "../../model/loader";
import myphoto from "../../assets/Aleksandra.jpg";
import ContactControls from "../../components/ContactControls";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  let [isOddSkills, setIsOddSkills] = useState(true);
  const [isCubeAnimated, setIsCubeAnimated] = useState(false);
  const [wasLaunch, setWasLaunch] = useState(false);

  const getCubeClass = (isCubeAnimated) => {
    return isCubeAnimated
      ? "skills-cube skills-cube_is_animated"
      : "skills-cube";
  };

  const getOddGroupClass = (isOddSkills) => {
    return isOddSkills
      ? "skills-cube__group skills-cube__group_is_visible"
      : "skills-cube__group";
  };

  const getEvenGroupClass = (isOddSkills) => {
    return isOddSkills
      ? "skills-cube__group"
      : "skills-cube__group skills-cube__group_is_visible";
  };

  const startCubeAnimation = () => {
    setIsCubeAnimated(true);
    setTimeout(() => {
      //wait for end of rotation animation
      setIsCubeAnimated(false);
      setIsOddSkills((isOddSkills = !isOddSkills));
      setTimeout(() => {
        //wait for end of change skills transition
        startCubeAnimation();
      }, 1000);
    }, 17000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isLoading || wasLaunch) return;

    setWasLaunch(true);
    setTimeout(() => {
      //h1 was loaded
      startCubeAnimation();
    }, 1000);
  }, [isLoading, wasLaunch, isOddSkills, isCubeAnimated]);

  return (
    <>
      <main className="page__content about">
        <h1 className="about__title">
          <AnimatedLetters
            strArray={[
              ["A", ""],
              ["b", ""],
              ["o", ""],
              ["u", ""],
              ["t", ""],
            ]}
            startDelay={1.5}
            timeBeforeHoverActive={3}
          />{" "}
          <AnimatedLetters
            strArray={[
              ["m", ""],
              ["e", ""],
            ]}
            startDelay={2.1}
            timeBeforeHoverActive={3.3}
          />
        </h1>

        <div className="about__about-me about-me">
          <div className="about-me__block">
            <img
              className="about-me__my-photo"
              src={myphoto}
              alt="Sashtje, frontend developer"
            />
            <p className="about-me__text">
              I am passionate about Web development and design, enjoy coding and
              learning new things.
            </p>

            <p className="about-me__text">
              I like to create various animations and my goal is to make the
              communication between a user and the Web the most enjoyable and
              interesting.
            </p>

            <p className="about-me__text">
              I am an independent, responsible, persistent, communicative and
              result-oriented person. It is important for me to do my work with
              a high quality.
            </p>

            <p className="about-me__text">
              I would be happy to find a development team to work together on
              modern interesting projects and to continuously improving my
              skills.
            </p>

            <ContactControls />
          </div>

          <div className="about-me__cube">
            <div className={getCubeClass(isCubeAnimated)}>
              <div className="skills-cube__spinner">
                <div className="skills-cube__complex-face">
                  <div className="skills-cube__face skills-cube__face1">
                    <span className={getOddGroupClass(isOddSkills)}>
                      <SiRedux color="#764abc" title="Redux" />
                    </span>

                    <span className={getEvenGroupClass(isOddSkills)}>
                      <SiWebpack color="#8dd6f9" title="Webpack" />
                    </span>
                  </div>

                  <div className="skills-cube__face skills-cube__face2">
                    <span className={getOddGroupClass(isOddSkills)}>
                      <SiCss3 color="#1572b6" title="CSS3" />
                    </span>

                    <span className={getEvenGroupClass(isOddSkills)}>
                      <SiGit color="#f05032" title="Git" />
                    </span>
                  </div>
                </div>

                <div className="skills-cube__face skills-cube__face3">
                  <span className={getOddGroupClass(isOddSkills)}>
                    <SiHtml5 color="#e34f26" title="HTML5" />
                  </span>

                  <span className={getEvenGroupClass(isOddSkills)}>
                    <SiFigma color="#f24e1e" title="Figma" />
                  </span>
                </div>

                <div className="skills-cube__face skills-cube__face4">
                  <span className={getOddGroupClass(isOddSkills)}>
                    <SiReact color="#61dafb" title="React" />
                  </span>

                  <span className={getEvenGroupClass(isOddSkills)}>
                    <SiSass color="#cc6699" title="SASS" />
                  </span>
                </div>

                <div className="skills-cube__face skills-cube__face5">
                  <span className={getOddGroupClass(isOddSkills)}>
                    <SiTypescript color="#3178c6" title="TypeScript" />
                  </span>

                  <span className={getEvenGroupClass(isOddSkills)}>
                    <SiAdobephotoshop color="#31a8ff" title="Photoshop" />
                  </span>
                </div>

                <div className="skills-cube__face skills-cube__face6">
                  <span className={getOddGroupClass(isOddSkills)}>
                    <SiJavascript color="#f7df1e" title="JavaScript" />
                  </span>

                  <span className={getEvenGroupClass(isOddSkills)}>
                    <SiVisualstudiocode color="#007acc" title="VS Code" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ScaleLoader
        size={100}
        color={"#b2b604"}
        css={override}
        loading={isLoading}
        speedMultiplier={2}
      />
    </>
  );
};

export default About;
