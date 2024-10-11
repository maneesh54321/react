import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItemCard";
import { useAppDispatch } from "../../hooks";
import { OrderActions } from "../../store/order-slice";

const PriceDetails = ({ items }: { items: CartItem[] }) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const price = items
    .map((item) => item.product.price.mrp * item.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  const totalItems = items
    .map((item) => item.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  const discounts = 0;

  const orderTotal = price - discounts;

  function onContinue() {
    dispatch(OrderActions.setItems(items));
    navigate("address");
  }

  return (
    <div className="price-details-container">
      <div className="price-details">
        <h3 className="secondary-heading">Price Details({totalItems} Items)</h3>
        <div className="price-type">
          <p className="price-type-text">Total Product Price</p>
          <p className="value">+&#8377;{price.toFixed(2)}</p>
        </div>
        <div className="price-type price-type--discount">
          <p className="price-type-text">Total Discounts</p>
          <p className="value">-&#8377;{discounts.toFixed(2)}</p>
        </div>
        <div className="price-type price-type--total">
          <p className="price-type-text">Order Total</p>
          <p className="value">&#8377;{orderTotal.toFixed(2)}</p>
        </div>
        <button onClick={onContinue} className="btn btn--full proceed-btn">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PriceDetails;
