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
import { styled } from "@material-ui/core/styles";

import { RootState } from "src/redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";

const EditIcon = styled(ModeEditOutline)(({ theme }) => ({
  color: theme.customTheme.hostingCard.txInfor,
}));

function HostingTable({ handleDelete, data, openDialog, setItem }) {
  const { t } = useTranslation(["addproduct"]);
  const theme = useTheme();

  const hostRdux = useSelector((state: RootState) => state.hostDetail);
  const dispatch = useDispatch();
  const { focusHosting } = bindActionCreators(actionCreators, dispatch);

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
    focusHosting(item);
    setItem({
      id: item._id,
      name: item.name,
      domain: item.domain,
      website: item.website,
      support: item.support,
      SSDMemory: item.SSDMemory,
      RAM: item.RAM,
      bandwidth: item.bandwidth,
      months: item.product.months,
      price: item.product.price,
      type: item.type,
      information: item.information,
    });
    openDialog();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            subheaderTypographyProps={{}}
            titleTypographyProps={{}}
            title="Access Logs"
            subheader="Recent sign in activity logs"
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>SSD Memory</TableCell>
                  <TableCell>RAM</TableCell>
                  <TableCell>Bandwidth</TableCell>
                  <TableCell>Created at</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data ? (
                  data?.map((item) => (
                    <TableRow key={item._id} hover>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>
                        {new Intl.NumberFormat("vn-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.product.price)}
                      </TableCell>
                      <TableCell>{item.SSDMemory}</TableCell>
                      <TableCell>{item.RAM}</TableCell>
                      <TableCell>{item.bandwidth}</TableCell>
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

export default HostingTable;
