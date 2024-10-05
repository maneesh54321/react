import ProductCard, { Product } from "./ProductCard";

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Products;
