import React, { useRef, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import DialogFail from "../DialogFail";

import { useTranslation } from "react-i18next";

import axios, { AxiosResponse } from "axios";

interface availDomain {
  data: {
    DomainInfo: Object;
  };
}

const RegisterNameDomain = ({ setOpen, open, input, setInput }) => {
  const { t } = useTranslation("dialog");

  const name = useRef<HTMLInputElement>(null);
  const [openFail, setOpenFail] = useState(false);

  const changeInfo = (value) => {
    setInput({ ...input, name: value });
  };

  const registerDomainName = () => {
    axios
      .get<availDomain>(
        `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_euKgMtfT4h6beO1APHUGNrP1r7URW&domainName=${
          name.current.value + input.dot
        }&credits=DA`
      )
      .then((res: AxiosResponse) => {
        if (res?.data?.DomainInfo.domainAvailability === "AVAILABLE") {
          setOpen(false);
        } else setOpenFail(true);
      })
      .catch();
  };
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ width: 320 }}>{t("31")}</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={name}
            onChange={() => changeInfo(name.current.value)}
            autoFocus
            margin="dense"
            label={t("34")}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={registerDomainName}>{t("33")}</Button>
          <Button onClick={() => setOpen(false)}>{t("3")}</Button>
        </DialogActions>
      </Dialog>
      <DialogFail open={openFail} setOpen={setOpenFail} mess={t("38")} />
    </div>
  );
};

export default RegisterNameDomain;
