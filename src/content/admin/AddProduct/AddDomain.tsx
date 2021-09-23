// require("dotenv").config();
import React, { useState } from "react";

import { Grid, Card } from "@material-ui/core";

import { useTranslation } from "react-i18next";

import CardDomain from "../../../components/Domain/CardDomain";
import DialogDomain from "../../../components/Dialog/DialogDomain";
import AddNewProduct from "../../../components/Product/AddNewProduct";

import axios from "axios";

import { gql, useMutation, useQuery } from "@apollo/client";

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
      sx={{ paddingLeft: "24px", display: "flex", flexWrap: "wrap" }}
    >
      <DialogDomain
        item={item}
        setItem={setItem}
        open={open}
        setOpen={setOpen}
        createNew={createNew}
      />
      <AddNewProduct sx={sx} handleClickOpen={handleClickOpen} />
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
      <Card sx={{ margin: " 8px 16px 8px 0" }}>
        <CardDomain
          chooseDot={() => console.log(1111)}
          item={1}
          registerDomain={() => console.log("aaaaaaaaa")}
          image="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-link-dc6d553c49.svg"
          price="5000"
          information="sdjngf oiurnisurdnb iuehbius hgkregh "
        />
      </Card>
    </Grid>
  );
}

const CREATE_DOMAIN = gql`
  mutation createDomain(
    $dot: String!
    $information: String!
    $price: Float!
    $months: Int!
    $images: String!
  ) {
    createDomain(
      createDomain: {
        dot: $dot
        information: $information
        price: $price
        months: $months
        images: $images
      }
    ) {
      _id
      dot
      information
      images
      product {
        _id
        months
        price
      }
    }
  }
`;

const DOMAINS = gql`
  query domains {
    domains {
      _id
      dot
      information
      images
      product {
        _id
        months
        price
      }
    }
  }
`;

export default AddDomain;
