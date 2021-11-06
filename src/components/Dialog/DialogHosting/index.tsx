import React, { useState, useRef } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

const DialogHosting = ({ page, item, setItem, open, setOpen, createNew }) => {
  const { t } = useTranslation("dialog");

  const price = useRef<HTMLInputElement>(null);
  const months = useRef<HTMLInputElement>(null);
  const ram = useRef<HTMLInputElement>(null);
  const ssd = useRef<HTMLInputElement>(null);
  const bandwidth = useRef<HTMLInputElement>(null);
  const type = useRef<HTMLInputElement>(null);
  const information = useRef<HTMLInputElement>(null);
  const domain = useRef<HTMLInputElement>(null);
  const website = useRef<HTMLInputElement>(null);
  const support = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  /**
   * create new hosting
   */
  const changeInfo = (type: string, value: string) => {
    if (page === "create") {
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
    }
  };

  /**
   * change information hosting
   */
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{
            fontSize: "20px",
            paddingBottom: "0px",
          }}
        >
          {t("13")}
        </DialogTitle>
        <div>
          <div style={{ display: "flex" }}>
            <DialogContent sx={{ flex: 1, paddingBottom: "0px" }}>
              <TextField
                inputRef={name}
                onChange={() => changeInfo("name", name.current.value)}
                autoFocus
                margin="dense"
                label={t("22")}
                type="text"
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
                inputRef={price}
                onChange={() => changeInfo("price", price.current.value)}
                autoFocus
                margin="dense"
                label={t("18")}
                type="number"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogContent sx={{ flex: 1, paddingBottom: "0px" }}>
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
                inputRef={domain}
                onChange={() => changeInfo("domain", domain.current.value)}
                autoFocus
                margin="dense"
                label={t("23")}
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                inputRef={website}
                onChange={() => changeInfo("website", website.current.value)}
                autoFocus
                margin="dense"
                label={t("24")}
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogContent sx={{ flex: 1, paddingBottom: "0px" }}>
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
                onChange={() =>
                  changeInfo("bandwidth", bandwidth.current.value)
                }
                autoFocus
                margin="dense"
                label={t("16")}
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
          </div>
          <div style={{ display: "flex" }}>
            <DialogContent sx={{ paddingTop: "0px" }}>
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
            </DialogContent>
            <DialogContent sx={{ paddingTop: "0px" }}>
              <TextField
                inputRef={support}
                onChange={() => changeInfo("support", support.current.value)}
                autoFocus
                margin="dense"
                label={t("21")}
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
          </div>
        </div>
        <DialogActions>
          {page === "create" ? (
            <Button onClick={createNew}>{t("2")}</Button>
          ) : (
            // page === "edit"
            <Button onClick={createNew}>{t("25")}</Button>
          )}
          <Button onClick={() => setOpen(false)}>{t("3")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogHosting;
