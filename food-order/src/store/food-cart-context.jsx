import { createContext } from "react";

export const CartContext = createContext({
  cartMeals: [
    {
      meal: {
        id: "1",
        name: "",
        description: "",
        image: "",
      },
      quantity: 1,
    },
  ],
  mode: "cart",
  handleAddMealToCart: () => {},
  handleOnMealIncrement: () => {},
  handleOnMealDecrement: () => {},
  resetCart: () => {},
});
