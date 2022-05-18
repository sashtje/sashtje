import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import "./styles.scss";

const Accordion = ({ number, icon, title, content, expanded, setExpanded }) => {
  const isOpen = number === expanded;

  const iconVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const contentVariants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  const handleExpandAccordion = () => {
    setExpanded(isOpen ? false : number);
  };

  return (
    <>
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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="accordion__content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={contentVariants}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="accordion__content-wrapper">
              {content}
              <button
                className="accordion__btn-close"
                onClick={handleExpandAccordion}
              ></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
