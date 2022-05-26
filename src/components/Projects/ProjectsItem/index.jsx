import React, { useContext } from "react";
import { HiCode } from "react-icons/hi";

import { SettingsContext } from "../../../context";

const ProjectsItem = ({
  title,
  image,
  transition,
  deployLink,
  codeLink,
  tags,
  description,
  descriptionRu,
}) => {
  let { isEnLang } = useContext(SettingsContext);

  return (
    <section className="projects__item projects-item">
      <h2 className="projects-item__title">{title}</h2>
      <a
        style={{
          backgroundImage: `url(${image})`,
          transition: `${transition}`,
        }}
        className="projects-item__photo"
        href={deployLink}
        target="_blank"
        rel="noreferrer"
      ></a>
      <div className="projects-item__code-link-container">
        <a
          className="projects-item__code-link"
          href={codeLink}
          target="_blank"
          rel="noreferrer"
        >
          <HiCode />
        </a>
      </div>
      <div className="projects-item__tags">
        {tags.map((item, index) => (
          <div key={index} className="projects-item__tag-item">
            {item}
          </div>
        ))}
      </div>

      {(isEnLang ? description : descriptionRu).map((item, index) => (
        <p key={index} className="projects-item__text">
          {item}
        </p>
      ))}
    </section>
  );
};

export default ProjectsItem;
