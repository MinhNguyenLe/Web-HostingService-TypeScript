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

import { VPS, EDIT_VPS, DELETE_VPS } from "src/graphql/product";

import DialogVPS from "src/components/Dialog/DialogVPS";
import VPSTable from "src/components/VPS/VPSTable";

import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function TableVPS() {
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const listVPSRdux = useSelector((state: RootState) => state.vps.list);
  const dispatch = useDispatch();
  const { listVPS, focusVPS } = bindActionCreators(actionCreators, dispatch);

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
  const { loading: loadVPS, error: errVPS, data: dataVPS } = useQuery(VPS);

  useEffect(() => {
    listVPS(dataVPS?.vps);
  }, [loadVPS]);

  const [editVPS, { data: dataE, loading: loadingE, error: errorE }] =
    useMutation(EDIT_VPS, {
      update(proxy, result) {
        listVPS(result?.data?.editVPS);
      },
      variables: itemE,
    });

  const [deleteVPS, { data: dataD, loading: loadingD, error: errorD }] =
    useMutation(DELETE_VPS, {
      update(proxy, result) {
        listVPS(result?.data?.deleteVPS);
      },
    });

  if (loadVPS || loadingE || loadingD)
    console.log("loading GRAPHQL", loadVPS || loadingE || loadingD);
  if (errVPS || errorE || errorD) {
    console.log(JSON.stringify(errVPS || errorE || errorD, null, 2));
  }
  const editFromTable = async () => {
    await editVPS();
    setOpenEdit(false);
  };
  const deleteItem = (id) => {
    deleteVPS({ variables: { id } });
  };
  return loadVPS ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <VPSTable
        setItem={setItemE}
        data={listVPSRdux}
        openDialog={handleClickOpenEdit}
        handleDelete={deleteItem}
      />
      <DialogVPS
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

export default TableVPS;
