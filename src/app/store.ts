import { configureStore, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export const subjectSlice = createSlice({
  name: "subject",

  initialState: {} as any,

  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

const makeStore = () =>
  configureStore({
    reducer: {
      [subjectSlice.name]: subjectSlice.reducer,
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

export const fetchSubject = (): AppThunk => async (dispatch) => {
  const res = await fetch(`http://localhost:4000/employee`);
  const json = await res.json();

  dispatch(subjectSlice.actions.setEnt({ json }));
};

export const wrapper = createWrapper<AppStore>(makeStore);

export const selectSubject = () => (state: AppState) =>
  state?.[subjectSlice.name];
