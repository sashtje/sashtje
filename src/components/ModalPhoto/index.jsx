import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "./styles.scss";

import modalRoot from "../../model/modal";

const ModalPhoto = ({ closeWindow, src, alt }) => {
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
    return isHiding ? "modal-photo modal-photo_is_hiding" : "modal-photo";
  };

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  });

  return createPortal(
    <div className={getModalWindowClass(isHiding)} onClick={handleCloseWindow}>
      <button className="modal-photo__close-btn" onClick={handleCloseWindow}>
        <IoIosCloseCircleOutline />
      </button>

      <img
        className="modal-photo__photo"
        src={src}
        alt={alt}
        onClick={stopClick}
      />
    </div>,
    el
  );
};

export default ModalPhoto;
