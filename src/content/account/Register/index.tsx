import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterStyle from "../../../components/RegisterStyle";

import { useMutation, useQuery } from "@apollo/client";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER } from "src/graphql/user";

const Register = () => {
  const dispatch = useDispatch();

  const { setBuyer } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    email: "",
    quantity: 0,
    contact: "",
  });
  const [addUser, { data, loading, error }] = useMutation(REGISTER, {
    update(proxy, result) {
      let data = result.data.register;
      navigate("../../dashboards/crypto", { replace: true });
      setBuyer(data);
    },
    variables: values,
  });

  if (loading) console.log("loading");
  if (error) console.log(JSON.stringify(error, null, 2));

  const submitRegister = () => {
    addUser();
  };
  return (
    <div>
      <RegisterStyle
        values={values}
        setValues={setValues}
        submitRegister={submitRegister}
      ></RegisterStyle>
    </div>
  );
};

export default Register;
