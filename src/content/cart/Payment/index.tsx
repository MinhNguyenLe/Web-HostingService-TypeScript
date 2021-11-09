import PaymentForm from "src/components/PaymentForm";
import { BUY_ALL } from "src/graphql/userProduct";
import { useMutation, useQuery } from "@apollo/client";

import { useEffect } from "react";
import {
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../CartItem";

const Payment = () => {
  const { t } = useTranslation(["cart"]);

  const payment = useSelector((state: RootState) => state.cart.buy);
  const buyerRdux = useSelector((state: RootState) => state.user);
  const totalPriceRdux = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  const dispatch = useDispatch();
  const { setBuyer } = bindActionCreators(actionCreators, dispatch);

  const [buyAllProduct, { data, loading, error }] = useMutation(BUY_ALL, {
    update(proxy, result) {
      setBuyer(result?.data?.buyAllProduct);
    },
  });
  if (loading) console.log("loading");
  if (error) {
    console.log(JSON.stringify(error, null, 2));
  }

  const submitPayment = async (resPayment) => {
    if (resPayment.status === "succeeded") {
      let domain = [],
        hosting = [],
        vps = [],
        server = [];
      [...payment.domain].forEach((e) => {
        domain.push({ _id: e._id, nameUrl: e.nameUrl });
      });
      [...payment.hosting].forEach((e) => {
        hosting.push(e._id);
      });
      [...payment.vps].forEach((e) => {
        vps.push(e._id);
      });
      [...payment.server].forEach((e) => {
        server.push(e._id);
      });

      console.log(
        domain,
        "------------",
        hosting,
        "------------",
        vps,
        "------------",
        server,
        "------",
        buyerRdux.account._id
      );
      await buyAllProduct({
        variables: {
          user: buyerRdux.account._id,
          domain: domain,
          hosting: hosting,
          vps: vps,
          server: server,
        },
      });
    } else {
      console.log("error payment", resPayment);
    }
  };

  /**
   * Card test ->
   * 1. 4242 4242 4242 4242 -> success
   * 2. 4000 0025 0000 3155 -> The card payment requires authentication.
   * 3. 4000 0000 0000 9995 -> The card is declined
   */
  return (
    <div>
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
                    primaryTypographyProps={{
                      variant: "h5",
                      gutterBottom: true,
                    }}
                    secondaryTypographyProps={{
                      variant: "subtitle2",
                      lineHeight: 1,
                    }}
                    primary="Hi! MinhLee"
                    secondary={t("3")}
                  />
                </ListItem>

                {payment.domain.map((item) => {
                  return (
                    <CartItem
                      page="payment"
                      type="domain"
                      key={item._id}
                      item={item}
                    />
                  );
                })}
                {payment.hosting.map((item) => {
                  return (
                    <CartItem
                      page="payment"
                      type="hosting"
                      key={item._id}
                      item={item}
                    />
                  );
                })}
                {payment.vps?.map((item) => {
                  return (
                    <CartItem
                      page="payment"
                      type="vps"
                      key={item._id}
                      item={item}
                    />
                  );
                })}
                {payment.server?.map((item) => {
                  return (
                    <CartItem
                      page="payment"
                      type="server"
                      key={item._id}
                      item={item}
                    />
                  );
                })}
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "h5",
                      gutterBottom: true,
                    }}
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
      <PaymentForm submitPayment={submitPayment} />
    </div>
  );
};

export default Payment;
