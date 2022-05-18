import React from "react";

import SkillsItem from "../SkillsItem";

const SkillsSection = ({ title, skillsArray }) => {
  return (
    <section className="skills__section">
      <h2 className="skills__section-title">{title}</h2>
      <div className="section-skills">
        {skillsArray.map(({ icon, subtitle }, index) => (
          <SkillsItem key={index} icon={icon} subtitle={subtitle} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
