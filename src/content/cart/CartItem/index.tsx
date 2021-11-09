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
        }}
      >
        <div style={{ display: "flex", flex: "3" }}>
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
            primary={type !== "domain" ? item.name : item.nameUrl}
            secondary={type !== "domain" ? item.type : item.dot}
          />
        </div>
        <span style={{ flex: "2" }}>{item.product.price}</span>
        {page === "check" && (
          <Tooltip sx={{ flex: "1" }} placement="top" title="Delete" arrow>
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
