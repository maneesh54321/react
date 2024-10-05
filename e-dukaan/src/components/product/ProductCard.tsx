import ProductPrice from "./ProductPrice";
import StartRating from "./StartRating";

export interface Product {
  title: string;
  img: string;
  mrp: number;
  discountedPrice: number;
  deliveryType: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="product">
      <img
        className="product-img"
        src={"/src/assets/meesho/" + product.img}
        alt={product.title}
      />
      <h4 className="product-title">{product.title}</h4>
      <ProductPrice
        mrp={product.mrp}
        discountedPrice={product.discountedPrice}
      />
      <p className="delivery-type">{product.deliveryType}</p>
      <div className="reviews">
        <StartRating rating={product.rating} />
        <span className="reviews-count">{product.reviews}</span>
      </div>
    </article>
  );
};

export default ProductCard;
