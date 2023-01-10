import { AnyAction } from "@reduxjs/toolkit";
import { IEmployee } from "shared";
import { addNewEmployee, updateEmployee } from "app/store";

const addEmployee = (employee: IEmployee, dispatch: any) => {
  dispatch(addNewEmployee(employee));
};
const updateExistingEmployee = (employee: any, dispatch: any) => {
  try {
    dispatch(updateEmployee(employee));
  } catch (err) {
    console.log(err);
  }
};
export { addEmployee, updateExistingEmployee };
