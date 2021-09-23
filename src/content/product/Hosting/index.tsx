import React from "react";
import HostingItem from "src/components/HostingItem";
import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";
import { HOSTING } from "src/graphql/product";

const Hosting = () => {
  const {
    loading: loadHosting,
    error: errHosting,
    data: dataHosting,
  } = useQuery(HOSTING);
  if (loadHosting) console.log("loading");
  if (errHosting) {
    console.log(JSON.stringify(errHosting, null, 2));
  }
  return (
    <div>
      {dataHosting?.hosting ? (
        dataHosting?.hosting.map((item) => {
          return <HostingItem key={item._id} item={item} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Hosting;
