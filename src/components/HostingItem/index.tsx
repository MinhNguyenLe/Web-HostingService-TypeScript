import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Button,
  TextField,
  CardActions,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

const HostingItem = ({}) => {
  const { t } = useTranslation(["register"]);

  return (
    <>
      <div>Hosting item</div>
    </>
  );
};

export default HostingItem;
