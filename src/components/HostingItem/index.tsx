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

const HostingItem = ({}) => {
  const { t } = useTranslation(["register"]);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 290 }}>
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
            Single Shared Hosting
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ideal solution for beginners
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
              50.000 VNĐ
            </Typography>
            <Typography variant="h6" color="secondary">
              /năm
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
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
            30GB{" "}
          </Typography>
          <Typography variant="caption" color="#333">
            {" "}
            SSD Storage
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
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
            30GB{" "}
          </Typography>
          <Typography variant="caption" color="#333">
            {" "}
            SSD Storage
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
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
            30GB{" "}
          </Typography>
          <Typography variant="caption" color="#333">
            {" "}
            SSD Storage
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
          <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
            30GB{" "}
          </Typography>
          <Typography variant="caption" color="#333">
            {" "}
            SSD Storage
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default HostingItem;
