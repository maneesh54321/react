import { useAppSelector } from "../../hooks";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);

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
