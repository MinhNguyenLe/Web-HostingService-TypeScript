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

import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";
import Text from "src/components/Text";
import Label from "src/components/Label";

import { useTranslation } from "react-i18next";

import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import { experimentalStyled } from "@material-ui/core/styles";

import CardDomain from "../../../components/CardDomain";
import DialogDomain from "../../../components/DialogDomain";

import axios from "axios";

import { gql, useMutation, useQuery } from "@apollo/client";

const CardAddAction = experimentalStyled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
);

const AvatarAddWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

function AddDomain() {
  const { t } = useTranslation(["addproduct"]);

  const [dataDomain, setDataDomain] = useState();
  // const {
  //   loading: loadingDomain,
  //   error: errorDomain,
  //   data: dataDomain,
  // } = useQuery(DOMAINS);
  const listDomain = useQuery(DOMAINS);

  useEffect(() => {
    if (listDomain.loading) {
      console.log("Loading list of list Domain");
    } else {
      setDataDomain(listDomain.data);
      console.log(listDomain.data);
    }
  }, []);

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

  if (loading) console.log("loading");
  if (error) console.log(JSON.stringify(error, null, 2));

  const createNew = () => {
    console.log(item);

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
      <Card
        onClick={handleClickOpen}
        sx={{
          margin: " 8px 16px 8px 0",
          width: "320px",
          minWidth: 290,
          minHeight: 260,
        }}
      >
        <Tooltip arrow title={t("3")}>
          <CardAddAction>
            <CardActionArea sx={{ px: 1 }}>
              <CardContent>
                <AvatarAddWrapper>
                  <AddTwoToneIcon fontSize="large" />
                </AvatarAddWrapper>
              </CardContent>
            </CardActionArea>
          </CardAddAction>
        </Tooltip>
      </Card>
      <Card sx={{ margin: " 8px 16px 8px 0" }}>
        <CardDomain />
      </Card>
      <Card sx={{ margin: " 8px 16px 8px 0" }}>
        <CardDomain />
      </Card>
      <Card sx={{ margin: " 8px 16px 8px 0" }}>
        <CardDomain />
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
`;

export default AddDomain;
