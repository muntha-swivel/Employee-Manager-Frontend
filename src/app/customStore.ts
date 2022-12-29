import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const customStore = createStore(reducer);

export default customStore;

//This is not the main store
//This is a custom store used to provide for test cases and stories
