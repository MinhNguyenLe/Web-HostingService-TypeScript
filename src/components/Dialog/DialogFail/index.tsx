import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

export default function DialogFail({ open, setOpen, mess }) {
  const { t } = useTranslation("dialog");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t("35")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mess}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("36")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
