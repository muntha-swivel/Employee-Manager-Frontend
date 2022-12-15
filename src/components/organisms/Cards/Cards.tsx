import React from "react";
import { ACard } from "@molecules";
import { ICards } from "./Cards.interface";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

const Cards = ({ data }: ICards) => {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={2} direction="row">
        {data?.map((data) => (
          <Grid item md={4} sm={12} key={data._id}>
            <ACard
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              photo={data.photo}
              phone={data.phone}
              gender={data.gender}
              onClickDelete={() => console.log("hello")}
              onClickEdit={() => router.push(`employee/edit/${data._id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export { Cards };
