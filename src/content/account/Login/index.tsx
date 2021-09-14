import { useState } from "react";
import LoginStyle from "../../../components/LoginStyle";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const state = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  const { login } = bindActionCreators(actionCreators, dispatch);

  const verifyLogin = () => {
    login({
      email: "111",
      password: "222",
    });
    console.log(1);
  };
  return (
    <div>
      <LoginStyle verifyLogin={verifyLogin} />
      <span>{state.email}</span>
    </div>
  );
};

export default Login;
