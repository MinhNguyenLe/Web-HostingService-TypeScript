import { useState, MouseEvent, ChangeEvent } from "react";
import {
  Box,
  Card,
  Grid,
  Divider,
  CardHeader,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  useTheme,
} from "@material-ui/core";

import BlockIcon from "@material-ui/icons/Block";

import { useTranslation } from "react-i18next";

import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";

function TableList({ handleBlock, data }) {
  const { t } = useTranslation(["admin"]);
  const theme = useTheme();

  const listVPSRdux = useSelector((state: RootState) => state.vps.list);

  const dispatch = useDispatch();
  const { focusVPS, listVPS } = bindActionCreators(actionCreators, dispatch);

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            subheaderTypographyProps={{}}
            titleTypographyProps={{}}
            title={t("17")}
            subheader={t("9")}
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ whiteSpace: "pre" }}>
                  <TableCell>{t("23")}</TableCell>
                  <TableCell>{t("27")}</TableCell>
                  <TableCell>{t("24")}</TableCell>
                  <TableCell>{t("25")}</TableCell>
                  <TableCell>{t("26")}</TableCell>
                  <TableCell>{t("101")}</TableCell>
                  <TableCell>{t("111")}</TableCell>
                  <TableCell>{t("119")}</TableCell>
                  <TableCell>{t("118")}</TableCell>
                  <TableCell>{t("113")}</TableCell>
                  <TableCell>{t("114")}</TableCell>
                  <TableCell>{t("116")}</TableCell>
                  <TableCell>{t("103")}</TableCell>
                  <TableCell>{t("105")}</TableCell>
                  <TableCell align="right">{t("104")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data ? (
                  data?.map((item) => (
                    <TableRow sx={{ whiteSpace: "pre" }} key={item._id} hover>
                      <TableCell>{item.userProduct.user.userName}</TableCell>
                      <TableCell>
                        {item.userProduct.user.isPermission ? t("28") : t("29")}
                      </TableCell>
                      <TableCell>{item.userProduct.user.email}</TableCell>
                      <TableCell>
                        {item.userProduct.user.buyer.contact}
                      </TableCell>
                      <TableCell>
                        {item.userProduct.user.buyer.quantity}
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.CPU}</TableCell>
                      <TableCell>{item.cloudStorage}</TableCell>
                      <TableCell>{item.RAM}</TableCell>
                      <TableCell>{item.bandwidth}</TableCell>
                      <TableCell>{item.support}</TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat("en-US").format(
                          item.userProduct.createdAt
                        )}
                      </TableCell>
                      <TableCell>
                        {item.userProduct.months} {t("106")}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ justifyContent: "center" }}
                      >
                        <Tooltip placement="top" title={t("118")} arrow>
                          <IconButton
                            sx={{
                              "&:hover": {
                                background: theme.colors.error.lighter,
                              },
                              color: theme.palette.error.main,
                            }}
                            color="inherit"
                            size="small"
                            onClick={() => handleBlock(item._id)}
                          >
                            <BlockIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <div></div>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box p={2}>
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

TableList.defaultProps = {
  handleBlock: () => 1,
  data: 0,
};

export default TableList;
