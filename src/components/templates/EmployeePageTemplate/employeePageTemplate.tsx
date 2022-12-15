import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PrimaryButton, PictureButton } from "@atoms";
import { Cards } from "@organisms";
import Stack from "@mui/material/Stack";
import GridViewIcon from "@mui/icons-material/GridView";
import { IEmployeePageTemplateInterface } from "./employeePageTemplate.interface";
import { useRouter } from "next/router";

function EmployeePageTemplate({ employees }: IEmployeePageTemplateInterface) {
  const router = useRouter();

  return (
    <Box>
      <Stack>
        <Grid
          container
          justifyContent="flex-end"
          direction="row"
          spacing={0}
          mb={2}
        >
          <Grid item>
            <PrimaryButton
              text="Add Employee"
              onClick={() => router.push("/employee/addEmployee")}
            />
          </Grid>
          <Grid item>
            <PictureButton
              icon={<GridViewIcon />}
              onClick={() => console.log("edit")}
            />
          </Grid>
        </Grid>
        <Cards data={employees} />
      </Stack>
    </Box>
  );
}

export { EmployeePageTemplate };
