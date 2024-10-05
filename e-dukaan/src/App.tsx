import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddressSelection from "./components/address/AddressSelection";
import CartProducts from "./components/checkout/CartProducts";
import Checkout from "./pages/Checkout";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    index: true,
    id: "home",
  },
  {
    path: "checkout",
    element: <Checkout />,
    children: [
      {
        path: "",
        id: "cart",
        element: <CartProducts />,
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
