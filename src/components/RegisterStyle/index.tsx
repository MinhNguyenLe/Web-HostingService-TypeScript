import { Link } from "react-router-dom";
import { useRef } from "react";
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
    // width: 320, => iphone5
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
    marginTop: "20px",
  },
  title: {
    textAlign: "center",
    marginTop: "20px",
  },
});

const RegisterStyle = ({ submitRegister, setValues, values }) => {
  const classes = useStyles();
  const { t } = useTranslation(["register"]);

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const memberRef = useRef<HTMLInputElement>(null);
  const contact = useRef<HTMLInputElement>(null);

  const errUserName = useRef({
    isErr: false,
    rules: [
      {
        isErr: false,
        type: "required",
        text: "This field is required",
      },
      {
        isErr: false,
        type: "min",
        text: "This field is required",
      },
      {
        isErr: false,
        type: "max",
        text: "This field is required",
      },
      {
        isErr: false,
        type: "existed",
        text: "This field is existed",
      },
    ],
    text: () => {
      // let rule  = {
      //   isErr: false,
      //   type: "existed",
      //   text: "This field is existed",}
      // [...errUserName.current.rules].forEach((rule,index,arr) => {
      //   if(rule.isErr) {
      //     arr.length = 0
      //   }
      // })

      // return rule.text
      return "";
    },
  });
  const errPassword = useRef({
    isErr: false,
    text: "",
  });
  const errName = useRef({
    isErr: false,
    text: "",
  });
  const errMember = useRef({
    isErr: false,
    text: "",
  });
  const errEmail = useRef({
    isErr: false,
    text: "",
  });

  const changeInfo = (value: string, type: string) => {
    if (type === "member") {
      setValues({ ...values, quantity: parseInt(value) });
    }
    if (type === "userName") {
      setValues({ ...values, userName: value });
    }
    if (type === "contact") {
      setValues({ ...values, contact: value });
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
                error={errUserName.current.isErr}
                helperText={errUserName.current.text}
                inputRef={userNameRef}
                fullWidth
                id="forgotPassword"
                type="text"
                label={t("2")}
                margin="normal"
                onChange={() =>
                  changeInfo(userNameRef.current.value, "userName")
                }
              ></TextField>
              <TextField
                error={errMember.current.isErr}
                helperText={errMember.current.text}
                inputRef={memberRef}
                fullWidth
                type="number"
                label={t("7")}
                margin="normal"
                onChange={() => changeInfo(memberRef.current.value, "member")}
              ></TextField>
              <TextField
                error={errName.current.isErr}
                helperText={errName.current.text}
                inputRef={contact}
                fullWidth
                type="text"
                label={t("8")}
                margin="normal"
                onChange={() => changeInfo(contact.current.value, "contact")}
              ></TextField>
              <TextField
                error={errEmail.current.isErr}
                helperText={errEmail.current.text}
                inputRef={emailRef}
                fullWidth
                id="email"
                type="email"
                label={t("3")}
                margin="normal"
                onChange={() => changeInfo(emailRef.current.value, "email")}
              />
              <TextField
                error={errPassword.current.isErr}
                helperText={errPassword.current.text}
                inputRef={passwordRef}
                fullWidth
                id="password"
                type="password"
                label={t("4")}
                margin="normal"
                onChange={() =>
                  changeInfo(passwordRef.current.value, "password")
                }
              ></TextField>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={submitRegister}
            >
              {t("1")}
            </Button>
          </CardActions>
        </Card>
      </form>
      <div className={classes.title}>
        {t("5")}&nbsp;
        <Link to="/account/Login">{t("6")}</Link>
      </div>
    </>
  );
};

export default RegisterStyle;
