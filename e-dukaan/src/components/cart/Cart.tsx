import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks";
import Modal, { DialogHandle } from "../../UI/Modal";
import CartItemCard, { CartItem } from "./CartItemCard";
import EditCartItem from "./EditCartItem";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);

  const modalRef = useRef<DialogHandle>(null);

  const [editingCartItem, setEditingCartItem] = useState<CartItem | null>(null);

  useEffect(() => {
    const dialog = modalRef.current;
    if (editingCartItem) {
      dialog?.open();
      return () => dialog?.close();
    }
  }, [editingCartItem]);

  function handleOnEdit(item: CartItem) {
    setEditingCartItem(item);
  }

  function handleOnClose() {
    setEditingCartItem(null);
  }

  function handleOnContinue() {
    modalRef.current?.close();
    handleOnClose();
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <h3 className="secondary-heading">Product Details</h3>
          <ul className="cart-products">
            {items.map((cartItem, idx) => (
              <li key={idx}>
                <CartItemCard onEdit={handleOnEdit} cartItem={cartItem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {editingCartItem && (
        <Modal title="Edit Item" ref={modalRef} onClose={handleOnClose}>
          <div className="edit-item-content">
            <EditCartItem cartItem={editingCartItem} />
            <button className="btn btn--full w-100" onClick={handleOnContinue}>
              Continue
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
