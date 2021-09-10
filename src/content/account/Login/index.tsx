import { useState } from 'react';
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
  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState('');
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleLogin = () => {
    if (email === '1' && password === '1') {
      setHelperText('Đăng nhập Thành công');
      setError(false);
    } else {
      setHelperText('Tên đăng nhập hoặc mật khẩu không đúng');
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

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <p className={classes.header}>Đăng nhập</p>
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
              Đăng nhập
            </Button>
          </CardActions>
        </Card>
      </form>
      <div className={classes.title}>
        Bạn chưa có tài khoản ?&nbsp;
        <Link to="/account/Register">Đăng nhập</Link>
      </div>
    </>
  );
};

export default Login;
