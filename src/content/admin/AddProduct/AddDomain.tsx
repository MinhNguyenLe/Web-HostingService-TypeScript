// require("dotenv").config();
import React, { useState } from "react";

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

  const [item, setItem] = useState({
    file: null,
  });
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const createNew = () => {
    const formData = new FormData();
    formData.append("file", item?.file);
    formData.append("upload_preset", "leminh2k");
    axios.post(process.env.API_CLOUDINARY, formData).then((res) => {
      console.log(res?.data?.secure_url);
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

export default AddDomain;
