import { useState } from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Button,
  TextField,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 400,
    margin: '8px auto',
    padding: '0 15px',
  },
  loginBtn: {
    marginTop: '16px',
    flexGrow: 1,
    backgroundColor: '#8c7cf0 !important',
    color: '#ffff !important',
    '&:hover': {
      backgroundColor: 'rgb(112, 99, 192) !important',
    },
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '35px',
    margin: '20px',
  },
  card: {
    marginTop: '80px',
  },
  title: {
    textAlign: 'center',
    marginTop: '20px',
  },
});

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState('');
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleLogin = () => {
    // check input
    if (email !== '' || password !== '' || forgotPassword !== '') {
      setHelperText('Đăng ký Thành công');
      setError(false);
    } else {
      setHelperText('Bạn chưa nhập tên đăng nhập hoặc mật khẩu');
      setError(true);
      return;
    }

    // check password
    if (password !== forgotPassword) {
      setHelperText('Mật khẩu không trùng khớp');
      setError(true);
    }
  };

  const ChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const ChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const ChangeForgotPassword: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setForgotPassword(event.target.value);
  };

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <p className={classes.header}>Đăng kí</p>
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="email"
                type="email"
                label="Tên đăng nhập"
                margin="normal"
                onChange={ChangeEmail}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label="Mật khẩu"
                margin="normal"
                onChange={ChangePassword}
              ></TextField>
              <TextField
                error={error}
                fullWidth
                id="forgotPassword"
                type="password"
                label="Nhập lại mật khẩu"
                margin="normal"
                onChange={ChangeForgotPassword}
                helperText={helperText}
              ></TextField>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={handleLogin}
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

export default Login;
