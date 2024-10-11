import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import AddressCard, { UserDeliveryAddress } from "./AddressCard";
import Modal, { DialogHandle } from "../../UI/Modal";
import AddressForm, { DeliveryAddress } from "./address-form/AddressForm";
import { OrderActions } from "../../store/order-slice";
import {
  AuthActions,
  hasAddress,
  isAnonymousUser,
} from "../../store/auth-slice";

const AddressSelection = () => {
  const addressModalRef = useRef<DialogHandle>(null);

  const [editingAddress, setEditingAddress] =
    useState<UserDeliveryAddress | null>(null);

  const user = useAppSelector((state) => state.auth.user);

  const deliveryAddress = useAppSelector(
    (state) => state.order.deliveryAddress
  );

  const dispatch = useAppDispatch();

  let addresses: UserDeliveryAddress[] = [];

  if (user && user.address) {
    if (isAnonymousUser(user) && hasAddress(user)) {
      addresses = [
        {
          id: 1,
          contactDetails: {
            name: `${user.name.firstname} ${user.name.lastname}`,
            phoneNo: user.phone,
          },
          address: {
            line1: user.address.street,
            line2: "",
            city: user.address.city,
            state: "Karnataka",
            landmark: "Government School",
            pincode: user.address.zipcode,
          },
        },
      ];
    } else if (user && user.address) {
      addresses = [
        {
          id: 1,
          contactDetails: {
            name: `${user.name.firstname} ${user.name.lastname}`,
            phoneNo: user.phone,
          },
          address: {
            line1: user.address.street,
            line2: "",
            city: user.address.city,
            state: "Karnataka",
            landmark: "Government School",
            pincode: user.address.zipcode,
          },
        },
      ];
    }
  }

  function handleOnAddAddress() {
    addressModalRef.current?.open();
  }

  function handleOnEditAddress(deliveryAddress: UserDeliveryAddress) {
    setEditingAddress(deliveryAddress);
    addressModalRef.current?.open();
  }

  function handleOnSelectAddress(deliveryAddress: DeliveryAddress) {
    dispatch(OrderActions.setDeliveryAddress(deliveryAddress));
    dispatch(AuthActions.setUserAddress(deliveryAddress));
  }

  function handleSubmit(deliveryAddress: DeliveryAddress) {
    dispatch(OrderActions.setDeliveryAddress({ ...deliveryAddress, id: 1 }));
    dispatch(AuthActions.setUserAddress(deliveryAddress));
    setEditingAddress(null);
    addressModalRef.current?.close();
  }

  const modal = (
    <Modal ref={addressModalRef} title="Add Delivery Address">
      {editingAddress ? (
        <AddressForm deliveryAddress={editingAddress} onSubmit={handleSubmit} />
      ) : (
        <AddressForm onSubmit={handleSubmit} />
      )}
    </Modal>
  );

  if (addresses.length === 0) {
    return (
      <div className="no-address">
        <button className="btn btn--full" onClick={handleOnAddAddress}>
          Add New Address
        </button>
        {modal}
      </div>
    );
  }

  return (
    <div className="choose-address-container">
      <div className="choose-address">
        <div className="title">
          <h3 className="secondary-heading">Select Delivery Address</h3>
          <button
            className="btn btn--text btn--add-address"
            onClick={handleOnAddAddress}
          >
            + ADD NEW ADDRESS
          </button>
        </div>
        <div className="address-list">
          {addresses.map((address, idx) => (
            <div
              className={
                "del-address" +
                (deliveryAddress?.id === address.id ? " selected" : "")
              }
              onClick={() => handleOnSelectAddress(address)}
              key={idx}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  "radio-icon" +
                  (deliveryAddress?.id !== address.id
                    ? " radio-icon-selected"
                    : "")
                }
              >
                <path d="M10 3.56c3.55 0 6.44 2.89 6.44 6.44s-2.89 6.44-6.44 6.44S3.56 13.55 3.56 10 6.45 3.56 10 3.56M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  "radio-icon selected" +
                  (deliveryAddress?.id === address.id
                    ? " radio-icon-selected"
                    : "")
                }
              >
                <path d="M10 3.56c3.55 0 6.44 2.89 6.44 6.44s-2.89 6.44-6.44 6.44S3.56 13.55 3.56 10 6.45 3.56 10 3.56M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8"></path>
                <path d="M10 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4"></path>
              </svg>
              <div>
                <div className="address-container">
                  <AddressCard address={address} />
                  <button
                    className="btn btn--text address-edit-btn"
                    onClick={() => handleOnEditAddress(address)}
                  >
                    Edit
                  </button>
                </div>
                <button className="btn btn--full btn--deliver">
                  Deliver to this Address
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal}
    </div>
  );
};

export default AddressSelection;
