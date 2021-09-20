import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterStyle from "../../../components/RegisterStyle";

import { gql, useMutation, useQuery } from "@apollo/client";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const buyer = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const { buyerRedux } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    email: "",
    quantity: 0,
    name: "",
  });
  const [addUser, { data, loading, error }] = useMutation(REGISTER, {
    update(proxy, result) {
      let data = result.data.register;
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

export default Register;
