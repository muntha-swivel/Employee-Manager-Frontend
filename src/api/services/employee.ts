import { axiosClient } from "../apiClient";
import { IEmployee } from "shared";

// const data = {
//   firstName: "Macbook",
//   lastName: "ProBro",
//   email: "mac@gmail.com",
//   phone: "+94779122134",
//   gender: "M",
// };

const getEmployeesService = () => {
  return axiosClient.get("/");
};
const getEmployeeByIdService = (id?: string) => {
  return axiosClient.get(`/getEmployee/${id}`);
};
const addEmployeeService = (employee: IEmployee) => {
  return axiosClient.post("/", JSON.stringify(employee));
};
const updateUpdateEmployeeService = (employee: IEmployee) => {
  return axiosClient.post("/update", JSON.stringify(employee));
};
const removeEmployeeService = (id: string) => {
  return axiosClient.get(`/removeEmployee/${id}`);
};
export {
  getEmployeesService,
  addEmployeeService,
  getEmployeeByIdService,
  updateUpdateEmployeeService,
  removeEmployeeService,
};

//router.get("/removeEmployee/:id", removeEmployeeController);
