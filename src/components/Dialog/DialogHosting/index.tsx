import React, { useState, useRef } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

const DialogHosting = ({ item, setItem, open, setOpen, createNew }) => {
  const { t } = useTranslation("dialog");

  const changeInfo = (type: string, value: string) => {
    if (type === "ssd") {
      setItem({ ...item, SSDMemory: value });
    }
    if (type === "ram") {
      setItem({ ...item, RAM: value });
    }
    if (type === "bandwidth") {
      setItem({ ...item, bandwidth: value });
    }
    if (type === "price") {
      setItem({ ...item, price: parseInt(value) });
    }
    if (type === "months") {
      setItem({ ...item, months: parseInt(value) });
    }
    if (type === "type") {
      setItem({ ...item, type: value });
    }
    if (type === "information") {
      setItem({ ...item, information: value });
    }
  };

  const price = useRef<HTMLInputElement>(null);
  const months = useRef<HTMLInputElement>(null);
  const ram = useRef<HTMLInputElement>(null);
  const ssd = useRef<HTMLInputElement>(null);
  const bandwidth = useRef<HTMLInputElement>(null);
  const type = useRef<HTMLInputElement>(null);
  const information = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ fontSize: "20px", minWidth: 280, width: "360px" }}>
          {t("13")}
        </DialogTitle>
        <DialogContent>
          <TextField
            inputRef={price}
            onChange={() => changeInfo("price", price.current.value)}
            autoFocus
            margin="dense"
            label={t("18")}
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={months}
            onChange={() => changeInfo("months", months.current.value)}
            autoFocus
            margin="dense"
            label={t("8")}
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={type}
            onChange={() => changeInfo("type", type.current.value)}
            autoFocus
            margin="dense"
            label={t("19")}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={information}
            onChange={() =>
              changeInfo("information", information.current.value)
            }
            autoFocus
            margin="dense"
            label={t("20")}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={ssd}
            onChange={() => changeInfo("ssd", ssd.current.value)}
            autoFocus
            margin="dense"
            label={t("14")}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={ram}
            onChange={() => changeInfo("ram", ram.current.value)}
            autoFocus
            margin="dense"
            label={t("15")}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={bandwidth}
            onChange={() => changeInfo("bandwidth", bandwidth.current.value)}
            autoFocus
            margin="dense"
            label={t("16")}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={createNew}>{t("2")}</Button>
          <Button onClick={() => setOpen(false)}>{t("3")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogHosting;
