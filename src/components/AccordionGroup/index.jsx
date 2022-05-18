import React, { useState } from "react";

import Accordion from "./../Accordion/index";

import "./styles.scss";

import accordionsArray from "../../model/accordionsArray";

const AccordionGroup = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="accordion-group">
      {accordionsArray.map(({ icon, title }, index) => (
        <Accordion
          key={index}
          number={index}
          icon={icon}
          title={title}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
