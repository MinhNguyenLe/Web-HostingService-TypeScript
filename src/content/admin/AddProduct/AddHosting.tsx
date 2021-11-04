// require("dotenv").config();
import React, { useState, useEffect } from "react";

import {
  Grid,
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

import { HOSTING, CREATE_HOSTING } from "src/graphql/product";

import HostingItem from "src/components/HostingItem";
import AddNewProduct from "src/components/Product/AddNewProduct";
import DialogHosting from "src/components/Dialog/DialogHosting";
import HostingTable from "src/components/HostingTable";

import { styled } from "@material-ui/core/styles";

function AddHosting() {
  const [open, setOpen] = useState<boolean>(false);
  const [item, setItem] = useState({
    SSDMemory: "",
    RAM: "",
    bandwidth: "",
    months: 0,
    price: 0,
    type: "",
    information: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const sx = {
    width: "290px",
    minWidth: 290,
  };
  const {
    loading: loadHosting,
    error: errHosting,
    data: dataHosting,
  } = useQuery(HOSTING);

  const [createHosting, { data, loading, error }] = useMutation(
    CREATE_HOSTING,
    {
      update(proxy, result) {
        let data = result?.data?.createHosting;
        console.log(data);
      },
      variables: item,
    }
  );
  if (loadHosting || loading) console.log("loading");
  if (errHosting || error) {
    console.log(JSON.stringify(errHosting || error, null, 2));
  }
  const createNew = () => {
    createHosting();
    setOpen(false);
    console.log(item);
  };
  return (
    <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
      <DialogHosting
        item={item}
        setItem={setItem}
        setOpen={setOpen}
        open={open}
        createNew={createNew}
      />
      <AddNewProduct sx={sx} handleClickOpen={handleClickOpen} />
      {dataHosting?.hosting ? (
        dataHosting?.hosting.map((item) => {
          return (
            <HostingItem
              select={() => console.log(111)}
              key={item._id}
              item={item}
            />
          );
        })
      ) : (
        <div>Loading ... </div>
      )}
      <HostingTable data={dataHosting?.hosting} />
    </Grid>
  );
}

export default AddHosting;
