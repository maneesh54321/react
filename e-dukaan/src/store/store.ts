import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products-api-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
