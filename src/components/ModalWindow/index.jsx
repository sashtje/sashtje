import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "./styles.scss";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal");
document.body.appendChild(modalRoot);

const ModalWindow = ({ closeWindow, children }) => {
  const [isHiding, setIsHiding] = useState(false);

  const el = document.createElement("div");

  const handleCloseWindow = (e) => {
    e.stopPropagation();

    setIsHiding(true);

    setTimeout(() => {
      closeWindow();
    }, 500);
  };

  const stopClick = (e) => {
    e.stopPropagation();
  };

  const getModalWindowClass = (isHiding) => {
    return isHiding ? "modal-window modal-window_is_hiding" : "modal-window";
  };

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  });

  return createPortal(
    <div className={getModalWindowClass(isHiding)} onClick={handleCloseWindow}>
      <div className="modal-window__wrapper" onClick={stopClick}>
        <button className="modal-window__close-btn" onClick={handleCloseWindow}>
          <IoIosCloseCircleOutline />
        </button>

        <div className="modal-window__content">{children}</div>
      </div>
    </div>,
    el
  );
};

export default ModalWindow;
