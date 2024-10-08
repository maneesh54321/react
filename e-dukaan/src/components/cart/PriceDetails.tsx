import { Link } from "react-router-dom";
import { CartItem } from "./CartItemCard";

const PriceDetails = ({ items }: { items: CartItem[] }) => {
  const price = items
    .map((item) => item.product.price.mrp * item.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  const totalItems = items
    .map((item) => item.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  const discounts = 0;

  const orderTotal = price - discounts;

  return (
    <div className="price-details-container">
      <h3 className="secondary-heading">Price Details({totalItems} Items)</h3>
      <div className="price-type">
        <p className="price-type-text">Total Product Price</p>
        <p className="value">+&#8377;{price}</p>
      </div>
      <div className="price-type price-type--discount">
        <p className="price-type-text">Total Discounts</p>
        <p className="value">-&#8377;{discounts}</p>
      </div>
      <div className="price-type price-type--total">
        <p className="price-type-text">Order Total</p>
        <p className="value">&#8377;{orderTotal}</p>
      </div>
      <Link to="address" className="link--address">
        <button className="btn btn--full proceed-btn">Continue</button>
      </Link>
    </div>
  );
};

export default PriceDetails;
