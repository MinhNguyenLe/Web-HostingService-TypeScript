import {
  Card,
  Tooltip,
  CardActionArea,
  CardContent,
  Avatar,
} from "@material-ui/core";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import { experimentalStyled } from "@material-ui/core/styles";

import { useTranslation } from "react-i18next";

const CardAddAction = experimentalStyled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
);

const AvatarAddWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const AddNewProduct = ({ sx, handleClickOpen }) => {
  const { t } = useTranslation(["addproduct"]);

  return (
    <Card onClick={handleClickOpen} sx={sx}>
      <Tooltip arrow title={t("3")}>
        <CardAddAction>
          <CardActionArea sx={{ px: 1 }}>
            <CardContent>
              <AvatarAddWrapper>
                <AddTwoToneIcon fontSize="large" />
              </AvatarAddWrapper>
            </CardContent>
          </CardActionArea>
        </CardAddAction>
      </Tooltip>
    </Card>
  );
};

export default AddNewProduct;
