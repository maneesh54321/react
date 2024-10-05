import { Outlet } from "react-router";
import PriceDetails from "../components/checkout/PriceDetails";
import CheckoutHeader from "../components/header/CheckoutHeader";

const Checkout = () => {
  return (
    <div className="checkout-layout">
      <div className="checkout-header">
        <CheckoutHeader />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <PriceDetails />
    </div>
  );
};

export default Checkout;
