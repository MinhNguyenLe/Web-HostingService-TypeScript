import { useState, MouseEvent, useRef } from "react";
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

  const [hostCheck, setHostCheck] = useState([]);

  const cartRedux = useSelector((state: RootState) => state.cart.choose);
  const buyHost = useSelector((state: RootState) => state.cart.buy.hosting);

  const dispatch = useDispatch();
  const { cartHosting, buyHosting } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const buyProduct = () => {
    navigate("./payment");
  };

  const handleChecked = (value, item) => {
    const result = [...buyHost];
    if (value) {
      result.push(item);
      buyHosting(result);
    } else {
      buyHosting(
        result.filter((e) => {
          if (e._id !== item._id) return e;
        })
      );
    }
  };

  const deleteItem = (type, item) => {
    if (type === "hosting") {
      cartHosting(
        [...cartRedux.hosting].filter((e) => {
          if (e._id !== item._id) return e;
        })
      );
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
                      <ButtonError size="large" variant="outlined">
                        {t("2")}
                      </ButtonError>
                    </ListItem>
                  </div>
                );
              })}
              {cartRedux.hosting.map((item) => {
                return (
                  <div key={item._id}>
                    <Divider component="li" />
                    <ListItem sx={{ p: 3 }}>
                      <ListItemAvatar sx={{ pr: 2 }}></ListItemAvatar>
                      <ListItemText
                        primaryTypographyProps={{
                          variant: "h5",
                          gutterBottom: true,
                        }}
                        secondaryTypographyProps={{
                          variant: "subtitle2",
                          lineHeight: 1,
                        }}
                        primary={item.type}
                        secondary="Your Twitter account was last syncronized 6 days ago"
                      />
                      <Checkbox
                        onChange={(e) => handleChecked(e.target.checked, item)}
                        defaultChecked={false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                      <Tooltip placement="top" title="Delete" arrow>
                        <IconButton
                          sx={{
                            "&:hover": {
                              background: theme.colors.error.lighter,
                            },
                            color: theme.palette.error.main,
                          }}
                          color="inherit"
                          size="small"
                          onClick={() => deleteItem("hosting", item)}
                        >
                          <DeleteTwoToneIcon fontSize="medium" />
                        </IconButton>
                      </Tooltip>
                    </ListItem>
                  </div>
                );
              })}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewCart;
