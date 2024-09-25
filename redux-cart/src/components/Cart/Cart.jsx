import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions, fetchCart } from "../../store/cart-slice";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  function handleOnIncrement(product) {
    dispatch(cartActions.addItem(product));
  }

  function handleOnDecrement(product) {
    dispatch(cartActions.removeItem(product));
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <CartItem
            key={item.product.id}
            item={{
              title: item.product.title,
              quantity: item.quantity,
              total: item.product.price * item.quantity,
              price: item.product.price,
            }}
            onIncrement={(event) => handleOnIncrement(item.product)}
            onDecrement={(event) => handleOnDecrement(item.product)}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
