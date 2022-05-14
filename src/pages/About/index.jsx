import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

import AnimatedLetters from "../../components/AnimatedLetters";

import "./styles.scss";

import { override } from "../../model/loader";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
