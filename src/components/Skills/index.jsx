import React, { useContext } from "react";

import SkillsSection from "./SkillsSection";

import "./styles.scss";

import skills from "../../model/skills";
import { SettingsContext } from "../../context";

const Skills = () => {
  let { isEnLang } = useContext(SettingsContext);

  return (
    <div className="skills">
      {skills.map(({ title, titleRu, skillsArray }, index) => (
        <SkillsSection
          key={index}
          title={isEnLang ? title : titleRu}
          skillsArray={skillsArray}
        />
      ))}
    </div>
  );
};

export default Skills;
