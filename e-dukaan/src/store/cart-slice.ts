import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../components/cart/CartItemCard";
import Cart from "../components/cart/Cart";

interface Cart {
  items: CartItem[];
}

function loadCartFromLocalStorage(): Cart {
  const cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(cart);
  }
  return {
    items: [],
  };
}

const initialState: Cart = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) =>
      saveCartToLocalStorage(() => {
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
      }, state),
    removeItem: (state, action) =>
      saveCartToLocalStorage(() => {
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
      }, state),
  },
});

function saveCartToLocalStorage(updateCart: () => void, cart: Cart) {
  updateCart();
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default cartSlice;

export const CartActions = cartSlice.actions;
