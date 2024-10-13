import { useNavigate } from "react-router";

import { useGetAllProductsQuery } from "../../store/products-api-slice";
import mLoader from "../../assets/meesho/m-loader.png";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  const navigate = useNavigate();
  const searchParams = useSearchParams();

  const category = searchParams[0].get("category");
  const search_text = searchParams[0].get("search_text");

  if (isLoading) {
    return (
      <div className="fs-loader">
        <p className="product-catalog-title">Please wait, Loading content</p>
        <img src={mLoader} alt="Loading content icon" />
      </div>
    );
  }

  if (error) {
    return <p className="product-catalog-title">Failed to load Products!!!</p>;
  }

  function handleProductClick(id: number) {
    navigate("products?id=" + id);
  }

  let filteredProducts =
    category && category !== "all"
      ? products?.filter((product) => product.category === category)
      : products;

  filteredProducts =
    search_text && search_text !== ""
      ? filteredProducts?.filter(
          (product) =>
            product.title.toLowerCase().indexOf(search_text.toLowerCase()) >= 0
        )
      : filteredProducts;

  return (
    <>
      <p className="product-catalog-title">Products For You</p>
      <div className="products">
        {filteredProducts?.map((product, idx) => (
          <div onClick={() => handleProductClick(product.id)} key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
