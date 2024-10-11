import { DeliveryAddress } from "./address-form/AddressForm";

export type UserDeliveryAddress = DeliveryAddress & { id: number };

const AddressCard = ({ address }: { address: UserDeliveryAddress }) => {
  return (
    <div className="address-card">
      <p className="name">{address.contactDetails.name}</p>
      <p className="address">
        {address.address.line1 +
          (address.address.line2 ? ", " + address.address.line2 : "") +
          (address.address.landmark ? ", " + address.address.landmark : "") +
          ", " +
          address.address.city +
          ", " +
          address.address.state +
          ", " +
          address.address.pincode}
      </p>
      <p className="contact-no">{address.contactDetails.phoneNo}</p>
    </div>
  );
};

export default AddressCard;
