import React, { useState } from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";

import RegisterNameDomain from "../../Dialog/RegisterNameDomain";

export default function CardDomain({
  item,
  image,
  price,
  information,
  chooseDot,
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    name: "",
    dot: "",
  });

  const handleClickOpen = () => {
    setInput({ ...input, dot: item.dot });
    setOpen(true);
  };

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
        <Button onClick={handleClickOpen} size="medium" color="primary">
          Register
        </Button>
      </CardActions>
      <RegisterNameDomain
        item={item}
        setOpen={setOpen}
        open={open}
        input={input}
        setInput={setInput}
      />
    </Card>
  );
}
