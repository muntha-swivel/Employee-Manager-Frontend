import * as React from "react";
import {
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { IACard } from "./Card.interface";
import DeleteIcon from "@mui/icons-material/Delete";
import { PictureButton } from "@atoms";
function CardBody({ children }: IACard) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          kathy@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          +94779122123
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Female
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "right" }}>{children}</CardActions>
    </Card>
  );
}

export { CardBody };
