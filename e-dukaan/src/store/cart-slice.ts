import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../components/cart/CartItemCard";

const initialState: {
  items: CartItem[];
} = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const idx = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      if (idx >= 0) {
        state.items[idx].quantity += 1;
      } else {
        state.items.push({
          product,
          quantity: 1,
        });
      }
    },
    removeItem(state, action) {
      const product = action.payload;
      const idx = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      if (idx >= 0) {
        if (state.items[idx].quantity > 1) {
          state.items[idx].quantity -= 1;
        } else {
          state.items.splice(idx, 1);
        }
      }
    },
  },
});

export default cartSlice;

export const CartActions = cartSlice.actions;
