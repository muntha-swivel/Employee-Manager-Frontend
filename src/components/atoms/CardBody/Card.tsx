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
  image,
  firstName,
  lastName,
  email,
  phone,
  gender,
}: IACard) {
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
