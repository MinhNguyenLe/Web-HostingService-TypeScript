import { useState, MouseEvent, useRef } from "react";
import {
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Button,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";

import { useTranslation } from "react-i18next";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { gql, useMutation, useQuery } from "@apollo/client";

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
  const { t } = useTranslation(["cart"]);
  const navigate = useNavigate();
  const domainRedux = useSelector((state: RootState) => state.cart.domain);

  const oneDomain = useRef({
    nameUrl: "",
    user: "",
    domain: "",
    product: "",
  });

  const [buy, { data, loading, error }] = useMutation(BUY_ONE, {
    update(proxy, result) {
      // navigate("/payment", { replace: true });
      console.log(result.data.createUserDomain);
    },
    variables: {
      nameUrl: "hihihihi",
      user: "614ada30b7882e49b4405852",
      domain: "6149b5abbcbf0251e06d2368",
      product: "6149b5abbcbf0251e06d2366",
      // nameUrl: oneDomain.current.nameUrl,
      // user: oneDomain.current.user,
      // domain: oneDomain.current.domain,
      // product: oneDomain.current.product,
    },
  });

  if (loading) console.log("loading");
  if (error) console.log(JSON.stringify(error, null, 2));

  const buyOne = (item) => {
    oneDomain.current.nameUrl = item.nameUrl;
    oneDomain.current.domain = item.idDomain;
    oneDomain.current.user = "614ada30b7882e49b4405852";
    oneDomain.current.product = item.product.idProduct;
    console.log(oneDomain.current);
    buy();
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
                <Button size="large" variant="contained">
                  {t("1")}
                </Button>
              </ListItem>

              {domainRedux.map((item) => {
                return (
                  <div key={item.idDomain}>
                    <Divider component="li" />
                    <ListItem sx={{ p: 3 }}>
                      <ListItemAvatar sx={{ pr: 2 }}>
                        <AvatarSuccess>
                          <DoneTwoToneIcon />
                        </AvatarSuccess>
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
                        primary={`${item?.nameUrl + item?.dot}`}
                        secondary="Your Twitter account was last syncronized 6 days ago"
                      />
                      <Button
                        onClick={() => buyOne(item)}
                        size="large"
                        variant="outlined"
                      >
                        {t("2")}
                      </Button>
                    </ListItem>
                  </div>
                );
              })}
              {/* <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <AvatarSuccess>
                    <DoneTwoToneIcon />
                  </AvatarSuccess>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: "subtitle2",
                    lineHeight: 1,
                  }}
                  primary="Twitter"
                  secondary="Your Twitter account was last syncronized 6 days ago"
                />
                <Button size="large" variant="outlined">
                  {t("2")}
                </Button>
              </ListItem> */}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

const BUY_ONE = gql`
  mutation createUserDomain(
    $nameUrl: String!
    $user: ID!
    $domain: ID!
    $product: ID!
  ) {
    createUserDomain(
      createUserDomain: {
        nameUrl: $nameUrl
        user: $user
        domain: $domain
        product: $product
      }
    ) {
      _id
      userProduct {
        price
        months
        _id
      }
      nameUrl
      dot
    }
  }
`;

export default ViewCart;
