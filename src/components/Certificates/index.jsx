import React from "react";

import "./styles.scss";

const Certificates = ({ isTable, children }) => {
  return (
    <div
      className={
        isTable
          ? "certificates certificates_is_table"
          : "certificates certificates_is_single"
      }
    >
      {children}
    </div>
  );
};

export default Certificates;
