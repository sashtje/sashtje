import React from "react";

import "./styles.scss";

const CustomLink = ({ href, children }) => {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default CustomLink;
