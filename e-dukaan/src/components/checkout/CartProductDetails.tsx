import { Product } from "../product/ProductCard";
import ProductPrice from "../product/ProductPrice";

export interface CartProduct {
  product: Product;
  quantity: number;
}

const CartProductDetails = ({ cartProduct }: { cartProduct: CartProduct }) => {
  const { product, quantity } = cartProduct;
  return (
    <article className="cart-product-details">
      <section>
        <div className="cart-product-image">
          <img
            src={"/src/assets/meesho/" + product.image}
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
          <button className="btn btn--text remove-btn">X Remove</button>
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

export default CartProductDetails;
