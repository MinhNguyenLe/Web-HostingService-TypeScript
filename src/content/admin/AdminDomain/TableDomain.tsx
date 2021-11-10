// require("dotenv").config();
import React, { useState, useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import { DOMAINS } from "src/graphql/product";

import DomainTable from "src/components/Domain/DomainTable";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function TableDomain() {
  const userRedux = useSelector((state: RootState) => state.user.account);
  const dispatch = useDispatch();
  const { listVPS, focusVPS } = bindActionCreators(actionCreators, dispatch);

  const { loading: load, error: err, data } = useQuery(DOMAINS);

  if (load) console.log("loading GRAPHQL", load);
  if (err) {
    console.log(JSON.stringify(err, null, 2));
  }

  return load ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <DomainTable data={data?.domains} />
    </Grid>
  );
}

export default TableDomain;
