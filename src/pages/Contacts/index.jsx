import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

import "./styles.scss";

import { override } from "../../model/loader";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <main className="page__content contacts">Contacts</main>

      <RingLoader
        size={100}
        color={"#b2b604"}
        css={override}
        loading={isLoading}
      />
    </>
  );
};

export default Contacts;
