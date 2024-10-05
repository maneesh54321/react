const PriceDetails = () => {
  return (
    <div className="price-details-container">
      <h3 className="secondary-heading">Price Details(2 Items)</h3>
      <div className="price-type">
        <p className="price-type-text">Total Product Price</p>
        <p className="value">&#8377;+155</p>
      </div>
      <div className="price-type price-type--discount">
        <p className="price-type-text">Total Discounts</p>
        <p className="value">&#8377;-16</p>
      </div>
      <div className="price-type price-type--total">
        <p className="price-type-text">Order Total</p>
        <p className="value">&#8377;139</p>
      </div>
      <button className="btn btn-full proceed-btn">Continue</button>
    </div>
  );
};

export default PriceDetails;
