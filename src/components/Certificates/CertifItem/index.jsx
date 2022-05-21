import React, { useState } from "react";
import { GoLinkExternal } from "react-icons/go";

import ModalPhoto from "../../ModalPhoto";

const CertifItem = ({ isDiploma, isLink, src, alt, href = "" }) => {
  const [isModalPhotoShown, setIsModalPhotoShown] = useState(false);

  const closeModalPhoto = () => {
    setIsModalPhotoShown(false);
  };

  const openModalPhoto = () => {
    setIsModalPhotoShown(true);
  };

  return (
    <>
      <div
        className={
          isDiploma
            ? "certificates__item certificates__item_is_diploma-cert"
            : "certificates__item"
        }
      >
        <img
          className="certificates__item-photo"
          src={src}
          alt={alt}
          onClick={openModalPhoto}
        />

        {isLink && (
          <a
            className="certificates__item-link"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <GoLinkExternal />
          </a>
        )}
      </div>

      {isModalPhotoShown && (
        <ModalPhoto closeWindow={closeModalPhoto} src={src} alt={alt} />
      )}
    </>
  );
};

export default CertifItem;
