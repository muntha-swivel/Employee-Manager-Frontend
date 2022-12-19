import { IEmployee } from "shared";
import { setEmployeeToDelete } from "app/store";
const setDeleteUserWithBtn = (employee: IEmployee, dispatch: any) => {
  dispatch(setEmployeeToDelete(employee));

  //this function is responsible to set the user to be deleted
};

export { setDeleteUserWithBtn };
