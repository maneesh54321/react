import { useReducer } from "react";
import { CartContext } from "../store/food-cart-context";

function cartReducer(state, action) {
  if (action.type === "ADD_MEAL") {
    const meal = action.payload;
    const idx = state.findIndex((cartMeal) => cartMeal.meal.id === meal.id);
    const newCartMeals = [...state];
    if (idx > -1) {
      const existingCartMeal = state[idx];
      const updatedCartMeal = {
        ...existingCartMeal,
        quantity: existingCartMeal.quantity + 1,
      };
      newCartMeals[idx] = updatedCartMeal;
      return newCartMeals;
    } else {
      return [
        ...newCartMeals,
        {
          meal,
          quantity: 1,
        },
      ];
    }
  } else if (action.type === "INCREMENT_MEAL_QUANTITY") {
    const meal = action.payload;
    const newCartMeals = [...state];
    constidx = newCartMeals.findIndex((cm) => cm.meal.id === meal.id);
    const cartMeal = newCartMeals[idx];
    const updatedCartMeal = {
      ...cartMeal,
      quantity: cartMeal.quantity + 1,
    };
    newCartMeals[idx] = updatedCartMeal;
    return newCartMeals;
  } else if (action.type === "DECREMENT_MEAL_QUANTITY") {
    const meal = action.payload;
    const newCartMeals = [...state];
    const idx = newCartMeals.findIndex((cm) => cm.meal.id === meal.id);
    const cartMeal = newCartMeals[idx];
    if (cartMeal.quantity === 1) {
      newCartMeals.splice(idx, 1);
      return newCartMeals;
    }
    const updatedCartMeal = {
      ...cartMeal,
      quantity: cartMeal.quantity - 1,
    };
    newCartMeals[idx] = updatedCartMeal;
    return newCartMeals;
  } else if (action.type === "CLEAR_CART") {
    return [];
  } else {
    return state;
  }
}

export default function CartContextProvider({ children }) {
  const [cartMeals, dispatchCartAction] = useReducer(cartReducer, []);

  function handleAddMealToCart(meal) {
    dispatchCartAction({
      type: "ADD_MEAL",
      payload: meal,
    });
  }

  function handleOnMealIncrement(meal) {
    dispatchCartAction({
      type: "INCREMENT_MEAL_QUANTITY",
      payload: meal,
    });
  }

  function handleOnMealDecrement(meal) {
    dispatchCartAction({
      type: "DECREMENT_MEAL_QUANTITY",
      payload: meal,
    });
  }

  function clearCart() {
    dispatchCartAction({
      type: "CLEAR_CART",
    });
  }

  const contextValue = {
    cartMeals: cartMeals,
    handleAddMealToCart,
    handleOnMealIncrement,
    handleOnMealDecrement,
    clearCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
