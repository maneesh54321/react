import { useState } from "react";
import { UserProgressContext } from "../store/user-progress-context";

export default function UserProgressContextProvider({ children }) {
  const [progress, setProgress] = useState("");

  function handleOpenCart() {
    setProgress("cart");
  }

  function handleGotoCheckout() {
    setProgress("checkout");
  }

  function handleClose() {
    setProgress("");
  }

  const userProgressContextValue = {
    progress: progress,
    close: handleClose,
    openCart: handleOpenCart,
    gotoCheckout: handleGotoCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressContextValue}>
      {children}
    </UserProgressContext.Provider>
  );
}
