import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import { experimentalStyled } from "@material-ui/core/styles";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/config";

const ListWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(["color", "fill"])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const { t } = useTranslation(["headerMenu"]);

  const themeRedux = useSelector((state: RootState) => state.page.theme);
  const langRedux = useSelector((state: RootState) => state.page.lang);

  const dispatch = useDispatch();

  const { theme, lang } = bindActionCreators(actionCreators, dispatch);

  const ref = useRef<any>(null);
  const refTheme = useRef<any>(null);

  const [isOpen, setOpen] = useState<boolean>(false);

  const [openTheme, setOpenTheme] = useState<boolean>(false);

  // 1 : light 2 : dark
  const changeTheme = async (number) => {
    await theme(number);
    window.location.reload();
  };

  // 1 : en 2 : vi
  const changeLang = () => {
    if (langRedux === 1) {
      lang(2);
      i18n.changeLanguage("vi");
      // document.querySelector("html").setAttribute("lang", "vi");
    } else {
      lang(1);
      i18n.changeLanguage("en");
      // document.querySelector("html").setAttribute("lang", "en");
    }
    // window.location.reload();
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleOpenTheme = (): void => {
    setOpenTheme(true);
  };

  const handleCloseTheme = (): void => {
    setOpenTheme(false);
  };
  return (
    <>
      <ListWrapper>
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            component={NavLink}
            to="/components/buttons"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Buttons"
            />
          </ListItem>
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            component={NavLink}
            to="/components/forms"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Forms"
            />
          </ListItem>
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  {langRedux === 1 ? "English" : "Tiếng việt"}
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            ref={refTheme}
            onClick={handleOpenTheme}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  {t("3")}
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem onClick={() => changeLang()} sx={{ px: 3 }}>
          {langRedux === 1 ? "Tiếng việt" : "English"}
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={refTheme.current}
        onClose={handleCloseTheme}
        open={openTheme}
      >
        <MenuItem
          onClick={() => changeTheme(2)}
          sx={{ px: 3 }}
          selected={themeRedux === 1 ? false : true}
        >
          Dark
        </MenuItem>
        <MenuItem
          onClick={() => changeTheme(1)}
          sx={{ px: 3 }}
          selected={themeRedux === 2 ? false : true}
        >
          Light
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
