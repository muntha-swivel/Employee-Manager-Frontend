import { axiosClient } from "../apiClient";
import { IEmployee } from "shared";

const data = {
  firstName: "Macbook",
  lastName: "ProBro",
  email: "mac@gmail.com",
  phone: "+94779122134",
  gender: "M",
};

const getEmployees = () => {
  return axiosClient.get("/");
};
const getEmployeeById = (id?: string) => {
  return axiosClient.get(`/getEmployee/${id}`);
};
const addEmployee = (employee: IEmployee) => {
  return axiosClient.post("/", JSON.stringify(employee));
};
export { getEmployees, addEmployee, getEmployeeById };

//router.get("/getEmployee/:id", getOneEmployeeController);
