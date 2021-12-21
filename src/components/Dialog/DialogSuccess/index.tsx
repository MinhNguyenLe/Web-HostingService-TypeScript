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
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function DialogSuccess({ open, setOpen, mess,link }) {
  const { t } = useTranslation("dialog");
const navigate = useNavigate()
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
          <Button onClick={()=>{
navigate(link)
          }}>{t("39")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
