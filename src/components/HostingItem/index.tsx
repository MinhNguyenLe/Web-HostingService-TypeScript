import * as React from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

const HostingItem = ({ select, item }) => {
  const { t } = useTranslation(["hosting"]);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 290, height: "380px" }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold" }}
            gutterBottom
            variant="h4"
            component="div"
          >
            {item.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.information}
          </Typography>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              paddingBottom: "0px !important",
            }}
          >
            <Typography variant="h1" color="secondary">
              {item.product.price}VNĐ
            </Typography>
            <Typography variant="h6" color="secondary">
              /{item.product.months} {t("4")}
            </Typography>
          </CardContent>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => select(item)}
          sx={{ width: "80%", borderRadius: "22px" }}
          size="large"
          variant="contained"
        >
          Select
        </Button>
      </CardActions>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0",
          }}
        >
          <Typography variant="caption">{t("1")}</Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
            {item.SSDMemory}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0",
          }}
        >
          <Typography variant="caption">{t("2")}</Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
            {item.RAM}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0",
          }}
        >
          <Typography variant="caption">{t("3")}</Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
            {item.bandwidth}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default HostingItem;
