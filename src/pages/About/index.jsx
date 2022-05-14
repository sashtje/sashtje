import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import {
  SiRedux,
  SiCss3,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiJavascript,
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
                <SiRedux />
              </div>

              <div className="skills-cube__face skills-cube__face2">
                <SiCss3 />
              </div>
            </div>

            <div className="skills-cube__face skills-cube__face3">
              <SiHtml5 />
            </div>

            <div className="skills-cube__face skills-cube__face4">
              <SiReact />
            </div>

            <div className="skills-cube__face skills-cube__face5">
              <SiTypescript />
            </div>

            <div className="skills-cube__face skills-cube__face6">
              <SiJavascript />
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
