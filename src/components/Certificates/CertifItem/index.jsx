import React from "react";
import { GoLinkExternal } from "react-icons/go";

const CertifItem = ({ isDiploma, isLink, src, alt, href = "" }) => {
  return (
    <>
      <div
        className={
          isDiploma
            ? "certificates__item certificates__item_is_diploma-cert"
            : "certificates__item"
        }
      >
        <img className="certificates__item-photo" src={src} alt={alt} />

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

      {/* modalPhoto */}
    </>
  );
};

export default CertifItem;
