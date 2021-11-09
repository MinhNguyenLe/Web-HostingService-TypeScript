import { useState } from "react";
import {
  useTheme,
  Divider,
  ListItem,
  ListItemAvatar,
  Checkbox,
  ListItemText,
  Tooltip,
  IconButton,
  Avatar,
} from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { experimentalStyled } from "@material-ui/core/styles";
import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";

const AvatarSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);
const CartItem = ({ page, item, handleChecked, deleteItem, type }) => {
  const theme = useTheme();
  return (
    <div key={item._id}>
      <Divider component="li" />
      <ListItem
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <ListItemAvatar sx={{ pr: 2 }}>
            {page === "check" ? (
              <Checkbox
                onChange={(e) => handleChecked(type, e.target.checked, item)}
                defaultChecked={false}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              />
            ) : (
              <AvatarSuccess>
                <DoneTwoToneIcon />
              </AvatarSuccess>
            )}
          </ListItemAvatar>
          <ListItemText
            sx={{ flex: "none !important" }}
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
        </div>
        <span>{item.product.price}</span>
        {page === "check" && (
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
              onClick={() => deleteItem(type, item)}
            >
              <DeleteTwoToneIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        )}
      </ListItem>
    </div>
  );
};

CartItem.defaultProps = {
  page: "",
  item: {},
  handleChecked: () => 1,
  deleteItem: () => 1,
  type: "",
};

export default CartItem;
