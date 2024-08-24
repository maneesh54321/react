import { useContext } from "react";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/UI/Modal";
import { UserProgressContext } from "./store/user-progress-context";

function App() {
  const { progress, close } = useContext(UserProgressContext);

  function handleModalClose() {
    close();
  }

  return (
    <>
      <Header />
      <Modal open={progress !== ""} onClose={handleModalClose}>
        {progress === "cart" && <Cart />}
        {progress === "checkout" && <Checkout />}
      </Modal>
      <Meals />
    </>
  );
}

export default App;
