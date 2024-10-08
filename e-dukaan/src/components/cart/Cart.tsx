import { useSelector } from "react-redux";

import CartItemCard from "./CartItemCard";
import { IRootState } from "../../store/store";

const Cart = () => {
  const items = useSelector((state: IRootState) => state.cart.items);

  return (
    <>
      <div className="cart-container">
        <h3 className="secondary-heading">Product Details</h3>
        <ul className="cart-products">
          {items.map((cartItem, idx) => (
            <li key={idx}>
              <CartItemCard cartItem={cartItem} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
