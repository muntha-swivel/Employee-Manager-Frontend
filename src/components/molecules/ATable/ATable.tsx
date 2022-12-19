import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
} from "@mui/material";
import { IATable } from "./ATable.interface";
import { PictureButton } from "@atoms";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const tableHeader = [
  "Image",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Gender",
  "Actions",
];

const ATable = ({ employees }: IATable) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow hover>
            {tableHeader.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee._id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover
            >
              <TableCell component="th" scope="row">
                <Avatar
                  alt="Remy Sharp"
                  src={employee.photo}
                  sx={{ width: 50, height: 50 }}
                />
              </TableCell>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.lastName}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.gender}</TableCell>
              <TableCell align="right">
                <Grid container spacing={1}>
                  <Grid item>
                    <PictureButton icon={<DeleteIcon />} />
                  </Grid>
                  <Grid item>
                    <PictureButton icon={<ManageAccountsIcon />} />
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { ATable };
