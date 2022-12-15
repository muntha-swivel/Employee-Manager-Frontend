import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  getEmployees,
  getEmployeeById,
  addEmployee,
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
      return action.payload;
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
    const res = await getEmployees();
    const data = res.data.employees;

    dispatch(employeeSlice.actions.setEmployees({ employees: data }));
  } catch (err) {
    console.log(err);
  }
};

export const fetchEmployeeById =
  (id?: string): AppThunk =>
  async (dispatch) => {
    const res = await getEmployeeById(id);
    const data = res.data.employee;

    dispatch(employeeSlice.actions.setEmployee({ employee: data }));
  };
export const addNewEmployee =
  (employee: IEmployee): AppThunk =>
  async () => {
    try {
      const res = await addEmployee(employee);
    } catch (err) {
      console.log(err);
    }
  };
export const wrapper = createWrapper<AppStore>(makeStore);

export const selectEmployee = () => (state: AppState) =>
  state?.[employeeSlice.name];
