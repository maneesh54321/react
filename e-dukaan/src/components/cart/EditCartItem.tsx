import { useAppDispatch } from "../../hooks";
import { CartActions } from "../../store/cart-slice";
import Counter from "../../UI/counter/Counter";
import { CartItem } from "./CartItemCard";

import classes from "./EditCartItem.module.css";

const EditCartItem = ({ cartItem }: { cartItem: CartItem }) => {
  const dispatch = useAppDispatch();

  function handleIncreaseQty() {
    dispatch(CartActions.addItem(cartItem.product));
  }

  function handleDecreaseQty() {
    dispatch(CartActions.removeItem(cartItem.product));
  }

  return (
    <div className={classes.editCartItem}>
      <img
        src={cartItem.product.image}
        alt={cartItem.product.title}
        className={classes.itemImg}
      />
      <div className={classes.details}>
        <p className={classes.productTitle}>{cartItem.product.title}</p>
        <p className={classes.price}>{cartItem.product.price.mrp}</p>
        <div className={classes.itemQty}>
          <span>Qty</span>
          <Counter
            initialValue={cartItem.quantity}
            onIncrement={handleIncreaseQty}
            onDecrement={handleDecreaseQty}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCartItem;
