import React, { useState, useRef } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { experimentalStyled } from "@material-ui/core/styles";
import UploadTwoToneIcon from "@material-ui/icons/UploadTwoTone";

const Input = experimentalStyled("input")({
  display: "none",
});

const DialogDomain = ({ item, setItem, open, setOpen, createNew }) => {
  const { t } = useTranslation("dialog");

  const changeInfo = (type: string, value: string) => {
    if (type === "price") {
      setItem({ ...item, price: parseInt(value) });
    }
    if (type === "name") {
      setItem({ ...item, name: value });
    }
    if (type === "information") {
      setItem({ ...item, information: value });
    }
    if (type === "expiry") {
      setItem({ ...item, expiry: parseInt(value) });
    }
  };
  const imgRef = useRef<HTMLInputElement>(null);
  const inforRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const expiryRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ fontSize: "20px", minWidth: 280, width: "360px" }}>
          {t("1")}
        </DialogTitle>
        <DialogContent>
          <TextField
            inputRef={priceRef}
            onChange={() => changeInfo("price", priceRef.current.value)}
            autoFocus
            margin="dense"
            label={t("4")}
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={nameRef}
            onChange={() => changeInfo("name", nameRef.current.value)}
            autoFocus
            margin="dense"
            label={t("5")}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={inforRef}
            onChange={() => changeInfo("information", inforRef.current.value)}
            autoFocus
            margin="dense"
            label={t("7")}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={expiryRef}
            onChange={() => changeInfo("expiry", expiryRef.current.value)}
            autoFocus
            margin="dense"
            label={t("8")}
            type="text"
            fullWidth
            variant="standard"
          />
          <Input
            ref={imgRef}
            onChange={() => {
              setItem({ ...item, file: imgRef.current.files[0] });
            }}
            accept="image/*"
            id="change-cover"
            multiple
            type="file"
          />
          <label htmlFor="change-cover">
            <Button
              style={{ marginTop: "20px" }}
              startIcon={<UploadTwoToneIcon />}
              variant="contained"
              component="span"
            >
              {t("6")}
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={createNew}>{t("2")}</Button>
          <Button onClick={() => setOpen(false)}>{t("3")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogDomain;
