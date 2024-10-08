import { Outlet } from "react-router";
import PriceDetails from "../components/cart/PriceDetails";
import CheckoutHeader from "../components/header/CheckoutHeader";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { Link } from "react-router-dom";

const Checkout = () => {
  const items = useSelector((state: IRootState) => state.cart.items);

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
