import ProductPrice from "./ProductPrice";
import StartRating from "./StartRating";

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

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="product">
      <section className="img-section">
        <img
          className="product-img"
          src={"/src/assets/meesho/" + product.image}
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
          <StartRating rating={product.rating.rate} />
          <span className="reviews-count">{product.rating.count} Reviews</span>
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
