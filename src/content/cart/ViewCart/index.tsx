import { useState, useEffect, useRef } from "react";
import {
  Card,
  Grid,
  ListItem,
  Tooltip,
  IconButton,
  List,
  ListItemText,
  Checkbox,
  Divider,
  Button,
  useTheme,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";

import { useTranslation } from "react-i18next";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { handleBreakpoints } from "@material-ui/system";

import CartItem from "../CartItem";

const ButtonError = experimentalStyled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

const AvatarSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const ViewCart = () => {
  const theme = useTheme();

  const { t } = useTranslation(["cart"]);
  const navigate = useNavigate();

  const cartRedux = useSelector((state: RootState) => state.cart.choose);
  const buyHost = useSelector((state: RootState) => state.cart.buy.hosting);
  const buyDom = useSelector((state: RootState) => state.cart.buy.domain);
  const bVPS = useSelector((state: RootState) => state.cart.buy.vps);
  const buySV = useSelector((state: RootState) => state.cart.buy.server);
  const totalPriceRdux = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  const dispatch = useDispatch();
  const {
    cartHosting,
    buyHosting,
    setTotalPrice,
    buyVPS,
    buyServer,
    buyDomain,
  } = bindActionCreators(actionCreators, dispatch);
  /**
   * refresh checked and total price
   */
  useEffect(() => {
    setTotalPrice(0);
  }, []);

  const buyProduct = () => {
    navigate("./payment");
  };

  const handleChecked = (type, checked, item) => {
    if (type === "hosting") {
      const result = [...buyHost];
      if (checked) {
        result.push(item);
        buyHosting(result);
        setTotalPrice(totalPriceRdux + item.product.price);
      } else {
        buyHosting(
          result.filter((e) => {
            if (e._id !== item._id) {
              return e;
            }
          })
        );
        setTotalPrice(totalPriceRdux - item.product.price);
      }
    }
    if (type === "vps") {
      const result = [...bVPS];
      if (checked) {
        result.push(item);
        buyVPS(result);
        setTotalPrice(totalPriceRdux + item.product.price);
      } else {
        buyVPS(
          result.filter((e) => {
            if (e._id !== item._id) {
              return e;
            }
          })
        );
        setTotalPrice(totalPriceRdux - item.product.price);
      }
    }
    if (type === "server") {
      const result = [...buySV];
      if (checked) {
        result.push(item);
        buyServer(result);
        setTotalPrice(totalPriceRdux + item.product.price);
      } else {
        buyServer(
          result.filter((e) => {
            if (e._id !== item._id) {
              return e;
            }
          })
        );
        setTotalPrice(totalPriceRdux - item.product.price);
      }
    }
    if (type === "domain") {
      const result = [...buyDom];
      if (checked) {
        result.push(item);
        buyDomain(result);
        setTotalPrice(totalPriceRdux + item.product.price);
      } else {
        buyDomain(
          result.filter((e) => {
            if (e._id !== item._id) {
              return e;
            }
          })
        );
        setTotalPrice(totalPriceRdux - item.product.price);
      }
    }
  };

  const deleteItem = (type, item) => {
    if (type === "hosting") {
      cartHosting(
        [...cartRedux.hosting].filter((e) => {
          if (e._id !== item._id) return e;
        })
      );
      setTotalPrice(totalPriceRdux - item.product.price);
    }
  };

  return (
    <Grid container spacing={3} sx={{ marginTop: "20px" }}>
      <Grid sx={{ margin: "auto" }} item xs={10}>
        <Grid item xs={12}>
          <Card>
            <List>
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <Avatar src="/static/images/avatars/5.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: "subtitle2",
                    lineHeight: 1,
                  }}
                  primary="Hi! MinhLee"
                  secondary={t("3")}
                />
                <Button onClick={buyProduct} size="large" variant="contained">
                  {t("1")}
                </Button>
              </ListItem>

              {cartRedux.domain.map((item) => {
                return (
                  <CartItem
                    type="domain"
                    key={item._id}
                    item={item}
                    handleChecked={handleChecked}
                    deleteItem={deleteItem}
                  />
                );
              })}
              {cartRedux.hosting.map((item) => {
                return (
                  <CartItem
                    type="hosting"
                    key={item._id}
                    item={item}
                    handleChecked={handleChecked}
                    deleteItem={deleteItem}
                  />
                );
              })}
              {cartRedux.vps?.map((item) => {
                return (
                  <CartItem
                    type="vps"
                    key={item._id}
                    item={item}
                    handleChecked={handleChecked}
                    deleteItem={deleteItem}
                  />
                );
              })}
              {cartRedux.server?.map((item) => {
                return (
                  <CartItem
                    type="server"
                    key={item._id}
                    item={item}
                    handleChecked={handleChecked}
                    deleteItem={deleteItem}
                  />
                );
              })}
              <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: "subtitle2",
                    lineHeight: 1,
                  }}
                  primary="Total price"
                  secondary={t("3")}
                />
                <span>{totalPriceRdux}</span>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewCart;
