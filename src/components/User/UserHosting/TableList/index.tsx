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
  const { t } = useTranslation(["user"]);
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
            title={t("10")}
            subheader={t("9")}
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ whiteSpace: "pre" }}>
                  <TableCell>{t("1")}</TableCell>
                  <TableCell>{t("11")}</TableCell>
                  <TableCell>{t("12")}</TableCell>
                  <TableCell>{t("13")}</TableCell>
                  <TableCell>{t("14")}</TableCell>
                  <TableCell>{t("15")}</TableCell>
                  <TableCell>{t("16")}</TableCell>
                  <TableCell>{t("3")}</TableCell>
                  <TableCell>{t("5")}</TableCell>
                  <TableCell align="right">{t("4")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data ? (
                  data?.map((item) => (
                    <TableRow key={item._id} hover>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.SSDMemory}</TableCell>
                      <TableCell>{item.RAM}</TableCell>
                      <TableCell>{item.bandwidth}</TableCell>{" "}
                      <TableCell>{item.website}</TableCell>
                      <TableCell>{item.support}</TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat("en-US").format(
                          item.idUserProduct.createdAt
                        )}
                      </TableCell>
                      <TableCell>
                        {item.idUserProduct.months} {t("6")}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ justifyContent: "center" }}
                      >
                        <Tooltip placement="top" title={t("18")} arrow>
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
