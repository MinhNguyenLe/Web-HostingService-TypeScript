import React, { useEffect, useRef } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { RootState } from "src/redux/reducers";
import { useDispatch, useSelector } from "react-redux";

const DialogServer = ({ page, item, setItem, open, setOpen, handleSubmit }) => {
  const { t } = useTranslation("dialog");
  const vpsRdux = useSelector((state: RootState) => state.vps);

  const price = useRef<HTMLInputElement>(null);
  const months = useRef<HTMLInputElement>(null);
  const ram = useRef<HTMLInputElement>(null);
  const cloudStorage = useRef<HTMLInputElement>(null);
  const bandwidth = useRef<HTMLInputElement>(null);
  const type = useRef<HTMLInputElement>(null);
  const information = useRef<HTMLInputElement>(null);
  const domain = useRef<HTMLInputElement>(null);
  const CPU = useRef<HTMLInputElement>(null);
  const support = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  /**
   * create new vps
   */
  const changeInfo = (type: string, value: string) => {
    if (type === "cloudStorage") {
      console.log(item);
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
    if (type === "name") {
      setItem({ ...item, name: value });
    }
    if (type === "domain") {
      setItem({ ...item, domain: value });
    }
    if (type === "CPU") {
      setItem({ ...item, CPU: value });
    }
    if (type === "support") {
      setItem({ ...item, support: [value] });
    }
  };

  /**
   * change information vps
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
          {page === "create" ? t("13") : t("25")}
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
                defaultValue={page === "edit" ? vpsRdux.vps.name : ""}
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
                defaultValue={page === "edit" ? vpsRdux.vps.type : ""}
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
                defaultValue={
                  page === "edit" ? vpsRdux.vps.product.price.toString() : ""
                }
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
                defaultValue={
                  page === "edit" ? vpsRdux.vps.product.months.toString() : ""
                }
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
                defaultValue={page === "edit" ? vpsRdux.vps.domain : ""}
              />
              <TextField
                inputRef={CPU}
                onChange={() => changeInfo("CPU", CPU.current.value)}
                autoFocus
                margin="dense"
                label={t("27")}
                type="text"
                fullWidth
                variant="standard"
                defaultValue={page === "edit" ? vpsRdux.vps.CPU : ""}
              />
            </DialogContent>
            <DialogContent sx={{ flex: 1, paddingBottom: "0px" }}>
              <TextField
                inputRef={cloudStorage}
                onChange={() =>
                  changeInfo("cloudStorage", cloudStorage.current.value)
                }
                autoFocus
                margin="dense"
                label={t("28")}
                type="text"
                fullWidth
                variant="standard"
                defaultValue={page === "edit" ? vpsRdux.vps.cloudStorage : ""}
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
                defaultValue={page === "edit" ? vpsRdux.vps.RAM : ""}
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
                defaultValue={page === "edit" ? vpsRdux.vps.bandwidth : ""}
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
                defaultValue={page === "edit" ? vpsRdux.vps.information : ""}
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
                defaultValue={page === "edit" ? vpsRdux.vps.support : ""}
              />
            </DialogContent>
          </div>
        </div>
        <DialogActions>
          <CircularProgress
            sx={{ width: "20px !important", height: "20px !important" }}
          />
          <Button onClick={handleSubmit}>
            {page === "create" ? t("2") : t("26")}{" "}
          </Button>
          <Button onClick={() => setOpen(false)} disabled={true}>
            {t("3")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogServer;
