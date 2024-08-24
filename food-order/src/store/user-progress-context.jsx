import { createContext } from "react";

export const UserProgressContext = createContext({
  progress: "", // cart, checkout
  close: () => {},
  openCart: () => {},
  gotoCheckout: () => {},
});
