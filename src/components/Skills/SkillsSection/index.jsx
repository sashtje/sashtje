import React, { useContext } from "react";

import SkillsItem from "../SkillsItem";

import { SettingsContext } from "./../../../context/index";

const SkillsSection = ({ title, skillsArray }) => {
  let { isLightTheme } = useContext(SettingsContext);

  return (
    <section className="skills__section">
      <h2 className="skills__section-title">{title}</h2>
      <div className="section-skills">
        {skillsArray.map(({ icon, subtitle, iconDark }, index) => (
          <SkillsItem
            key={index}
            icon={!isLightTheme && iconDark ? iconDark : icon}
            subtitle={subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
