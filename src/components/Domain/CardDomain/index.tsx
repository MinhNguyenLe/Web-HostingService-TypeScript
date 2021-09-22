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

export default function CardDomain({
  item,
  registerDomain,
  image,
  price,
  information,
  chooseDot,
}) {
  return (
    <Card sx={{ width: 320, minWidth: 290, minHeight: 260 }}>
      <CardActionArea onClick={() => chooseDot(item?.dot)}>
        <CardMedia sx={{ height: "120px" }} component="img" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {price} VNĐ/năm
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {information}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => registerDomain(item)}
          size="medium"
          color="primary"
        >
          Register
        </Button>
      </CardActions>
    </Card>
  );
}
