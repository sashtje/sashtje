import React from "react";
import { SiCodewars, SiReact } from "react-icons/si";

import "./styles.scss";

const Education = () => {
  return (
    <div className="education">
      <section className="education__section">
        <h2 className="education__title">Courses:</h2>

        <p className="education__text">
          I successfully completed the course{" "}
          <b>"JavaScript / Frontend 2021 Q3"</b> from{" "}
          <a href="https://rs.school/" target="_blank" rel="noreferrer">
            RsSchool
          </a>
          .
        </p>

        <div className="education__certificates">
          <div className="education__certificates-item education__certificates-item_is_rsschool"></div>
        </div>

        <p className="education__text">
          As part of my studies at <b>RsSchool</b>, I solved problems on
          algorithms and data structures in <b>Javascript</b> and some base
          problems in <b>Node.js</b>. Tasks and my solutions can be found in
          these four repositories:
        </p>

        <ul className="education__list">
          <li className="education__list-item">
            <a
              href="https://github.com/sashtje/basic-js"
              target="_blank"
              rel="noreferrer"
            >
              BasicJS
            </a>
          </li>

          <li className="education__list-item">
            <a
              href="https://github.com/sashtje/basic-js-ds"
              target="_blank"
              rel="noreferrer"
            >
              BasicJS. Data structures
            </a>
          </li>

          <li className="education__list-item">
            <a
              href="https://github.com/sashtje/core-js-101"
              target="_blank"
              rel="noreferrer"
            >
              Core JS 101
            </a>
          </li>

          <li className="education__list-item">
            <a
              href="https://github.com/sashtje/HTML-builder"
              target="_blank"
              rel="noreferrer"
            >
              HTML builder
            </a>
          </li>
        </ul>

        <p className="education__text">
          The other part of the tasks was solved within the <b>CodeWars</b>{" "}
          site. So you can{" "}
          <a
            href="https://www.codewars.com/users/sashtje"
            target="_blank"
            rel="noreferrer"
          >
            see my{" "}
            <span className="education__text-icon">
              <SiCodewars color="#b1361e" />
            </span>{" "}
            profile
          </a>{" "}
          here.
        </p>

        <p className="education__text">
          I also took a course on <b>React</b> from <b>RsSchool</b>, completed
          all the tasks except the last one. I left before the last task because
          I already have a similar big team project in React and I decided that
          it would be more useful for me to spend this time building my
          portfolio (this site), finding a job and continuing to improve my
          skills in parallel. You can{" "}
          <a
            href="https://github.com/sashtje/rsschool-react"
            target="_blank"
            rel="noreferrer"
          >
            see my RsSchool{" "}
            <span className="education__text-icon">
              <SiReact color="#61dafb" />
            </span>{" "}
            repo
          </a>{" "}
          here.
        </p>

        <p className="education__text">
          Here are my two certificates from{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noreferrer"
          >
            freecodecamp.org
          </a>
          : <b>"Responsive Web Design"</b> and{" "}
          <b>"JavaScript Algorithms and Data Structures"</b>.
        </p>

        <div className="education__certificates">
          <div className="education__certificates-item education__certificates-item_is_rwd"></div>

          <div className="education__certificates-item education__certificates-item_is_ads"></div>
        </div>
      </section>

      <section className="education__section">
        <h2 className="education__title">Experience as a programmer:</h2>
      </section>

      <section className="education__section">
        <h2 className="education__title">University:</h2>
      </section>
    </div>
  );
};

export default Education;
