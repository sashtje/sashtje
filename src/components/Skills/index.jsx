import React from "react";

import SkillsSection from "./SkillsSection";

import "./styles.scss";

import skills from "../../model/skills";

const Skills = () => {
  return (
    <div className="skills">
      {skills.map(({ title, skillsArray }, index) => (
        <SkillsSection key={index} title={title} skillsArray={skillsArray} />
      ))}
    </div>
  );
};

export default Skills;
