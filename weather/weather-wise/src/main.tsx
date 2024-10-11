import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./queries.css";
import ThemeContextProvider from "./store/ThemeContextProvider.tsx";
import LocationContextProvider from "./store/LocationContextProvider.tsx";
import WeatherContextProvider from "./store/WeatherContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <LocationContextProvider>
      <WeatherContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </WeatherContextProvider>
    </LocationContextProvider>
  </ThemeContextProvider>
);
