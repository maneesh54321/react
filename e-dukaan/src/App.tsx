import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import AddressSelection from "./components/address/AddressSelection";
import Cart from "./components/cart/Cart";
import Products from "./components/product/Products";
import Authentication from "./pages/auth/Authentication";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/Signup";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";
import { logout } from "./store/auth-slice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getTokenDuration, hasExpired } from "./utils/common-utils";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <Authentication />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    id: "home",
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Products />,
      },
      {
        path: "products",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "checkout",
    element: <Checkout />,
    children: [
      {
        id: "cart",
        path: "",
        index: true,
        element: <Cart />,
      },
      {
        id: "address",
        path: "address",
        element: <AddressSelection />,
      },
    ],
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) return;
    if (hasExpired(token)) return;
    const remainingDuration = getTokenDuration(token);
    setTimeout(() => {
      dispatch(logout());
    }, remainingDuration);
  }, [dispatch, token]);
  return <RouterProvider router={router} />;
}

export default App;
