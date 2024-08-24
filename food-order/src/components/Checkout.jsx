import { useContext } from "react";

import { UserProgressContext } from "../store/user-progress-context";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import { CartContext } from "../store/food-cart-context.jsx";
import { currencyFormatter } from "../utils/formatter.js";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const URL = "http://localhost:3000/orders";
const CONFIG = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { cartMeals, clearCart } = useContext(CartContext);
  const { close } = useContext(UserProgressContext);

  const totalQty = cartMeals
    .map((m) => +m.meal.price * +m.quantity)
    .reduce((total, price) => total + price, 0);

  const { data, loading, error, sendRequest } = useHttp(URL, CONFIG);

  function completeOrder() {
    clearCart();
    close();
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    const order = {
      items: cartMeals,
      customer: customerData,
    };
    const body = JSON.stringify({ order });
    sendRequest(body);
  }

  let actions = (
    <>
      <Button textOnly onClick={close}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (loading) {
    actions = (
      <>
        <p>Placing order..</p>
      </>
    );
  }

  if (data && !error) {
    return (
      <>
        <h2>Success!!</h2>
        <p>Your order was placed successfully!!</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={completeOrder}>Okay</Button>
        </p>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(totalQty)}</p>
        <Input label="Full Name" id="name" />
        <Input label="E-mail Address" id="email" />
        <Input label="Street" id="street" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" />
          <Input label="City" id="city" />
        </div>
        {error && <Error title="Failed to place order." message={error} />}
        <div className="modal-actions">{actions}</div>
      </form>
    </>
  );
}
