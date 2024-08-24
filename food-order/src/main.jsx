import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import UserProgressContextProvider from "./components/UserProgressContextProvider.jsx";
import CartContextProvider from "./components/CartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProgressContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserProgressContextProvider>
  </React.StrictMode>
);
