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
import { Link, useNavigate } from "react-router-dom";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
interface availDomain {
  data: {
    DomainInfo: Object;
  };
}

const RegisterNameDomain = ({ setOpen, open, input, setInput, item }) => {
  const { t } = useTranslation("dialog");
  const navigate = useNavigate();
  const name = useRef<HTMLInputElement>(null);
  const [openFail, setOpenFail] = useState(false);

  const changeInfo = (value) => {
    setInput({ ...input, name: value });
  };

  const cartRedux = useSelector((state: RootState) => state.cart.choose);
  const dispatch = useDispatch();
  const { cartDomain } = bindActionCreators(actionCreators, dispatch);

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
          let newCart = [...cartRedux.domain];
          newCart.push({
            ...item,
            nameUrl: name.current.value,
          });
          cartDomain(newCart);
          navigate("../../management/cart", { replace: true });
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
