import { useGetAllCategoriesQuery } from "../../store/products-api-slice";

const SubHeader = () => {
  const { data } = useGetAllCategoriesQuery();
  return (
    <div className="container">
      <menu className="category-menu">
        {data?.map((category, idx) => (
          <li key={idx} className="category nav-hover">
            <a href="#" className="link">
              {category}
            </a>
          </li>
        ))}
        {/* <li className="category nav-hover">
          <a href="#" className="link">
            Women Ethnic
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Electronics
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Women Western
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Men
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Kids
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Home & Kitchen
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Beauty & Health
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Jewellery & Accessories
          </a>
        </li>
        <li className="category nav-hover">
          <a href="#" className="link">
            Bags & Footwear
          </a>
        </li> */}
      </menu>
    </div>
  );
};

export default SubHeader;
