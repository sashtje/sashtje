import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

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
      <main className="page__content about">About</main>

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
