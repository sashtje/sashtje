import React, { useContext } from "react";
import { SiCodewars, SiReact } from "react-icons/si";

import CustomLink from "../CustomLink";
import Certificates from "../Certificates";
import CertifItem from "../Certificates/CertifItem";

import "./styles.scss";

import rsSchoolCertImg from "../../assets/images/education/RsSchool.webp";
import fccRwdImg from "../../assets/images/education/fcc-resp-web-design.webp";
import fccAdsImg from "../../assets/images/education/fcc-al-str.webp";
import myDiplomaImg from "../../assets/images/education/diploma.webp";
import { SettingsContext } from "../../context";

const Education = () => {
  let { isEnLang } = useContext(SettingsContext);

  return (
    <div className="education">
      <section className="education__section">
        <h2 className="education__title">{isEnLang ? "Courses:" : "Курсы:"}</h2>

        <p className="education__text">
          {isEnLang ? (
            <>
              I successfully completed the course{" "}
              <b>"JavaScript / Frontend 2021 Q3"</b> from{" "}
              <CustomLink href="https://rs.school/">RsSchool</CustomLink>.
            </>
          ) : (
            <>
              Я успешно закончила курс <b>"JavaScript / Frontend 2021 Q3"</b> от{" "}
              <CustomLink href="https://rs.school/">RsSchool</CustomLink>.
            </>
          )}
        </p>

        <Certificates isTable={false}>
          <CertifItem
            isDiploma={false}
            isLink={true}
            src={rsSchoolCertImg}
            alt="RsSchool certificate, JS / Frontend 2021 Q3"
            href="https://app.rs.school/certificate/fdki7gcx"
          />
        </Certificates>

        <p className="education__text">
          {isEnLang ? (
            <>
              As part of my studies at <b>RsSchool</b>, I solved problems on
              algorithms and data structures in <b>Javascript</b> and some base
              problems in <b>Node.js</b>. Tasks and my solutions can be found in
              these four repositories:
            </>
          ) : (
            <>
              Во время учёбы в <b>RsSchool</b> я решала задачи по алгоритмам и
              структурам данных на <b>Javascript</b> и некоторые базовые
              проблемы на <b>Node.js</b>. Задачи и мои решения можно найти в
              этих четырёх репозиториях:
            </>
          )}
        </p>

        <ul className="education__list">
          <li className="education__list-item">
            <CustomLink href="https://github.com/sashtje/basic-js">
              BasicJS
            </CustomLink>
          </li>

          <li className="education__list-item">
            <CustomLink href="https://github.com/sashtje/basic-js-ds">
              BasicJS. Data structures
            </CustomLink>
          </li>

          <li className="education__list-item">
            <CustomLink href="https://github.com/sashtje/core-js-101">
              Core JS 101
            </CustomLink>
          </li>

          <li className="education__list-item">
            <CustomLink href="https://github.com/sashtje/HTML-builder">
              HTML builder
            </CustomLink>
          </li>
        </ul>

        <p className="education__text">
          {isEnLang ? (
            <>
              The other part of the tasks was solved within the <b>CodeWars</b>{" "}
              site. So you can{" "}
              <CustomLink href="https://www.codewars.com/users/sashtje">
                see my{" "}
                <span className="education__text-icon">
                  <SiCodewars color="#b1361e" />
                </span>{" "}
                profile
              </CustomLink>{" "}
              here.
            </>
          ) : (
            <>
              Остальная часть задач решалась в рамках сайта <b>CodeWars</b>. Так
              что вы можете{" "}
              <CustomLink href="https://www.codewars.com/users/sashtje">
                посмотреть мой{" "}
                <span className="education__text-icon">
                  <SiCodewars color="#b1361e" />
                </span>{" "}
                профиль
              </CustomLink>{" "}
              здесь.
            </>
          )}
        </p>

        <p className="education__text education__text_is_big-margins">
          {isEnLang ? (
            <>
              I also took a course on <b>React</b> from <b>RsSchool</b>,
              completed all the tasks except the last one. I left before the
              last task because I already have a similar big team project in
              React and I decided that it would be more useful for me to spend
              this time building my portfolio (this site), finding a job and
              continuing to improve my skills in parallel. You can{" "}
              <CustomLink href="https://github.com/sashtje/rsschool-react">
                see my RsSchool{" "}
                <span className="education__text-icon">
                  <SiReact color="#61dafb" />
                </span>{" "}
                repo
              </CustomLink>{" "}
              here.
            </>
          ) : (
            <>
              Я также прошла курс по <b>React</b> от <b>RsSchool</b>, выполнила
              все задания, кроме последнего. Я ушла перед последним заданием,
              потому что у меня уже есть подобный большой командный проект на
              React, и я решила, что мне будет полезнее потратить это время на
              создание своего сайта портфолио (этот сайт), поиск работы и
              параллельно продолжать совершенствовать свои навыки. Вы можете{" "}
              <CustomLink href="https://github.com/sashtje/rsschool-react">
                посмотреть мой RsSchool{" "}
                <span className="education__text-icon">
                  <SiReact color="#61dafb" />
                </span>{" "}
                репозиторий
              </CustomLink>{" "}
              здесь.
            </>
          )}
        </p>

        <p className="education__text">
          {isEnLang ? (
            <>
              Here are my two certificates from{" "}
              <CustomLink href="https://www.freecodecamp.org/">
                freecodecamp.org
              </CustomLink>
              : <b>"Responsive Web Design"</b> and{" "}
              <b>"JavaScript Algorithms and Data Structures"</b>.
            </>
          ) : (
            <>
              Мои сертификаты от{" "}
              <CustomLink href="https://www.freecodecamp.org/">
                freecodecamp.org
              </CustomLink>
              : <b>"Отзывчивый веб-дизайн"</b> и{" "}
              <b>"JavaScript алгоритмы и структуры данных"</b>.
            </>
          )}
        </p>

        <Certificates isTable={true}>
          <CertifItem
            isDiploma={false}
            isLink={true}
            src={fccRwdImg}
            alt="freecodecamp certificate, responsive web design"
            href="https://www.freecodecamp.org/certification/aleksawebdev/responsive-web-design"
          />

          <CertifItem
            isDiploma={false}
            isLink={true}
            src={fccAdsImg}
            alt="freecodecamp certificate, js algorithms and data structures"
            href="https://www.freecodecamp.org/certification/aleksawebdev/javascript-algorithms-and-data-structures"
          />
        </Certificates>
      </section>

      <section className="education__section">
        <h2 className="education__title">
          {isEnLang
            ? "Experience as a programmer:"
            : "Опыт работы программистом:"}
        </h2>

        <p className="education__text">
          {isEnLang ? (
            <>
              I worked as a <b>1C programmer</b>, improved the current
              configuration of the enterprise system, maintained and improved
              the old code, and also wrote new functionality. I also maintained
              2 existing projects in <b>C#</b> and wrote in <b>C#</b> with{" "}
              <b>SQL</b> from scratch a site parser through a proxy.
            </>
          ) : (
            <>
              Работала <b>программистом 1С</b>, улучшала существующую
              конфигурацию корпоративной системы, поддерживала и оптимизировала
              старый код, писала новый функционал. Также поддерживала 2
              существующих проекта на <b>C#</b> и написала на <b>C#</b> с
              использованием <b>SQL</b> парсер сайта через прокси.
            </>
          )}
        </p>
      </section>

      <section className="education__section">
        <h2 className="education__title">
          {isEnLang ? "University:" : "Университет:"}
        </h2>

        <p className="education__text">
          {isEnLang ? (
            <>
              I have graduated from <b>Lomonosov Moscow State University</b>,
              have successfully completed Specialist programme in{" "}
              <b>"Applied Mathematics and Computer Science"</b> and have been
              awarded the qualification of{" "}
              <b>"Specialist in Mathematics and System Programming"</b>.
            </>
          ) : (
            <>
              Я окончила{" "}
              <b>Московский государственный университет им. М.В. Ломоносова</b>{" "}
              (специалитет) по специальности{" "}
              <b>"Прикладная математика и информатика"</b>, и мне присвоена
              квалификация <b>"Математик, системный программист"</b>.
            </>
          )}
        </p>

        <p className="education__text">
          {isEnLang ? (
            <>
              My diploma <b>"Tools for teaching logic programming"</b> consisted
              from the development and implementation of a graphical tracing
              system for the Prolog language. The system traces programs written
              in Prolog and displays the result in the form of a proof tree. The
              implementation of the tracer was written in <b>SWI-Prolog</b> with
              an object-oriented library <b>XPCE</b>, with which a graphical
              user interface was created.
            </>
          ) : (
            <>
              Моя дипломная работа{" "}
              <b>"Средства поддержки обучения логическому программированию"</b>{" "}
              состояла в разработке и реализации системы графической трассировки
              для языка Пролог. Система осуществляет трассировку пролог-программ
              и выводит результат в виде дерева доказательства. Реализация
              трассировщика была написана на <b>SWI-Prolog</b> с
              объектно-ориентированной библиотекой <b>XPCE</b>, при помощи
              которой был создан графический пользовательский интерфейс.
            </>
          )}
        </p>

        <Certificates isTable={false}>
          <CertifItem
            isDiploma={true}
            isLink={false}
            src={myDiplomaImg}
            alt="Prolog programs tracer, SWI Prolog, XPCE"
          />
        </Certificates>

        <p className="education__text">
          {isEnLang ? (
            <>
              As part of my studies at the University, I worked with the{" "}
              <b>Linux</b> operating system, technologies <b>OpenMP</b>,{" "}
              <b>MPI</b>, databases: <b>SQL</b>, as well as with a number of
              programming languages: <b>Assembler</b>, <b>C</b>, <b>C++</b>,{" "}
              <b>C#</b>, <b>Java</b>, <b>Lisp</b>, <b>Prolog</b>, a little{" "}
              <b>Haskell</b>.
            </>
          ) : (
            <>
              Во время обучения в Университете я работала с операционной
              системой <b>Linux</b>, технологиями: <b>OpenMP</b>, <b>MPI</b>,
              базами данных: <b>SQL</b>, а также с рядом языков
              программирования: <b>Assembler</b>, <b>C</b>, <b>C++</b>,{" "}
              <b>C#</b>, <b>Java</b>, <b>Lisp</b>, <b>Пролог</b>, немного{" "}
              <b>Haskell</b>.
            </>
          )}
        </p>

        <p className="education__text">
          {isEnLang ? (
            <>
              Also I have a little experience with <b>PHP</b> and <b>Python</b>.
            </>
          ) : (
            <>
              Также у меня есть небольшой опыт с <b>PHP</b> и <b>Python</b>.
            </>
          )}
        </p>

        <p className="education__text">
          {isEnLang ? (
            <>
              I am a fast learner and ready with great pleasure to learn all the
              necessary technologies for work.
            </>
          ) : (
            <>
              Я быстро учусь и готова с большим удовольствием изучить все
              необходимые технологии для работы.
            </>
          )}
        </p>
      </section>
    </div>
  );
};

export default Education;
