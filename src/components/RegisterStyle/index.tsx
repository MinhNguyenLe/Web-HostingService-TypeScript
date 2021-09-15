import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Button,
  TextField,
  CardActions,
} from "@material-ui/core";

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

const RegisterStyle = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <p className={classes.header}>Đăng kí</p>
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Tên đăng nhập"
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Mật khẩu"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                id="forgotPassword"
                type="password"
                label="Nhập lại mật khẩu"
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
