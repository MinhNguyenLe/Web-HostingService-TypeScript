// require("dotenv").config();
import React, { useState, useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import { USER_DOMAIN_BUYER } from "src/graphql/userProduct";

import TableList from "src/components/UserProduct/Domain/TableList";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function UserDomain() {
  const userRedux = useSelector((state: RootState) => state.user.account);
  const dispatch = useDispatch();
  const { listVPS, focusVPS } = bindActionCreators(actionCreators, dispatch);

  const [getUserDomainBuyer, { data: data, loading: load, error: err }] =
    useMutation(USER_DOMAIN_BUYER, {
      update(proxy, result) {
        console.log(result?.data?.getUserDomainBuyer);
      },
      variables: {
        id: userRedux._id,
      },
    });

  if (load) console.log("loading GRAPHQL", load);
  if (err) {
    console.log(JSON.stringify(err, null, 2));
  }

  useEffect(() => {
    getUserDomainBuyer();
  }, []);

  return load ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <TableList data={data?.getUserDomainBuyer} />
    </Grid>
  );
}

export default UserDomain;
