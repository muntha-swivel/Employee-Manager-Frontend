import { AnyAction } from "@reduxjs/toolkit";
import { IEmployee } from "shared";
import { addNewEmployee } from "app/store";

const addEmployee = (employee: IEmployee, dispatch: any) => {
  dispatch(addNewEmployee(employee));
};
export { addEmployee };
