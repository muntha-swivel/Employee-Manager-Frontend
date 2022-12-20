import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

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
