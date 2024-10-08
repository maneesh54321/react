import ProductPrice from "./ProductPrice";
import StarRating from "../../UI/StarRating";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: {
    mrp: number;
    discountedPrice: number | undefined;
  };
  deliveryType: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard = ({ product, ...props }: { product: Product }) => {
  return (
    <article className="product" {...props}>
      <section className="img-section">
        <img
          className="product-img"
          // src={"/src/assets/meesho/" + product.image}
          src={product.image}
          alt={product.title}
        />
      </section>
      <section className="product-details">
        <h4 className="product-title">{product.title}</h4>
        <ProductPrice
          mrp={product.price.mrp}
          discountedPrice={product.price.discountedPrice}
        />
        <p className="delivery-type">{product.deliveryType}</p>
        <div className="reviews">
          <StarRating rating={product.rating.rate} />
          <span className="reviews-count">{product.rating.count} Reviews</span>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
