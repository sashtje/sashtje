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

const About = () => {
  const [isLoading, setIsLoading] = useState(false);

  /* useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); */

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
            timeBeforeHoverActive={2.5}
          />{" "}
          <AnimatedLetters
            strArray={[
              ["m", ""],
              ["e", ""],
            ]}
            startDelay={2.1}
            timeBeforeHoverActive={2.5}
          />
        </h1>

        <div className="skills-cube">
          <div className="skills-cube__spinner">
            <div className="skills-cube__complex-face">
              <div className="skills-cube__face skills-cube__face1">
                <span className="skills-cube__group">
                  <SiRedux color="#764abc" />
                </span>

                <span className="skills-cube__group skills-cube__group_is_visible">
                  <SiWebpack color="#8dd6f9" />
                </span>
              </div>

              <div className="skills-cube__face skills-cube__face2">
                <span className="skills-cube__group">
                  <SiCss3 color="#1572b6" />
                </span>

                <span className="skills-cube__group skills-cube__group_is_visible">
                  <SiGit color="#f05032" />
                </span>
              </div>
            </div>

            <div className="skills-cube__face skills-cube__face3">
              <span className="skills-cube__group">
                <SiHtml5 color="#e34f26" />
              </span>

              <span className="skills-cube__group skills-cube__group_is_visible">
                <SiFigma color="#f24e1e" />
              </span>
            </div>

            <div className="skills-cube__face skills-cube__face4">
              <span className="skills-cube__group">
                <SiReact color="#61dafb" />
              </span>

              <span className="skills-cube__group skills-cube__group_is_visible">
                <SiSass color="#cc6699" />
              </span>
            </div>

            <div className="skills-cube__face skills-cube__face5">
              <span className="skills-cube__group">
                <SiTypescript color="#3178c6" />
              </span>

              <span className="skills-cube__group skills-cube__group_is_visible">
                <SiAdobephotoshop color="#31a8ff" />
              </span>
            </div>

            <div className="skills-cube__face skills-cube__face6">
              <span className="skills-cube__group">
                <SiJavascript color="#f7df1e" />
              </span>

              <span className="skills-cube__group skills-cube__group_is_visible">
                <SiVisualstudiocode color="#007acc" />
              </span>
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
