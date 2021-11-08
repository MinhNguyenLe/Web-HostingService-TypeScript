// require("dotenv").config();
import React, { useState, useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import {
  SERVER,
  CREATE_SERVER,
  EDIT_SERVER,
  DELETE_HOSTING,
} from "src/graphql/product";

import ServerItem from "src/components/ServerItem";
import AddNewProduct from "src/components/Product/AddNewProduct";
import DialogServer from "src/components/Dialog/DialogServer";
import ServerTable from "src/components/ServerTable";

import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function AddServer() {
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const listServerRdux = useSelector((state: RootState) => state.server.list);
  const dispatch = useDispatch();
  const { listServer, focusServer } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [item, setItem] = useState({
    name: "",
    HDD: "",
    CPU: "",
    support: [],
    SSD: "",
    RAM: "",
    bandwidth: "",
    months: 0,
    price: 0,
    type: "",
    information: "",
    timeSetup: "",
  });

  const [itemE, setItemE] = useState({
    id: "",
    name: "",
    HDD: "",
    CPU: "",
    support: [],
    SSD: "",
    RAM: "",
    bandwidth: "",
    months: 0,
    price: 0,
    type: "",
    information: "",
    timeSetup: "",
  });

  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };
  const {
    loading: loadingServer,
    error: errServer,
    data: dataServer,
  } = useQuery(SERVER);

  useEffect(() => {
    listServer(dataServer?.servers);
    console.log(dataServer);
  }, [loadingServer]);

  const [createServer, { data, loading, error }] = useMutation(CREATE_SERVER, {
    update(proxy, result) {
      listServer(result?.data?.createServer);
    },
    variables: item,
  });

  const [editServer, { data: dataE, loading: loadingE, error: errorE }] =
    useMutation(EDIT_SERVER, {
      update(proxy, result) {
        listServer(result?.data?.editServer);
      },
      variables: itemE,
    });

  if (loadingServer || loading || loadingE)
    console.log("loading GRAPHQL", loadingServer || loading || loadingE);
  if (errServer || error || errorE) {
    console.log(JSON.stringify(errServer || error || errorE, null, 2));
  }
  const createNew = () => {
    createServer();
    setOpenCreate(false);
    console.log(item);
  };
  const editFromTable = async () => {
    await editServer();
    setOpenEdit(false);
  };
  const editFromItem = (item) => {
    setItemE({
      id: item._id,
      name: item.name,
      HDD: item.HDD,
      CPU: item.CPU,
      support: item.support,
      SSD: item.SSD,
      RAM: item.RAM,
      bandwidth: item.bandwidth,
      months: item.product.months,
      price: item.product.price,
      type: item.type,
      information: item.information,
      timeSetup: item.timeSetup,
    });
    focusServer(item);
    setOpenEdit(true);
    console.log(itemE);
  };
  return loadingServer ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid style={{ margin: " 8px 16px 8px 0", width: "360px" }}>
        <AddNewProduct handleClickOpen={handleClickOpenCreate} />
      </Grid>
      {listServerRdux?.map((item) => {
        return (
          <ServerItem
            key={item._id}
            item={item}
            user="manager"
            choose={editFromItem}
          />
        );
      })}
      <DialogServer
        page="create"
        item={item}
        setItem={setItem}
        setOpen={setOpenCreate}
        open={openCreate}
        handleSubmit={createNew}
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

export default AddServer;
