import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

// function counterReducer(state = initialState, action) {
//   if (action.type === "INCREMENT") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   } else if (action.type === "DECREMENT") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   } else if (action.type === "INCREASE") {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   } else if (action.type === "TOGGLE") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// }

// export const store = createStore(counterSlice.reducer);
