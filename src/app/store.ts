import {
  configureStore,
  createSlice,
  ThunkAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
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

const initialState = {
  employees: [],
  employee: null,
  statusFetching: "idle",
  statusDeleting: "idle",
  statusUpdating: "idle",
  statusAdding: "idle",
  addEmployeeMessage: "",
  updateEmployeeMessage: "",
  fetchEmployeeMessage: "",
  error: "",
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetch",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await getEmployeesService();
      if (response.data.employees) {
        return response.data.employees;
      } else {
        return rejectWithValue("Sorry Something went wrong!");
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchEmployeeById = createAsyncThunk(
  "employee/fetchById",
  async (id: string) => {
    const res = await getEmployeeByIdService(id);
    return res.data.employee;
  }
);

export const addNewEmployee = createAsyncThunk(
  "employee/addEmp",
  async (employee: IEmployee, { rejectWithValue }) => {
    try {
      const res = await addEmployeeService(employee);
      if (res.data.message === "success") {
        return res.data;
      } else {
        return rejectWithValue("error");
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmp",
  async (employee: IEmployee, { rejectWithValue }) => {
    try {
      const res = await updateUpdateEmployeeService(employee);
      if (res.data.message === "success") {
        return res.data;
      } else {
        return rejectWithValue("error");
      }
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const setEmployeeToDelete =
  (employee: IEmployee): AppThunk =>
  async (dispatch) => {
    dispatch(employeeSlice.actions.setDelEmployee({ delEmp: employee }));
  };

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: string) => {
    const res = await removeEmployeeService(id);
    return res.data.employees;
  }
);

export const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    setDelEmployee(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    //Hydrate state with wrapper
    builder.addCase(HYDRATE, (state, action: any) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.employee,
      };
    });
    builder
      //fethch employee
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = state.employees.concat(action.payload);
        state.statusFetching = "success";
      })
      .addCase(fetchEmployees.pending, (state, action) => {
        state.statusFetching = "loading";
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.statusFetching = "failed";
        state.fetchEmployeeMessage = "Sorry Something went wrong!";
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.status = "success";
      })
      .addCase(fetchEmployeeById.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.status = "failed";
      })
      //add employee
      .addCase(addNewEmployee.fulfilled, (state, action) => {
        state.statusAdding = "success";
        state.addEmployeeMessage = "New employee added successfully!";
      })
      .addCase(addNewEmployee.pending, (state, action) => {
        state.statusAdding = "pending";
      })
      .addCase(addNewEmployee.rejected, (state, action) => {
        state.statusAdding = "failed";
        state.addEmployeeMessage =
          "Could not add employee! please try again later.";
      })
      //delete employee
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.status = "success";
      })
      .addCase(deleteEmployee.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = "failed";
      })
      //update employee
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.statusUpdating = "success";
        state.updateEmployeeMessage = "Update Successfull";
      })
      .addCase(updateEmployee.pending, (state, action) => {
        state.statusUpdating = "loading";
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.statusUpdating = "failed";
        state.updateEmployeeMessage =
          "Could not update please try again later!";
      });
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

export const wrapper = createWrapper<AppStore>(makeStore);

export const selectEmployee = () => (state: AppState) =>
  state?.[employeeSlice.name];
