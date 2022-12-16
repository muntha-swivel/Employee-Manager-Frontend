import React, { useState, useEffect } from "react";
import { ACard } from "@molecules";
import { ICards } from "./Cards.interface";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { AlertModal } from "@atoms";
import { PrimaryButton } from "@atoms";
import { IEmployee } from "shared";
import { useDispatch } from "react-redux";
import { setEmployeeToDelete } from "app/store";

const Cards = ({ data, onClickDelete }: ICards) => {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const onClickDeleteBtn = (employee: IEmployee) => {
    dispatch(setEmployeeToDelete(employee));
    onClickDelete();
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

export { Cards };
