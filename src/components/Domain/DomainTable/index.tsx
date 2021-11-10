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

function DomainTable({ handleBlock, data }) {
  const { t } = useTranslation(["domain"]);
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
            title={t("4")}
            subheader={t("5")}
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t("6")}</TableCell>
                  <TableCell>{t("7")}</TableCell>
                  <TableCell>{t("8")}</TableCell>
                  <TableCell>{t("9")}</TableCell>
                  <TableCell align="right">{t("10")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data ? (
                  data?.map((item) => (
                    <TableRow key={item._id} hover>
                      <TableCell>{item.dot}</TableCell>
                      <TableCell>{item.product.price}</TableCell>
                      <TableCell>{item.product.months}</TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat("en-US").format(
                          item.createdAt
                        )}
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

DomainTable.defaultProps = {
  handleBlock: () => 1,
  data: 0,
};

export default DomainTable;
