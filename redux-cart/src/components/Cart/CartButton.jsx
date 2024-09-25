import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const count = cart.items
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  function handleOnClick() {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleOnClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
