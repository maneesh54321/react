import Header from "../components/header/Header";
import SubHeader from "../components/header/SubHeader";
import Products from "../components/product/Products";
import { PRODUCTS } from "../utils/data";

const RootLayout = () => {
  return (
    <>
      <header>
        <div className="header">
          <Header />
        </div>
        <div className="sub-header">
          <SubHeader />
        </div>
      </header>
      <main>
        <div className="product-catalog">
          <p className="product-catalog-title">Products For You</p>
          <Products products={PRODUCTS} />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
