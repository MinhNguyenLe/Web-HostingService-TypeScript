// require("dotenv").config();
import React, { useState, useEffect } from "react";

import {
  Grid,
  CircularProgress,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button,
  CardActionArea,
  Tooltip,
  Avatar,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import {
  HOSTING,
  CREATE_HOSTING,
  EDIT_HOSTING,
  DELETE_HOSTING,
} from "src/graphql/product";

import HostingItem from "src/components/HostingItem";
import AddNewProduct from "src/components/Product/AddNewProduct";
import DialogHosting from "src/components/Dialog/DialogHosting";
import HostingTable from "src/components/HostingTable";

import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function AddHosting() {
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const listHostRdux = useSelector((state: RootState) => state.hostDetail.list);
  const dispatch = useDispatch();
  const { listHosting, focusHosting } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [item, setItem] = useState({
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

  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const {
    loading: loadHosting,
    error: errHosting,
    data: dataHosting,
  } = useQuery(HOSTING);

  useEffect(() => {
    listHosting(dataHosting?.hosting);
  }, [loadHosting]);

  const [createHosting, { data, loading, error }] = useMutation(
    CREATE_HOSTING,
    {
      update(proxy, result) {
        listHosting(result?.data?.createHosting);
      },
      variables: item,
    }
  );

  const [editHosting, { data: dataE, loading: loadingE, error: errorE }] =
    useMutation(EDIT_HOSTING, {
      update(proxy, result) {
        listHosting(result?.data?.editHosting);
      },
      variables: itemE,
    });

  const [deleteHosting, { data: dataD, loading: loadingD, error: errorD }] =
    useMutation(DELETE_HOSTING, {
      update(proxy, result) {
        listHosting(result?.data?.deleteHosting);
      },
    });

  if (loadHosting || loading || loadingE || loadingD)
    console.log(
      "loading GRAPHQL",
      loadHosting || loading || loadingE || loadingD
    );
  if (errHosting || error || errorE || errorD) {
    console.log(
      JSON.stringify(errHosting || error || errorE || errorD, null, 2)
    );
  }
  const createNew = () => {
    createHosting();
    setOpenCreate(false);
    console.log(item);
  };
  const editFromTable = async () => {
    await editHosting();
    setOpenEdit(false);
  };
  const editFromItem = (item) => {
    focusHosting(item);
    setOpenEdit(true);
    console.log(item);
  };
  const deleteItem = (id) => {
    deleteHosting({ variables: { id } });
  };
  return loadHosting ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid style={{ margin: " 8px 16px 8px 0", width: "360px" }}>
        <AddNewProduct handleClickOpen={handleClickOpenCreate} />
      </Grid>
      {listHostRdux?.map((item) => {
        return (
          <HostingItem
            key={item._id}
            item={item}
            user="manager"
            choose={editFromItem}
          />
        );
      })}
      <HostingTable
        setItem={setItemE}
        data={listHostRdux}
        openDialog={handleClickOpenEdit}
        handleDelete={deleteItem}
      />
      <DialogHosting
        page="create"
        item={item}
        setItem={setItem}
        setOpen={setOpenCreate}
        open={openCreate}
        handleSubmit={createNew}
      />
      <DialogHosting
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

export default AddHosting;
