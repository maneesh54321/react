import React, { useEffect, useState } from "react";

import "./App.css";
import RootLayout from "./pages/RootLayout";
import { WeatherContext } from "./store/weather-context";
import { Location, WeatherData } from "./utils/data";
import {
  getAtmosphericData,
  getDailyWeatherData,
  getWeatherData,
} from "./utils/http";
import { LocationContext } from "./store/location-context";

const INITIAL_WEATHER_DATA = {
  weather: null,
  atmosphere: null,
};

function App() {
  const [weatherData, setWeatherData] =
    useState<WeatherData>(INITIAL_WEATHER_DATA);
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    async function fetchWeatherData({ latitude, longitude }) {
      const [currentWeather, dailyWeather, atmosphere] = await Promise.all([
        getWeatherData({ latitude, longitude }),
        getDailyWeatherData({ latitude, longitude }),
        getAtmosphericData({ latitude, longitude }),
      ]);

      currentWeather.daily_units = dailyWeather.daily_units;
      currentWeather.daily = dailyWeather.daily;
      setWeatherData({
        ...weatherData,
        weather: currentWeather,
        atmosphere,
      });
    }

    if (location) {
      fetchWeatherData(location);
    }
  }, [setWeatherData, location]);

  function setCurrentLocation(location: Location | null) {
    setLocation(location);
    setWeatherData(INITIAL_WEATHER_DATA);
  }

  const weatherCtxValue = weatherData;

  const locationCtxValue = {
    location,
    setCurrentLocation,
  };

  return (
    <LocationContext.Provider value={locationCtxValue}>
      <WeatherContext.Provider value={weatherCtxValue}>
        <RootLayout />
      </WeatherContext.Provider>
    </LocationContext.Provider>
  );
}

export default App;
