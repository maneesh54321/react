import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "product 1",
  },
  {
    id: "p2",
    title: "product 2",
  },
  {
    id: "p3",
    title: "product 3",
  },
];

export default function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`} relative="path">
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
