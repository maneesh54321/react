export interface DeliveryAddress {
  id: number;
  contact: {
    name: string;
    contactNo: string;
  };
  address: {
    line1: string;
    line2: string;
    pincode: number;
    city: string;
    state: string;
    landmark: string;
  };
}

const AddressCard = ({ address }: { address: DeliveryAddress }) => {
  return (
    <div className="address-card">
      <p className="name">{address.contact.name}</p>
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
      <p className="contact-no">{address.contact.contactNo}</p>
    </div>
  );
};

export default AddressCard;
