import { ADDRESSES } from "../../utils/data";
import AddressCard from "./AddressCard";

const AddressSelection = () => {
  return (
    <div className="choose-address">
      <div className="title">
        <h3 className="secondary-heading">Select Delivery Address</h3>
        <button className="btn btn-text">+ ADD NEW ADDRESS</button>
      </div>
      <div className="address-list">
        {ADDRESSES.map((address, idx) => (
          <AddressCard address={address} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AddressSelection;
