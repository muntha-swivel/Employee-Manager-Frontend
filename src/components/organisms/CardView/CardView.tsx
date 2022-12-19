import React, { useState, useEffect } from "react";
import { ACard } from "@molecules";
import { ICardView } from "./CardView.interface";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { IEmployee } from "shared";
import { useDispatch } from "react-redux";
import { setDeleteUserWithBtn } from "../shared/setDeleteUser";

const CardView = ({ data, onClickDelete }: ICardView) => {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const onClickDeleteBtn = (employee: IEmployee) => {
    setDeleteUserWithBtn(employee, dispatch);
    onClickDelete(); // this is the function that triggers the modal to open
  };

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
              onClickDelete={() => onClickDeleteBtn(data)}
              onClickEdit={() => router.push(`employee/edit/${data._id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export { CardView };
