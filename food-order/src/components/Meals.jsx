import { useContext } from "react";
import useHttp from "../hooks/useHttp";
import { CartContext } from "../store/food-cart-context";
import MealItem from "./MealItem";
import Error from "./Error";

const URL = "http://localhost:3000/meals";
const CONFIG = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Meals() {
  const { handleAddMealToCart } = useContext(CartContext);

  const { loading, error, data: meals } = useHttp(URL, CONFIG, [], true);

  if (error) {
    return <Error title="Failed to fetch meals." message={error} />;
  }

  return (
    <>
      {loading && <p className="center">Fetching meals...</p>}
      {!loading && (
        <ul id="meals">
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              meal={meal}
              onAddToCart={() => handleAddMealToCart(meal)}
            />
          ))}
        </ul>
      )}
    </>
  );
}
