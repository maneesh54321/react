import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import ProductPrice from "../components/product/ProductPrice";
import { CartActions } from "../store/cart-slice";
import { useGetProductByIdQuery } from "../store/products-api-slice";
import StarRating from "../UI/StarRating";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const [searchParams] = useSearchParams();

  const productId = +(searchParams.get("id") ?? NaN);

  const { data: product } = useGetProductByIdQuery(productId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    dispatch(CartActions.addItem(product));
  }

  return (
    product && (
      <div className={classes.productDetails}>
        <div className={classes.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={classes.productImage}
          />
        </div>
        <div className={classes.productMeta}>
          <p className={classes.productTitle}>{product.title}</p>
          <div className={classes.price}>
            <ProductPrice
              mrp={product.price.mrp}
              discountedPrice={product.price.discountedPrice}
            />
          </div>
          <div className={classes.reviews}>
            <StarRating rating={product.rating.rate} />
            <p className={classes.reviewsCount}>
              {product.rating.count} Reviews
            </p>
          </div>
          <p className={classes.deliveryType}>Free Delivery</p>
        </div>
        <div className={classes.actions}>
          <button
            className={`btn btn--outline ${classes.iconBtn}`}
            onClick={handleAddToCart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={classes.btnIcon}>
              <g
                fillRule="evenodd"
                clipPath="url(#go-to-cart_svg__a)"
                clipRule="evenodd"
              >
                <path d="M.75 1.5A.75.75 0 011.5.75h2.084a1.75 1.75 0 011.68 1.262L6.05 4.72h12.625a1.75 1.75 0 011.683 2.23l-1.697 5.95a1.75 1.75 0 01-1.683 1.27H8.303a1.75 1.75 0 01-1.695-1.315l-1.845-7.19-.94-3.236a.25.25 0 00-.24-.18H1.5a.75.75 0 01-.75-.75zm5.703 4.719l1.608 6.264a.25.25 0 00.242.188h8.675a.25.25 0 00.24-.181l1.698-5.952a.25.25 0 00-.24-.319H6.452zm3.47 10.019a.5.5 0 00-.493.506.5.5 0 00.493.506.5.5 0 00.493-.506.5.5 0 00-.493-.506zm-1.993.506a2 2 0 011.993-2.006 2 2 0 011.993 2.006 2 2 0 01-1.993 2.006 2 2 0 01-1.993-2.006zm7.79-.506a.5.5 0 00-.493.506.5.5 0 00.493.506.5.5 0 00.493-.506.5.5 0 00-.493-.506zm-1.993.506a2 2 0 011.993-2.006 2 2 0 011.993 2.006 2 2 0 01-1.993 2.006 2 2 0 01-1.993-2.006z"></path>
              </g>
              <defs>
                <clipPath id="go-to-cart_svg__a">
                  <path d="M0 0h20v20H0z" transform="translate(.5)"></path>
                </clipPath>
              </defs>
            </svg>
            <span>Add to Cart</span>
          </button>
          <button
            className={`btn btn--full ${classes.iconBtn}`}
            onClick={() => navigate("/checkout")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={classes.btnIcon}>
              <path
                fillRule="evenodd"
                d="M3.927 3.28a.956.956 0 00-1.351 1.35l5.437 5.438-5.3 5.3a.956.956 0 101.352 1.351l5.43-5.43a1.727 1.727 0 00-.032-2.474L3.927 3.28z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M11.631 3.28a.956.956 0 10-1.351 1.35l5.437 5.438-5.3 5.3a.956.956 0 101.352 1.351l5.43-5.43a1.727 1.727 0 00-.032-2.474L11.631 3.28z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
