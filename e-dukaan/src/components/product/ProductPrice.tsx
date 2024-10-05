const ProductPrice = ({
  mrp,
  discountedPrice,
}: {
  mrp: number;
  discountedPrice: number | undefined;
}) => {
  if (discountedPrice) {
    return (
      <div>
        <span className="price">{discountedPrice}</span>
        <span className="mrp">{mrp}</span>
        <span className="off-percent">
          {((mrp - discountedPrice) / mrp) * 100}%
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="price">{discountedPrice}</span>
      </div>
    );
  }
};

export default ProductPrice;
