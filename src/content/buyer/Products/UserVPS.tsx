// require("dotenv").config();
import React, { useState, useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import { USER_VPS_BUYER } from "src/graphql/userProduct";

import DialogVPS from "src/components/Dialog/DialogVPS";
import TableList from "src/components/User/UserVPS/TableList";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function UserVPS() {
  const userRedux = useSelector((state: RootState) => state.user.account);

  const dispatch = useDispatch();
  const { listVPS, focusVPS } = bindActionCreators(actionCreators, dispatch);

  const [getUserVPSBuyer, { data: data, loading: load, error: err }] =
    useMutation(USER_VPS_BUYER, {
      update(proxy, result) {
        console.log(result?.data?.getUserVPSBuyer);
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
    getUserVPSBuyer();
  }, []);
  return load ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <TableList data={data?.getUserVPSBuyer} />
    </Grid>
  );
}

export default UserVPS;
