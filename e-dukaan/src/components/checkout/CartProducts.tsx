import CartProductDetails, { CartProduct } from "./CartProductDetails";

const CartProducts = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  return (
    <>
      <div className="cart-container">
        <h3 className="secondary-heading">Product Details</h3>
        <ul className="cart-products">
          {cartProducts.map((cartProduct, idx) => (
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
