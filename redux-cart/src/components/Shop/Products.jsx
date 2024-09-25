import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { cartActions } from "../../store/cart-slice";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Test1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Test2",
    price: 8,
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(cartActions.addItem(product));
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((pdt) => (
          <ProductItem
            key={pdt.id}
            title={pdt.title}
            price={pdt.price}
            description={pdt.description}
            onAddToCart={(event) => handleAddToCart(pdt)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
