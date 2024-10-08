import { useDispatch } from "react-redux";
import { Product } from "../product/ProductCard";
import ProductPrice from "../product/ProductPrice";
import { CartActions } from "../../store/cart-slice";

export interface CartItem {
  product: Product;
  quantity: number;
}

const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => {
  const { product, quantity } = cartItem;
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(CartActions.removeItem(product));
  }

  return (
    <article className="cart-product-details">
      <section>
        <div className="cart-product-image">
          <img
            src={product.image}
            alt={product.title}
            className="cart-product-img"
          />
        </div>
        <div className="description">
          <header>
            <p className="title">{product.title}</p>
          </header>
          <ProductPrice
            mrp={product.price.mrp}
            discountedPrice={product.price.discountedPrice}
          />
          <p className="description-text">All issue easy return</p>
          <p className="description-text">Qty: {quantity}</p>
          <button className="btn btn--text remove-btn" onClick={handleRemove}>
            X Remove
          </button>
        </div>
        <a href="#" className="link cart-product-edit">
          edit
        </a>
      </section>
      <footer>
        <p className="sold-by">
          Sold by: <span className="seller">naxis</span>
        </p>
        <p className="delivery">Free Delivery</p>
      </footer>
    </article>
  );
};

export default CartItemCard;
