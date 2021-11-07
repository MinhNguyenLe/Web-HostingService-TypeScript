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

import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

import { useTranslation } from "react-i18next";

import ModeEditOutline from "@material-ui/icons/ModeEditOutline";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";

const EditIcon = styled(ModeEditOutline)(({ theme }) => ({
  color: theme.customTheme.hostingCard.txInfor,
}));

function VPSTable({ handleDelete, data, openDialog, setItem }) {
  const { t } = useTranslation(["vps"]);
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

  const editHosting = (item) => {
    focusVPS(item);
    setItem({
      id: item._id,
      name: item.name,
      domain: item.domain,
      CPU: item.CPU,
      support: item.support,
      cloudStorage: item.cloudStorage,
      RAM: item.RAM,
      bandwidth: item.bandwidth,
      months: item.product.months,
      price: item.product.price,
      type: item.type,
      information: item.information,
    });
    openDialog();
  };

  const sortWithPriceUp = () => {
    const result = [...listVPSRdux];
    result.sort(function (a, b) {
      return a.product.price - b.product.price;
    });
    listVPS(result);
    console.log(result);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            subheaderTypographyProps={{}}
            titleTypographyProps={{}}
            title={t("1")}
            subheader={t("2")}
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t("16")}</TableCell>
                  <TableCell>{t("3")}</TableCell>
                  <TableCell>
                    <IconButton>
                      <ArrowDownward
                        sx={{ fontSize: "16px" }}
                        onClick={() => sortWithPriceUp()}
                      />{" "}
                    </IconButton>
                    {t("17")}
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <ArrowUpward
                        sx={{ fontSize: "16px" }}
                        onClick={() => console.log(1)}
                      />{" "}
                    </IconButton>
                    {t("18")}
                  </TableCell>
                  <TableCell>{t("6")}</TableCell>
                  <TableCell>{t("8")}</TableCell>
                  <TableCell>{t("7")}</TableCell>
                  <TableCell>{t("9")}</TableCell>
                  <TableCell>{t("11")}</TableCell>
                  <TableCell>{t("10")}</TableCell>
                  <TableCell align="right">{t("12")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data ? (
                  data?.map((item) => (
                    <TableRow key={item._id} hover>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>
                        {new Intl.NumberFormat("vn-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.product.price)}
                      </TableCell>
                      <TableCell>{item.product.months}</TableCell>
                      <TableCell>{item.cloudStorage}</TableCell>
                      <TableCell>{item.CPU}</TableCell>
                      <TableCell>{item.RAM}</TableCell>
                      <TableCell>{item.bandwidth}</TableCell>
                      <TableCell>{item.domain}</TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat("en-US").format(
                          item.createdAt
                        )}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ justifyContent: "center" }}
                      >
                        <Tooltip placement="top" title="edit" arrow>
                          <IconButton onClick={() => editHosting(item)}>
                            <EditIcon style={{ fontSize: "18px" }}></EditIcon>
                          </IconButton>
                        </Tooltip>
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
                            onClick={() => handleDelete(item._id)}
                          >
                            <DeleteTwoToneIcon fontSize="small" />
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

export default VPSTable;
