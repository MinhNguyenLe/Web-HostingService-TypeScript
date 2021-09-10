import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../../i18n/config';

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

  const { t } = useTranslation(['ns1', 'ns2']);

  const handleLogin = () => {
    if (email === '1' && password === '1') {
      setHelperText(`${t('login:5')}`);
      setError(false);
    } else {
      setHelperText(`${t('login:6')}`);
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
          <p className={classes.header}>{t('login:1')}</p>
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="email"
                type="email"
                label={`${t('login:2')}`}
                margin="normal"
                onChange={ChangeEmail}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label={`${t('login:3')}`}
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
              {t('login:1')}
            </Button>
          </CardActions>
        </Card>
      </form>
      <div className={classes.title}>
        {t('login:4')}&nbsp;
        <Link to="/account/Register">{t('login:1')}</Link>
      </div>
    </>
  );
};

export default Login;
