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

import gql from "graphql-tag";

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

const RegisterStyle = ({ submitRegister, setValues, values }) => {
  const classes = useStyles();

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <p className={classes.header}>Đăng kí</p>
          <CardContent>
            <div>
              <TextField
                inputRef={userNameRef}
                fullWidth
                id="forgotPassword"
                type="text"
                label="Tên người dùng"
                margin="normal"
                onChange={() => {
                  setValues({ ...values, userName: userNameRef.current.value });
                }}
              ></TextField>
              <TextField
                inputRef={emailRef}
                fullWidth
                id="email"
                type="email"
                label="Tên đăng nhập"
                margin="normal"
                onChange={() => {
                  setValues({ ...values, email: emailRef.current.value });
                }}
              />
              <TextField
                inputRef={passwordRef}
                fullWidth
                id="password"
                type="password"
                label="Mật khẩu"
                margin="normal"
                onChange={() => {
                  setValues({
                    ...values,
                    password: passwordRef.current.value,
                  });
                }}
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
              Đăng kí
            </Button>
          </CardActions>
        </Card>
      </form>
      <div className={classes.title}>
        Bạn đã có tài khoản ?&nbsp;
        <Link to="/account/Login">Đăng kí</Link>
      </div>
    </>
  );
};

export default RegisterStyle;
