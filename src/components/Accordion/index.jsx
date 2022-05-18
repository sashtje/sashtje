import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import "./styles.scss";

const Accordion = ({ number, icon, title, expanded, setExpanded }) => {
  const isOpen = number === expanded;

  const iconVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleExpandAccordion = () => {
    setExpanded(isOpen ? false : number);
  };

  return (
    <div className="accordion">
      <motion.button
        className="accordion__header-btn"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#c3ffcf" : "#feffb6" }}
        onClick={handleExpandAccordion}
      >
        {icon}
        {title}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.span
              className="accordion__btn-expand"
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              variants={iconVariants}
            >
              <AiOutlineMinus />
            </motion.span>
          )}{" "}
        </AnimatePresence>

        <AnimatePresence initial={true}>
          {!isOpen && (
            <motion.span
              className="accordion__btn-expand"
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              exit="hidden"
              variants={iconVariants}
            >
              <AiOutlinePlus />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Accordion;
