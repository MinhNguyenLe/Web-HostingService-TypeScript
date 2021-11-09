import { useRoutes } from "react-router-dom";
import checkPermissionRouter from "./router";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

import ThemeProvider from "./theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";

import { RootState } from "src/redux/reducers";
import { useSelector } from "react-redux";

const App = () => {
  const userRedux = useSelector((state: RootState) => state.user);
  const content = useRoutes(
    checkPermissionRouter(userRedux.account.user?.isPermission)
  );
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
