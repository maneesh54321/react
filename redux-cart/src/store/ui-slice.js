import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: false,
  notification: {
    show: false,
    title: "",
    description: "",
    state: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification.show = true;
      state.notification.title = action.payload.title;
      state.notification.description = action.payload.description;
      state.notification.state = action.payload.state;
    },
  },
});

export default uiSlice;

export const uiActions = uiSlice.actions;
