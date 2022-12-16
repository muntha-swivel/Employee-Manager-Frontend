import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  getEmployeesService,
  getEmployeeByIdService,
  addEmployeeService,
  updateUpdateEmployeeService,
  removeEmployeeService,
} from "api/services/employee";
import { IEmployee } from "shared";

export const employeeSlice = createSlice({
  name: "employee",

  initialState: {} as any,

  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
    setEmployees(state, action) {
      return action.payload;
    },
    setEmployee(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setDelEmployee(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.employee,
      };
    },
  },
});

const makeStore = () =>
  configureStore({
    reducer: {
      [employeeSlice.name]: employeeSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const fetchEmployees = (): AppThunk => async (dispatch) => {
  try {
    const res = await getEmployeesService();
    const data = res.data.employees;

    dispatch(employeeSlice.actions.setEmployees({ employees: data }));
  } catch (err) {
    console.log(err);
  }
};

export const fetchEmployeeById =
  (id?: string): AppThunk =>
  async (dispatch) => {
    const res = await getEmployeeByIdService(id);
    const data = res.data.employee;

    dispatch(employeeSlice.actions.setEmployee({ employee: data }));
  };
export const addNewEmployee =
  (employee: IEmployee): AppThunk =>
  async () => {
    try {
      const res = await addEmployeeService(employee);
    } catch (err) {
      console.log(err);
    }
  };

export const updateEmployee =
  (employee: IEmployee): AppThunk =>
  async () => {
    try {
      const res = await updateUpdateEmployeeService(employee);
    } catch (err) {
      console.log(err);
    }
  };

export const setEmployeeToDelete =
  (employee: IEmployee): AppThunk =>
  async (dispatch) => {
    dispatch(employeeSlice.actions.setDelEmployee({ delEmp: employee }));
  };

export const deleteEmployee =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await removeEmployeeService(id);
      const data = res.data.employees;

      dispatch(employeeSlice.actions.setEmployees({ employees: data }));
    } catch (err) {
      console.log(err);
    }
  };

export const wrapper = createWrapper<AppStore>(makeStore);

export const selectEmployee = () => (state: AppState) =>
  state?.[employeeSlice.name];
