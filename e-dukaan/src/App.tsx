import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import Checkout from "./pages/Checkout";
import CartProducts from "./components/checkout/CartProducts";
import { CART_PRODUCTS } from "./utils/data";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    index: true,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    children: [
      {
        path: "",
        element: <CartProducts cartProducts={CART_PRODUCTS} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
