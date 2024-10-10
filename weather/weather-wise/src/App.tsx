import RootLayout from "./pages/RootLayout";
import LocationContextProvider from "./store/LocationContextProvider";
import ThemeContextProvider from "./store/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <LocationContextProvider>
        <RootLayout />
      </LocationContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
