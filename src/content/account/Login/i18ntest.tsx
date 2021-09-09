import React from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n/config";

const tesst = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(["ns1", "ns2"]);
  return (
    <div className="">
      <h2>{t("ns1:title")}</h2>
      <p>{t("ns1:description.part1")}</p>
      <p>{t("ns1:description.part2")}</p>
      <p>{t("ns2:description.part1")}</p>
      <p>{t("ns2:description.part2")}</p>
    </div>
  );
};

export default tesst;
