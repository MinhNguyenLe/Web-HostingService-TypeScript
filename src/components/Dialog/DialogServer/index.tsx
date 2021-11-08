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
  const serverRdux = useSelector((state: RootState) => state.server);

  const price = useRef<HTMLInputElement>(null);
  const months = useRef<HTMLInputElement>(null);
  const ram = useRef<HTMLInputElement>(null);
  const SSD = useRef<HTMLInputElement>(null);
  const bandwidth = useRef<HTMLInputElement>(null);
  const type = useRef<HTMLInputElement>(null);
  const information = useRef<HTMLInputElement>(null);
  const HDD = useRef<HTMLInputElement>(null);
  const CPU = useRef<HTMLInputElement>(null);
  const support = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const timeSetup = useRef<HTMLInputElement>(null);
  /**
   * create new server
   */
  const changeInfo = (type: string, value: string) => {
    if (type === "SSD") {
      console.log(item);
      setItem({ ...item, SSD: value });
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
    if (type === "HDD") {
      setItem({ ...item, HDD: value });
    }
    if (type === "CPU") {
      setItem({ ...item, CPU: value });
    }
    if (type === "support") {
      setItem({ ...item, support: [value] });
    }
    if (type === "timeSetup") {
      setItem({ ...item, timeSetup: value });
    }
  };

  /**
   * change information server
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
                defaultValue={page === "edit" ? serverRdux.server.name : ""}
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
                defaultValue={page === "edit" ? serverRdux.server.type : ""}
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
                  page === "edit"
                    ? serverRdux.server.product.price.toString()
                    : ""
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
                  page === "edit"
                    ? serverRdux.server.product.months.toString()
                    : ""
                }
              />
              <TextField
                inputRef={HDD}
                onChange={() => changeInfo("HDD", HDD.current.value)}
                autoFocus
                margin="dense"
                label={t("30")}
                type="text"
                fullWidth
                variant="standard"
                defaultValue={page === "edit" ? serverRdux.server.HDD : ""}
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
                defaultValue={page === "edit" ? serverRdux.server.CPU : ""}
              />
            </DialogContent>
            <DialogContent sx={{ flex: 1, paddingBottom: "0px" }}>
              <TextField
                inputRef={SSD}
                onChange={() => changeInfo("SSD", SSD.current.value)}
                autoFocus
                margin="dense"
                label={t("14")}
                type="text"
                fullWidth
                variant="standard"
                defaultValue={page === "edit" ? serverRdux.server.SSD : ""}
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
                defaultValue={page === "edit" ? serverRdux.server.RAM : ""}
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
                defaultValue={
                  page === "edit" ? serverRdux.server.bandwidth : ""
                }
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
                defaultValue={
                  page === "edit" ? serverRdux.server.information : ""
                }
              />
              <TextField
                inputRef={support}
                onChange={() => changeInfo("support", support.current.value)}
                autoFocus
                margin="dense"
                label={t("21")}
                type="text"
                fullWidth
                variant="standard"
                defaultValue={page === "edit" ? serverRdux.server.support : ""}
              />
            </DialogContent>
            <DialogContent sx={{ paddingTop: "0px" }}>
              <TextField
                inputRef={timeSetup}
                onChange={() =>
                  changeInfo("timeSetup", timeSetup.current.value)
                }
                autoFocus
                margin="dense"
                label={t("29")}
                type="text"
                fullWidth
                variant="standard"
                defaultValue={
                  page === "edit" ? serverRdux.server.timeSetup : ""
                }
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
