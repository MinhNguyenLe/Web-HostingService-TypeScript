import { useState } from "react";
import LoginStyle from "../../../components/LoginStyle";

import { Link, useNavigate } from "react-router-dom";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { gql, useMutation, useQuery } from "@apollo/client";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
  });
  const state = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const { buyerRedux } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const [verifyUser, { data, loading, error }] = useMutation(LOGIN, {
    update(proxy, result) {
      let data = result.data.login;
      navigate("../../management/profile/details", { replace: true });
      buyerRedux({
        email: data.user.email,
        idBuyer: data._id,
        idUser: data.user._id,
        name: data.name,
        userName: data.user.userName,
        quantity: data.quantity,
        typeBuyer: data.typeBuyer,
        isPermission: data.user.isPermission,
      });
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
      <span>{state.email}</span>
    </div>
  );
};

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(login: { email: $email, password: $password }) {
      _id
      user {
        userName
        email
        password
        isPermission
        _id
      }
      name
      typeBuyer
      quantity
      createdAt
      token
    }
  }
`;

export default Login;
