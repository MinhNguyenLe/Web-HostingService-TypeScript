import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterStyle from "../../../components/RegisterStyle";

import { gql, useMutation, useQuery } from "@apollo/client";

const Register = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
    email: "",
    quantity: 0,
    name: "",
  });
  const [addUser, { data, loading, error }] = useMutation(REGISTER, {
    update(proxy, result) {
      console.log(proxy, result);
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

const REGISTER = gql`
  mutation register(
    $userName: String!
    $email: String!
    $password: String!
    $quantity: Int!
    $name: String!
  ) {
    register(
      register: {
        userName: $userName
        email: $email
        password: $password
        quantity: $quantity
        name: $name
      }
    ) {
      _id
      user {
        userName
        email
        password
      }
      name
      typeBuyer
      quantity
      createdAt
      token
    }
  }
`;

export default Register;
