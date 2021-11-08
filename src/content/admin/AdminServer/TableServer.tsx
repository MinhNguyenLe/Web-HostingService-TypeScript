// require("dotenv").config();
import React, { useState, useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import { SERVER, EDIT_SERVER, DELETE_SERVER } from "src/graphql/product";

import DialogServer from "src/components/Dialog/DialogServer";
import ServerTable from "src/components/ServerTable";

import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function TableServer() {
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const listServerRdux = useSelector((state: RootState) => state.server.list);
  const dispatch = useDispatch();
  const { listServer, focusServer } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [itemE, setItemE] = useState({
    id: "",
    name: "",
    domain: "",
    website: "",
    support: [],
    SSDMemory: "",
    RAM: "",
    bandwidth: "",
    months: 0,
    price: 0,
    type: "",
    information: "",
  });

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const {
    loading: loadServer,
    error: errServer,
    data: dataServer,
  } = useQuery(SERVER);

  useEffect(() => {
    listServer(dataServer?.servers);
  }, [loadServer]);

  const [editServer, { data: dataE, loading: loadingE, error: errorE }] =
    useMutation(EDIT_SERVER, {
      update(proxy, result) {
        listServer(result?.data?.editServer);
      },
      variables: itemE,
    });

  const [deleteServer, { data: dataD, loading: loadingD, error: errorD }] =
    useMutation(DELETE_SERVER, {
      update(proxy, result) {
        listServer(result?.data?.deleteServer);
      },
    });

  if (loadServer || loadingE || loadingD)
    console.log("loading GRAPHQL", loadServer || loadingE || loadingD);
  if (errServer || errorE || errorD) {
    console.log(JSON.stringify(errServer || errorE || errorD, null, 2));
  }
  const editFromTable = async () => {
    await editServer();
    setOpenEdit(false);
  };
  const deleteItem = (id) => {
    deleteServer({ variables: { id } });
  };
  return loadServer ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <ServerTable
        setItem={setItemE}
        data={listServerRdux}
        openDialog={handleClickOpenEdit}
        handleDelete={deleteItem}
      />
      <DialogServer
        page="edit"
        item={itemE}
        setItem={setItemE}
        setOpen={setOpenEdit}
        open={openEdit}
        handleSubmit={editFromTable}
      />
    </Grid>
  );
}

export default TableServer;
