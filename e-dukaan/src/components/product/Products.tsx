import { useNavigate } from "react-router";

import { useGetAllProductsQuery } from "../../store/products-api-slice";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  const navigate = useNavigate();

  if (isLoading) {
    return <p className="product-catalog-titlte">Loading Products...</p>;
  }

  if (error) {
    return <p className="product-catalog-title">Failed to load Products!!!</p>;
  }

  function handleProductClick(id: number) {
    navigate("products?id=" + id);
  }

  return (
    <>
      <p className="product-catalog-title">Products For You</p>
      <div className="products">
        {products?.map((product, idx) => (
          <div onClick={() => handleProductClick(product.id)} key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
