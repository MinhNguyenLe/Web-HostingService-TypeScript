import React from "react";
import HostingItem from "src/components/HostingItem";

import { useMutation, useQuery } from "@apollo/client";
import { HOSTING } from "src/graphql/product";

import { Link, useNavigate } from "react-router-dom";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

const Hosting = () => {
  const navigate = useNavigate();

  const cartRedux = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { cartHosting, cartDomain } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const {
    loading: loadHosting,
    error: errHosting,
    data: dataHosting,
  } = useQuery(HOSTING);
  if (loadHosting) console.log("loading");
  if (errHosting) {
    console.log(JSON.stringify(errHosting, null, 2));
  }
  const selectHosting = (item) => {
    let newCart = [];
    newCart.push(item);
    cartHosting(newCart);
    navigate("../../management/cart", { replace: true });
  };
  return (
    <div>
      {dataHosting?.hosting ? (
        dataHosting?.hosting.map((item) => {
          return (
            <HostingItem select={selectHosting} key={item._id} item={item} />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Hosting;
