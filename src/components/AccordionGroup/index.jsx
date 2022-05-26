import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import Accordion from "./../Accordion/index";

import "./styles.scss";

import accordionsArray from "../../model/accordionsArray";
import { SettingsContext } from "../../context";

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

  let { isEnLang } = useContext(SettingsContext);

  return (
    <div className="accordion-group">
      {accordionsArray.map(({ icon, title, content, titleRu }, index) => (
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
            title={isEnLang ? title : titleRu}
            content={content}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AccordionGroup;
