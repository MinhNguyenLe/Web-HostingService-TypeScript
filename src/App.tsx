import { useRoutes } from "react-router-dom";
import routes, { routesAdmin } from "./router";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

import ThemeProvider from "./theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";

import { RootState } from "src/redux/reducers";
import { useSelector } from "react-redux";

const App = () => {
  const userRedux = useSelector((state: RootState) => state.user);
  const content = useRoutes(userRedux.isPermission ? routes : routesAdmin);

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
