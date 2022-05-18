import React, { useState } from "react";
import { motion } from "framer-motion";

import Accordion from "./../Accordion/index";

import "./styles.scss";

import accordionsArray from "../../model/accordionsArray";

const AccordionGroup = () => {
  const [expanded, setExpanded] = useState(false);

  const accordionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2 * custom },
    }),
  };

  return (
    <div className="accordion-group">
      {accordionsArray.map(({ icon, title }, index) => (
        <motion.div
          className="accordion"
          key={index}
          variants={accordionVariants}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion
            key={index}
            number={index}
            icon={icon}
            title={title}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AccordionGroup;
