import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import PriceDetails from "../components/cart/PriceDetails";
import CheckoutHeader from "../components/header/CheckoutHeader";
import { useAppSelector } from "../hooks";

const Checkout = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="checkout-layout">
      <div className="checkout-header">
        <CheckoutHeader />
      </div>
      {items.length === 0 && (
        <Link to="/" className="link btn btn--full start-shopping-btn">
          Start Shopping
        </Link>
      )}
      {items.length > 0 && (
        <>
          <div className="outlet">
            <Outlet />
          </div>
          <PriceDetails items={items} />
        </>
      )}
    </div>
  );
};

export default Checkout;
