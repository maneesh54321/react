import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  className = "",
  open = false,
  onClose,
  children,
}) {
  const modal = useRef();

  useEffect(() => {
    const mod = modal.current;
    if (open) {
      mod.showModal();
    }
    return () => mod.close();
  }, [open]);

  function handleOnClose() {
    modal.current.close();
    onClose();
  }

  return createPortal(
    <dialog
      ref={modal}
      onClose={handleOnClose}
      className={`modal ${className}`}
    >
      <div>{children}</div>
    </dialog>,
    document.getElementById("modal")
  );
}
