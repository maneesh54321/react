import { Outlet } from "react-router";
import PriceDetails from "../components/checkout/PriceDetails";
import Header from "../components/header/Header";

const Checkout = () => {
  return (
    <div className="checkout-layout">
      <div className="checkout-header">
        <Header />
      </div>
      <Outlet />
      <PriceDetails />
    </div>
  );
};

export default Checkout;
