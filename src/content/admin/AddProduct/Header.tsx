import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation(["addproduct"]);

  const user = {
    name: "Catherine Pike",
    avatar: "/static/images/avatars/1.jpg",
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        {t("1")}
      </Typography>
      <Typography variant="subtitle2">
        {user.name}, {t("2")}
      </Typography>
    </>
  );
}

export default Header;
