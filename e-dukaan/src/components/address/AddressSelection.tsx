import { useState } from "react";
import { ADDRESSES } from "../../utils/data";
import AddressCard from "./AddressCard";

const AddressSelection = () => {
  const [selectedAddressId, setSelectedAddressId] = useState<number>(1);

  return (
    <div className="choose-address">
      <div className="title">
        <h3 className="secondary-heading">Select Delivery Address</h3>
        <button className="btn btn--text btn--add-address">
          + ADD NEW ADDRESS
        </button>
      </div>
      <div className="address-list">
        {ADDRESSES.map((address, idx) => (
          <div
            className={
              "del-address" +
              (selectedAddressId === address.id ? " selected" : "")
            }
            onClick={() => setSelectedAddressId(address.id)}
            key={idx}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                "radio-icon" +
                (selectedAddressId !== address.id ? " radio-icon-selected" : "")
              }
            >
              <path d="M10 3.56c3.55 0 6.44 2.89 6.44 6.44s-2.89 6.44-6.44 6.44S3.56 13.55 3.56 10 6.45 3.56 10 3.56M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                "radio-icon selected" +
                (selectedAddressId === address.id ? " radio-icon-selected" : "")
              }
            >
              <path d="M10 3.56c3.55 0 6.44 2.89 6.44 6.44s-2.89 6.44-6.44 6.44S3.56 13.55 3.56 10 6.45 3.56 10 3.56M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8"></path>
              <path d="M10 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4"></path>
            </svg>
            <div>
              <AddressCard address={address} />
              <button className="btn btn--full btn--deliver">
                Deliver to this Address
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressSelection;
