import Dropdown from "../../../UI/input/dropdown/Dropdown";
import Input from "../../../UI/input/text/Input";
import { STATES } from "../../../utils/data";
import classes from "./AddressForm.module.css";

export type DeliveryAddress = {
  contactDetails: {
    name: string;
    phoneNo: string;
  };
  address: {
    line1: string;
    line2: string;
    pincode: string;
    city: string;
    state: string;
    landmark: string;
  };
};

type Props = {
  deliveryAddress?: DeliveryAddress;
  onSubmit: (deliveryAddress: DeliveryAddress) => void;
};

const emptyDeliveryAddress: DeliveryAddress = {
  contactDetails: {
    name: "",
    phoneNo: "",
  },
  address: {
    line1: "",
    line2: "",
    pincode: "",
    city: "",
    state: "",
    landmark: "",
  },
};

const AddressForm = ({
  deliveryAddress = emptyDeliveryAddress,
  onSubmit,
}: Props) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newDeliveryAddress: DeliveryAddress = {
      contactDetails: {
        name: formData.get("name")?.toString() || "",
        phoneNo: formData.get("phoneNo")?.toString() || "",
      },
      address: {
        line1: formData.get("buildingName")?.toString() || "",
        line2: formData.get("area")?.toString() || "",
        city: formData.get("city")?.toString() || "",
        state: formData.get("state")?.toString() || "",
        pincode: formData.get("pincode")?.toString() || "",
        landmark: formData.get("landmark")?.toString() || "",
      },
    };
    onSubmit(newDeliveryAddress);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.addressForm}>
        <section className={classes.contactDetails + " mb-3"}>
          <h3 className="secondary-heading mb-2">Contact Details</h3>
          <Input
            initialValue={deliveryAddress.contactDetails.name}
            className="mb-2"
            label="Name"
            name="name"
          />
          <Input
            initialValue={deliveryAddress.contactDetails.phoneNo}
            className="mb-2"
            label="Contact Number"
            name="phoneNo"
          />
        </section>
        <section className={classes.address}>
          <h3 className="secondary-heading mb-2">Address</h3>
          <Input
            initialValue={deliveryAddress.address.line1}
            className="mb-2"
            label="House no. / Building name"
            name="buildingName"
          />
          <Input
            initialValue={deliveryAddress.address.line2}
            className="mb-2"
            label="Road name / area / colony"
            name="area"
          />
          <Input
            initialValue={deliveryAddress.address.pincode}
            className="mb-2"
            label="Pincode"
            name="pincode"
          />
          <div className="form-group">
            <Input
              initialValue={deliveryAddress.address.city}
              className="mb-2"
              label="City"
              name="city"
            />
            <Dropdown
              initialValue={deliveryAddress.address.state}
              options={STATES}
              className="mb-2"
              label="State"
              name="state"
            />
          </div>
          <Input
            initialValue={deliveryAddress.address.landmark}
            className="mb-2"
            label="Nearby Famous Place / Shop / School etc. (optional)"
            name="landmark"
          />
        </section>
      </div>
      <button type="submit" className="btn btn--full w-100">
        Save Address and Continue
      </button>
    </form>
  );
};

export default AddressForm;
