import { useContext } from "react";

import { CartContext } from "../store/food-cart-context";
import { UserProgressContext } from "../store/user-progress-context";
import { currencyFormatter } from "../utils/formatter";
import Button from "./UI/Button";

export default function Cart() {
  const {
    cartMeals,
    handleOnMealIncrement: onMealIncrement,
    handleOnMealDecrement: onMealDecrement,
  } = useContext(CartContext);

  const { gotoCheckout, close } = useContext(UserProgressContext);

  const totalPrice = cartMeals
    .map((cm) => +cm.meal.price * +cm.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartMeals.map((cartMeal) => (
            <li key={cartMeal.meal.id} className="cart-item">
              <p>{cartMeal.meal.name}</p>
              <div className="cart-item-actions">
                <button onClick={() => onMealDecrement(cartMeal.meal)}>
                  -
                </button>
                <span>{cartMeal.quantity}</span>
                <button onClick={() => onMealIncrement(cartMeal.meal)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <p>{currencyFormatter.format(totalPrice)}</p>
        </div>
      </div>
      <div className="modal-actions">
        <Button textOnly onClick={close}>
          Close
        </Button>
        <Button onClick={gotoCheckout}>Go to Checkout</Button>
      </div>
    </>
  );
}
