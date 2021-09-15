import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterStyle from "../../../components/RegisterStyle";

import { gql, useMutation, useQuery } from "@apollo/client";

const Register = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [addUser, { data, loading, error }] = useMutation(REGISTER, {
    // update(proxy, result) {
    //   console.log(result);
    // },
    variables: values,
  });

  if (loading) console.log("loading");
  if (error) console.log(JSON.stringify(error, null, 2));

  const submitRegister = () => {
    addUser();
  };
  return (
    <>
      <RegisterStyle
        values={values}
        setValues={setValues}
        submitRegister={submitRegister}
      ></RegisterStyle>
    </>
  );
};

const REGISTER = gql`
  mutation register($userName: String!, $email: String!, $password: String!) {
    register(
      register: { userName: $userName, email: $email, password: $password }
    ) {
      _id
      email
      userName
      password
      createdAt
      token
    }
  }
`;

export default Register;
