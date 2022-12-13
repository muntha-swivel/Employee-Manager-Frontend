import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PrimaryButton, PictureButton } from "@atoms";
import { Cards } from "@organisms";
import Stack from "@mui/material/Stack";
import GridViewIcon from "@mui/icons-material/GridView";
import { IEmployeePageTemplateInterface } from "./employeePageTemplate.interface";
import { width } from "@mui/system";

function EmployeePageTemplate({ employees }: IEmployeePageTemplateInterface) {
  return (
    <Box>
      <Stack>
        <Grid container justifyContent="flex-end" direction="row" spacing={0}>
          <Grid item>
            <PrimaryButton
              text="Hello World"
              onClick={() => console.log("hello world")}
            />
          </Grid>
          <Grid item>
            <PictureButton icon={<GridViewIcon />} />
          </Grid>
        </Grid>
        <Cards data={employees} />
      </Stack>
    </Box>
  );
}

export { EmployeePageTemplate };
