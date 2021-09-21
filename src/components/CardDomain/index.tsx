import * as React from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";

export default function CardDomain() {
  return (
    <Card sx={{ maxWidth: 320, minWidth: 290, minHeight: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://assets.hostinger.com/images/domain-checker-2020/tlds-all/icon-link-dc6d553c49.svg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            50.000 VNĐ/năm
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, r
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Register
        </Button>
      </CardActions>
    </Card>
  );
}
