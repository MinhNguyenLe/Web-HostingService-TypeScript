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

import Check from "@material-ui/icons/Check";

import { useTranslation } from "react-i18next";

import { styled } from "@material-ui/core/styles";

const InforTypography = styled(Typography)(({ theme }) => ({
  color: theme.customTheme.hostingCard.txInfor,
}));

const IconCheck = styled(Check)(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.iconTick,
  color: theme.customTheme.hostingCard.bg,
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
  color: theme.customTheme.hostingCard.promotion,
}));

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.bg,
}));

const SelectBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.bgSelect,
}));

const Line = styled("div")(({ theme }) => ({
  backgroundColor: theme.customTheme.hostingCard.lineBottom,
}));

const ServerItem = ({ choose, item, user }) => {
  const { t } = useTranslation(["server"]);

  return (
    <CustomCard sx={{ width: 360, margin: " 8px 16px 8px 0" }}>
      <CardActionArea>
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
              paddingBottom: "0px !important",
            }}
          >
            <PriceTypography variant="h1">
              {new Intl.NumberFormat("vn-VN", {
                style: "currency",
                currency: "VND",
              }).format(item.product.price)}
            </PriceTypography>
            <InforTypography variant="h6">
              /{item.product.months} {t("15")}
            </InforTypography>
          </CardContent>
          <InforTypography
            sx={{ fontWeight: "bold", fontSize: "20px", paddingTop: "16px" }}
            gutterBottom
          >
            {item.name}
          </InforTypography>
          <InforTypography>{item.type}</InforTypography>
        </CardContent>
      </CardActionArea>
      <Line
        style={{
          height: "2px",
          margin: "auto 48px",
        }}
      ></Line>
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
          <InforTypography
            sx={{ fontWeight: "500", display: "flex", alignItems: "center" }}
            variant="subtitle2"
          >
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.SSD} {t("21")}
          </InforTypography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0 !important",
          }}
        >
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.CPU} {t("8")}
          </InforTypography>
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
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.RAM} {t("7")}
          </InforTypography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0 !important",
          }}
        >
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.bandwidth} {t("9")}
          </InforTypography>
        </CardContent>
        {item.support.map((content) => (
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              width: "80%",
              padding: "6px 0 !important",
            }}
          >
            <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
              <IconCheck
                sx={{
                  marginRight: "8px",
                  borderRadius: "50%",
                  fontSize: "18px",
                  padding: "2px",
                  fontWeight: "bold",
                }}
              ></IconCheck>
              {content}
            </InforTypography>
          </CardContent>
        ))}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0 !important",
          }}
        >
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {item.HDD} {t("20")}
          </InforTypography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0 !important",
          }}
        >
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            <IconCheck
              sx={{
                marginRight: "8px",
                borderRadius: "50%",
                fontSize: "18px",
                padding: "2px",
                fontWeight: "bold",
              }}
            ></IconCheck>
            {t("19")}
            {item.timeSetup}
          </InforTypography>
        </CardContent>
        <CardContent
          sx={{
            margin: "auto 48px ",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "80%",
            padding: "6px 0 !important",
          }}
        >
          <InforTypography sx={{ fontWeight: "500" }} variant="subtitle2">
            {item.information}
          </InforTypography>
        </CardContent>
      </CardContent>
      <CardActions
        sx={{
          margin: "auto 48px ",
          padding: "0 0 32px 0 ",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SelectBtn
          onClick={() => choose(item)}
          sx={{
            width: "100%",
            borderRadius: "22px",
            fontWeight: "500",
          }}
          size="large"
          variant="contained"
        >
          {user === "buyer" ? t("13") : t("14")}
        </SelectBtn>
      </CardActions>
    </CustomCard>
  );
};

ServerItem.defaultProps = {
  item: {},
  choose: () => console.log("default"),
  user: "",
};

export default ServerItem;
