// require("dotenv").config();
import React, { useState, useEffect } from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import { useMutation, useQuery } from "@apollo/client";

import { VPS, CREATE_VPS, EDIT_VPS, DELETE_HOSTING } from "src/graphql/product";

import VPSItem from "src/components/VPSItem";
import AddNewProduct from "src/components/Product/AddNewProduct";
import DialogVPS from "src/components/Dialog/DialogVPS";
import HostingTable from "src/components/HostingTable";

import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

function AddVPS() {
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const listVPSRdux = useSelector((state: RootState) => state.vps.list);
  const dispatch = useDispatch();
  const { listVPS, focusVPS } = bindActionCreators(actionCreators, dispatch);

  const [item, setItem] = useState({
    name: "",
    domain: "",
    CPU: "",
    support: [],
    cloudStorage: "",
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
    CPU: "",
    support: [],
    cloudStorage: "",
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
  const { loading: loadingVPS, error: errVPS, data: dataVPS } = useQuery(VPS);

  useEffect(() => {
    listVPS(dataVPS?.vps);
  }, [loadingVPS]);

  const [createVPS, { data, loading, error }] = useMutation(CREATE_VPS, {
    update(proxy, result) {
      listVPS(result?.data?.createVPS);
    },
    variables: item,
  });

  const [editVPS, { data: dataE, loading: loadingE, error: errorE }] =
    useMutation(EDIT_VPS, {
      update(proxy, result) {
        listVPS(result?.data?.editVPS);
      },
      variables: itemE,
    });

  if (loadingVPS || loading || loadingE)
    console.log("loading GRAPHQL", loadingVPS || loading || loadingE);
  if (errVPS || error || errorE) {
    console.log(JSON.stringify(errVPS || error || errorE, null, 2));
  }
  const createNew = () => {
    createVPS();
    setOpenCreate(false);
    console.log(item);
  };
  const editFromTable = async () => {
    await editVPS();
    setOpenEdit(false);
  };
  const editFromItem = (item) => {
    setItemE({
      id: item._id,
      name: item.name,
      domain: item.domain,
      CPU: item.CPU,
      support: item.support,
      cloudStorage: item.cloudStorage,
      RAM: item.RAM,
      bandwidth: item.bandwidth,
      months: item.product.months,
      price: item.product.price,
      type: item.type,
      information: item.information,
    });
    focusVPS(item);
    setOpenEdit(true);
    console.log(itemE);
  };
  return loadingVPS ? (
    <CircularProgress />
  ) : (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid style={{ margin: " 8px 16px 8px 0", width: "360px" }}>
        <AddNewProduct handleClickOpen={handleClickOpenCreate} />
      </Grid>
      {listVPSRdux?.map((item) => {
        return (
          <VPSItem
            key={item._id}
            item={item}
            user="manager"
            choose={editFromItem}
          />
        );
      })}
      <DialogVPS
        page="create"
        item={item}
        setItem={setItem}
        setOpen={setOpenCreate}
        open={openCreate}
        handleSubmit={createNew}
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

export default AddVPS;
