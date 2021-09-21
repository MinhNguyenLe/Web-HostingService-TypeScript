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

const DialogDomain = ({ setItem, open, setOpen, createNew }) => {
  const { t } = useTranslation("dialog");

  const imgRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ minWidth: 280, width: "360px" }}>
          {t("1")}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            label={t("4")}
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label={t("5")}
            type="text"
            fullWidth
            variant="standard"
          />
          <Input
            ref={imgRef}
            onChange={() => {
              setItem({ file: imgRef.current.files[0] });
            }}
            accept="image/*"
            id="change-cover"
            multiple
            type="file"
          />
          <label htmlFor="change-cover" style={{ marginTop: "20px" }}>
            <Button
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
