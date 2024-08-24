import { useContext } from "react";

import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/food-cart-context";
import { UserProgressContext } from "../store/user-progress-context";

export default function Header() {
  const { cartMeals } = useContext(CartContext);

  const { openCart } = useContext(UserProgressContext);

  const mealsCount = cartMeals
    .map((cartMeal) => +cartMeal.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A Restaurant" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={openCart}>
          Cart({mealsCount})
        </Button>
      </nav>
    </header>
  );
}
