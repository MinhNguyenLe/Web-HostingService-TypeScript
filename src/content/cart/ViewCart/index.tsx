import { useState, MouseEvent, ChangeEvent } from "react";
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

  return (
    <Grid container spacing={3} sx={{ marginTop: "20px" }}>
      <Grid sx={{ margin: "auto" }} xs={10}>
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

              <Divider component="li" />
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
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewCart;
