import * as React from "react";
import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IACard } from "./Card.interface";
function CardBody({
  children,
  photo,
  firstName,
  lastName,
  email,
  phone,
  gender,
}: IACard) {
  return (
    <Card sx={{ maxWidth: 300, minWidth: 300 }}>
      <CardMedia
        component="img"
        height="300"
        width="250"
        image={photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {gender}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "right" }}>{children}</CardActions>
    </Card>
  );
}

export { CardBody };
