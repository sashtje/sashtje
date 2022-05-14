import React, { useEffect, useState } from "react";

import "./styles.scss";

const AnimatedLetters = ({ strArray, startDelay, timeBeforeHoverActive }) => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [delay, setDelay] = useState(startDelay);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
      setDelay(null);
    }, timeBeforeHoverActive * 1000);
  }, []);

  return (
    <span className="text-animate-word">
      {strArray.map((item, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${delay ? delay + index * 0.1 : "0"}s`,
          }}
          className={item[1] ? `${item[1]} ${letterClass}` : letterClass}
        >
          {item[0]}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
