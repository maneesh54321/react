import { CART_PRODUCTS } from "../../utils/data";
import CartProductDetails from "./CartProductDetails";

const CartProducts = () => {
  return (
    <>
      <div className="cart-container">
        <h3 className="secondary-heading">Product Details</h3>
        <ul className="cart-products">
          {CART_PRODUCTS.map((cartProduct, idx) => (
            <li key={idx}>
              <CartProductDetails cartProduct={cartProduct} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CartProducts;
