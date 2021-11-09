// require("dotenv").config();
import React, { useState, useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import { USER } from "src/graphql/user";

import DialogVPS from "src/components/Dialog/DialogVPS";
import TableList from "src/components/UserProduct/VPS/TableList";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function UserVPS() {
  const listVPSRdux = useSelector((state: RootState) => state.vps.list);
  const dispatch = useDispatch();
  const { listVPS, focusVPS } = bindActionCreators(actionCreators, dispatch);

  const { loading: load, error: err, data } = useQuery(USER);

  if (load) console.log("loading GRAPHQL", load);
  if (err) {
    console.log(JSON.stringify(err, null, 2));
  }
  return load ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <TableList data={data.users} />
    </Grid>
  );
}

export default UserVPS;
