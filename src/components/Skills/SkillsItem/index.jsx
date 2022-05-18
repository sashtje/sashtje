import React from "react";

const SkillsItem = ({ icon, subtitle }) => {
  return (
    <div className="section-skills__item">
      <div className="section-skills__icon">{icon}</div>
      <div className="section-skills__subtitle">{subtitle}</div>
    </div>
  );
};

export default SkillsItem;
