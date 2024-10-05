const ProductPrice = ({
  mrp,
  discountedPrice,
}: {
  mrp: number;
  discountedPrice: number | undefined;
}) => {
  if (discountedPrice) {
    return (
      <div className="product-price">
        <span className="price">&#8377;{discountedPrice}</span>
        <span className="mrp">&#8377;{mrp}</span>
        <span className="off-percent">
          {(((mrp - discountedPrice) / mrp) * 100).toPrecision(2)}% off
        </span>
      </div>
    );
  } else {
    return (
      <div className="product-price">
        <span className="price">&#8377;{mrp}</span>
      </div>
    );
  }
};

export default ProductPrice;
