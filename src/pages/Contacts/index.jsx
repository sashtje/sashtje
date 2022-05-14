import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

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
