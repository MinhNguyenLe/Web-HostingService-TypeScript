import React from "react";
import ServerItem from "src/components/Server/ServerItem";

import { useMutation, useQuery } from "@apollo/client";
import { SERVER } from "src/graphql/product";

import { Link, useNavigate } from "react-router-dom";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

const Server = () => {
  const navigate = useNavigate();

  const cartRedux = useSelector((state: RootState) => state.cart.choose);
  const dispatch = useDispatch();
  const { cartServer } = bindActionCreators(actionCreators, dispatch);

  const {
    loading: loadServer,
    error: errServer,
    data: dataServer,
  } = useQuery(SERVER);
  if (loadServer) console.log("loading");
  if (errServer) {
    console.log(JSON.stringify(errServer, null, 2));
  }
  const select = (item) => {
    let newCart = [...cartRedux.server];
    newCart.push(item);
    cartServer(newCart);
    navigate("../../management/cart", { replace: true });
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: " auto 36px" }}>
      {dataServer?.servers ? (
        dataServer?.servers.map((item) => {
          return (
            <ServerItem
              choose={select}
              key={item._id}
              item={item}
              user="buyer"
            />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Server;
