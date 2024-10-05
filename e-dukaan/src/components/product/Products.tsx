import ProductCard, { Product } from "./ProductCard";

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className="products">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
};

export default Products;
