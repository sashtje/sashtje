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
          <a
            className="link"
            href="https://rs.school/"
            target="_blank"
            rel="noreferrer"
          >
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
              className="link"
              href="https://github.com/sashtje/basic-js"
              target="_blank"
              rel="noreferrer"
            >
              BasicJS
            </a>
          </li>

          <li className="education__list-item">
            <a
              className="link"
              href="https://github.com/sashtje/basic-js-ds"
              target="_blank"
              rel="noreferrer"
            >
              BasicJS. Data structures
            </a>
          </li>

          <li className="education__list-item">
            <a
              className="link"
              href="https://github.com/sashtje/core-js-101"
              target="_blank"
              rel="noreferrer"
            >
              Core JS 101
            </a>
          </li>

          <li className="education__list-item">
            <a
              className="link"
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
            className="link"
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
            className="link"
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
            className="link"
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

        <p className="education__text">
          I worked as a <b>1C programmer</b>, improved the current configuration
          of the enterprise system, maintained and improved the old code, and
          also wrote new functionality. I also maintained 2 existing projects in{" "}
          <b>C#</b> and wrote in <b>C#</b> from scratch a site parser through a
          proxy.
        </p>
      </section>

      <section className="education__section">
        <h2 className="education__title">University:</h2>

        <p className="education__text">
          I have graduated from <b>Lomonosov Moscow State University</b>, have
          successfully completed Specialist programme in{" "}
          <b>"Applied Mathematics and Computer Science"</b> and have been
          awarded the qualification of{" "}
          <b>"Specialist in Mathematics and System Programming"</b>.
        </p>

        <p className="education__text">
          My diploma <b>"Tools for teaching logic programming"</b> consisted
          from the development and implementation of a graphical tracing system
          for the Prolog language. The system traces programs written in Prolog
          and displays the result in the form of a proof tree. The
          implementation of the tracer was written in <b>SWI-Prolog</b> with an
          object-oriented library <b>XPCE</b>, with which a graphical user
          interface was created.
        </p>

        <p className="education__text">
          As part of my studies at the University, I worked with the{" "}
          <b>Linux</b> operating system, technologies <b>OpenMP</b>, <b>MPI</b>,
          as well as with a number of programming languages: <b>Assembler</b>,{" "}
          <b>C</b>, <b>C++</b>, <b>C#</b>, <b>Java</b>, <b>Lisp</b>,{" "}
          <b>Prolog</b>, a little <b>Haskell</b>.
        </p>

        <p className="education__text">
          Also I have a little experience with <b>PHP</b> and <b>Python</b>.
        </p>

        <p className="education__text">
          I am a fast learner and ready with great pleasure to learn all the
          necessary technologies for work.
        </p>
      </section>
    </div>
  );
};

export default Education;
