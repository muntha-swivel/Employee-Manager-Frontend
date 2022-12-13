import React from "react";
import { ACard } from "@molecules";
import { ICards } from "./Cards.interface";
import Grid from "@mui/material/Grid";

const Cards = ({ data }: ICards) => {
  return (
    <>
      <Grid container spacing={2} direction="row">
        {data?.map((data) => (
          <Grid item md={3}>
            <ACard
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              image={data.image}
              phone={data.phone}
              gender={data.gender}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export { Cards };
