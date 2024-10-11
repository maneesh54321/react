import { useContext, useEffect } from "react";
import RootLayout from "./pages/RootLayout";
import { LocationContext } from "./store/LocationContextProvider";
import { WeatherContext } from "./store/WeatherContextProvider";
import {
  getAtmosphericData,
  getDailyWeatherData,
  getWeatherData,
} from "./utils/http";
import { ThemeContext } from "./store/ThemeContextProvider";

function App() {
  const { location, setCurrentLocation } = useContext(LocationContext);
  const { theme } = useContext(ThemeContext);

  const { setWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    async function fetchWeatherData({
      latitude,
      longitude,
    }: {
      latitude: number;
      longitude: number;
    }) {
      const [currentWeather, dailyWeather, atmosphere] = await Promise.all([
        getWeatherData({ latitude, longitude }),
        getDailyWeatherData({ latitude, longitude }),
        getAtmosphericData({ latitude, longitude }),
      ]);

      currentWeather.daily_units = dailyWeather.daily_units;
      currentWeather.daily = dailyWeather.daily;
      setWeatherData({
        weather: currentWeather,
        atmosphere,
      });
    }

    if (location) {
      fetchWeatherData(location);
    }
  }, [setWeatherData, location, setCurrentLocation]);
  return (
    <div className={`root-container ${theme}`}>
      <RootLayout />
    </div>
  );
}

export default App;
