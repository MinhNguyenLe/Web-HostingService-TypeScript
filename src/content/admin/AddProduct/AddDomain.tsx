// require("dotenv").config();
import React, { useState } from "react";

import { Grid, Card } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import CardDomain from "../../../components/Domain/CardDomain";
import DialogDomain from "../../../components/Dialog/DialogDomain";
import AddNewProduct from "../../../components/Product/AddNewProduct";

import axios from "axios";

import { useMutation, useQuery } from "@apollo/client";
import { DOMAINS, CREATE_DOMAIN } from "src/graphql/product";

function AddDomain() {
  const { t } = useTranslation(["addproduct"]);

  const {
    loading: loadDomain,
    error: errDomain,
    data: allDomain,
  } = useQuery(DOMAINS);

  const [item, setItem] = useState({
    file: null,
    name: "",
    price: 0,
    expiry: 0,
    information: "",
    images: "",
  });
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [createDomain, { data, loading, error }] = useMutation(CREATE_DOMAIN, {
    update(proxy, result) {
      let data = result?.data?.createDomain;
      console.log(data);
    },
    variables: {
      images: item?.images,
      dot: item?.name,
      price: item?.price,
      months: item?.expiry,
      information: item?.information,
    },
  });
  if (loading || loadDomain) console.log("loading");
  if (error || errDomain) {
    if (error) console.log(JSON.stringify(error, null, 2));
    else console.log(JSON.stringify(errDomain, null, 2));
  }

  const createNew = () => {
    const formData = new FormData();
    formData.append("file", item?.file);
    formData.append("upload_preset", "leminh2k");
    axios
      .post("https://api.cloudinary.com/v1_1/djes0pztf/image/upload", formData)
      .then((res) => {
        setItem({ ...item, images: res?.data?.secure_url });
        createDomain();
        console.log(item);
      });
    setOpen(false);
  };

  const sx = {
    margin: " 8px 16px 8px 0",
    width: "320px",
    minWidth: 290,
    minHeight: 260,
  };
  return (
    <Grid
      container
      spacing={3}
      sx={{
        paddingLeft: "24px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Grid style={{ margin: " 8px 16px 8px 0", width: "200px" }}>
        <DialogDomain
          item={item}
          setItem={setItem}
          open={open}
          setOpen={setOpen}
          createNew={createNew}
        />
        <AddNewProduct handleClickOpen={handleClickOpen} />
      </Grid>
      {allDomain?.domains ? (
        allDomain?.domains.map((item) => {
          return (
            <Card sx={{ margin: " 8px 16px 8px 0" }} key={item._id}>
              <CardDomain
                chooseDot={() => console.log(1111)}
                item={1}
                registerDomain={() => console.log("aaaaaaaaa")}
                image={item["images"][0]}
                price={item?.product?.price}
                information={item?.information}
              />
            </Card>
          );
        })
      ) : (
        <div></div>
      )}
    </Grid>
  );
}

export default AddDomain;
