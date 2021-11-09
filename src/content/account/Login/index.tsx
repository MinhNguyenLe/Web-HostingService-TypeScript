import { useState } from "react";
import LoginStyle from "../../../components/LoginStyle";

import { Link, useNavigate } from "react-router-dom";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { useMutation, useQuery } from "@apollo/client";
import { LOGIN } from "src/graphql/user";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
  });
  const state = useSelector((state: RootState) => state.user.account);
  const dispatch = useDispatch();
  const { setBuyer } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const [verifyUser, { data, loading, error }] = useMutation(LOGIN, {
    update(proxy, result) {
      let data = result.data.login;
      navigate("../../dashboards/crypto", { replace: true });
      setBuyer(data);
    },
    variables: values,
  });

  if (loading) console.log("loading");
  if (error) console.log(JSON.stringify(error, null, 2));

  const verifyLogin = () => {
    verifyUser();
  };
  return (
    <div>
      <LoginStyle
        values={values}
        setValues={setValues}
        verifyLogin={verifyLogin}
      />
    </div>
  );
};

export default Login;
