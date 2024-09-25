import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const idx = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (idx > -1) {
        state.items[idx].quantity++;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    removeItem(state, action) {
      const idx = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (state.items[idx].quantity === 1) {
        state.items.splice(idx, 1);
      } else {
        state.items[idx].quantity--;
      }
    },
    setCart(state, action) {
      state.items = action.payload;
    },
  },
});

export const addItemToCart = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Saving cart...",
        description: "Sent request to firebase database.",
        state: "in-progress",
      })
    );
    async function saveCart() {
      const requestConfig = {
        method: "PUT",
        body: JSON.stringify(cartData),
      };
      const response = await fetch(
        "https://redux-cart-e5d54-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        requestConfig
      );

      if (!response.ok) {
        throw new Error(
          response.error().message || "Error occurred while saving cart!!"
        );
      }
    }
    try {
      await saveCart();

      dispatch(
        uiActions.showNotification({
          title: "Successfully saved cart!!",
          description: "Request to save cart succedded.",
          state: "success",
        })
      );
    } catch (error) {
      console.log("Error occurred!!!", error);

      dispatch(
        uiActions.showNotification({
          title: "Failed to save cart!!",
          description: "Request to save cart failed.",
          state: "error",
        })
      );
    }
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    async function fetchCartFromAPI() {
      const response = await fetch(
        "https://redux-cart-e5d54-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error(response.error || "Failed to fetch cart from firebase");
      }

      return response.json();
    }

    dispatch(
      uiActions.showNotification({
        title: "Fetching cart data..",
        description: "Fetching cart data from firebase.",
        state: "in-progress",
      })
    );
    try {
      const cart = await fetchCartFromAPI();
      dispatch(
        uiActions.showNotification({
          title: "Successfully fetched cart data!!!",
          description: `Fetching cart data from firebase succedded.`,
          state: "success",
        })
      );
      dispatch(cartActions.setCart(cart.items));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Fetching cart data failed!!!",
          description: `Fetching cart data from firebase failed with error: ${error}`,
          state: "error",
        })
      );
    }
  };
};

export default cartSlice;

export const cartActions = cartSlice.actions;
