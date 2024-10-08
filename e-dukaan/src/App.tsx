import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddressSelection from "./components/address/AddressSelection";
import Cart from "./components/cart/Cart";
import Checkout from "./pages/Checkout";
import RootLayout from "./pages/RootLayout";
import Products from "./components/product/Products";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
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
  return <RouterProvider router={router} />;
}

export default App;
