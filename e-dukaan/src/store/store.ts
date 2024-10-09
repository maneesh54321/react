import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products-api-slice";
import cartSlice from "./cart-slice";
import { authApi } from "./auth-api-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authApi.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export default store;
