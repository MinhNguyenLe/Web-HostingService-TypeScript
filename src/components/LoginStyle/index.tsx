import { useRef } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Button,
  TextField,
  CardActions,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 400,
    margin: "8px auto",
    padding: "0 15px",
  },
  loginBtn: {
    marginTop: "16px",
    flexGrow: 1,
    backgroundColor: "#8c7cf0 !important",
    color: "#ffff !important",
    "&:hover": {
      backgroundColor: "rgb(112, 99, 192) !important",
    },
  },
  header: {
    textAlign: "center",
    fontSize: "35px",
    margin: "20px",
  },
  card: {
    marginTop: "80px",
  },
  title: {
    textAlign: "center",
    marginTop: "20px",
  },
});

const LoginStyle = ({ verifyLogin, setValues, values }) => {
  const classes = useStyles();
  const { t } = useTranslation(["login"]);

  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const changeInfo = (value: string, type: string) => {
    if (type === "member") {
      setValues({ ...values, quantity: parseInt(value) });
    }
    if (type === "userName") {
      setValues({ ...values, userName: value });
    }
    if (type === "name") {
      setValues({ ...values, name: value });
    }
    if (type === "email") {
      setValues({ ...values, email: value });
    }
    if (type === "password") {
      setValues({ ...values, password: value });
    }
  };
  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <p className={classes.header}>{t("1")}</p>
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="email"
                type="email"
                inputRef={emailRef}
                onChange={() => changeInfo(emailRef.current.value, "email")}
                label={t("2")}
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                inputRef={passwordRef}
                onChange={() =>
                  changeInfo(passwordRef.current.value, "password")
                }
                label={t("3")}
                margin="normal"
              ></TextField>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={verifyLogin}
            >
              {t("1")}
            </Button>
          </CardActions>
        </Card>
      </form>
      <div className={classes.title}>
        {t("5")} &nbsp;
        <Link to="/account/Register">{t("4")}</Link>
      </div>
    </>
  );
};

export default LoginStyle;
