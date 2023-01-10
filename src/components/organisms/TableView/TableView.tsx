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
import { ITableView } from "./TableView.interface";
import { PictureButton } from "@atoms";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { IEmployee } from "shared";
import { useDispatch } from "react-redux";
import { setDeleteUserWithBtn } from "../shared/setDeleteUser";
import { useRouter } from "next/router";

const tableHeader = [
  "Image",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Gender",
  "Actions",
];

const TableView = ({ data, onClickDelete }: ITableView) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickDeleteBtn = (employee: IEmployee) => {
    setDeleteUserWithBtn(employee, dispatch);
    onClickDelete();
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow hover>
            {tableHeader.map((header) => (
              <TableCell key={tableHeader.indexOf(header)}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow key={employee._id} hover>
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
                    <PictureButton
                      icon={<DeleteIcon />}
                      onClick={() => onClickDeleteBtn(employee)}
                    />
                  </Grid>
                  <Grid item>
                    <PictureButton
                      icon={<ManageAccountsIcon />}
                      onClick={() =>
                        router.push(`employee/edit/${employee._id}`)
                      }
                    />
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

export { TableView };
