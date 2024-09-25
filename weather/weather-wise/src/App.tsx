import React, { useEffect, useState } from "react";

import "./App.css";
import RootLayout from "./pages/RootLayout";
import { WeatherContext } from "./store/weather-context";
import { INITIAL_DATA } from "./utils/data";
import {
  getAtmosphericData,
  getDailyWeatherData,
  getWeatherData,
} from "./utils/http";
import { Location } from "./components/LocationSearchBar";

function App() {
  const [weatherData, setWeatherData] = useState(INITIAL_DATA.weatherData);
  const [atmosphericData, setAtmosphericData] = useState(
    INITIAL_DATA.atmosphericData
  );
  const [location, setLocation] = useState<Location>(INITIAL_DATA.location);

  useEffect(() => {
    async function getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const p = position.coords;
          console.log(`latitude: ${p.latitude}, longitude: ${p.longitude}`);

          fetchWeatherData(p);
        },
        (err) => {
          console.log("Choose a city");
        }
      );
    }

    async function fetchWeatherData({ latitude, longitude }) {
      const [weatherData, dailyWeatherData, atmosphericData] =
        await Promise.all([
          getWeatherData({ latitude, longitude }),
          getDailyWeatherData({ latitude, longitude }),
          getAtmosphericData({ latitude, longitude }),
        ]);

      weatherData.daily_units = dailyWeatherData.daily_units;
      weatherData.daily = dailyWeatherData.daily;
      setWeatherData(weatherData);
      setAtmosphericData(atmosphericData);
    }

    if (location.id !== -1) {
      fetchWeatherData(location);
    } else {
      getCurrentLocation();
    }
  }, [setWeatherData, location]);

  function setCurrentLocation(location: Location) {
    setLocation(location);
  }

  const ctxValue = {
    weatherData,
    atmosphericData,
    location,
    setCurrentLocation,
  };

  return (
    <WeatherContext.Provider value={ctxValue}>
      <RootLayout />
    </WeatherContext.Provider>
  );
}

export default App;
