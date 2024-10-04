import { useCallback, useEffect, useState } from "react";

import RootLayout from "./pages/RootLayout";
import { WeatherContext } from "./store/weather-context";
import { Location, WeatherData } from "./utils/data";
import {
  getAtmosphericData,
  getDailyWeatherData,
  getWeatherData,
} from "./utils/http";
import { LocationContext } from "./store/location-context";
import { ThemeContext } from "./store/theme-context";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    weather: null,
    atmosphere: null,
  });
  const [location, setLocation] = useState<Location | null>(null);

  const [theme, setTheme] = useState<"dark-theme" | "light-theme">(
    "dark-theme"
  );

  useEffect(() => {
    async function getLocationFromCoordinates(lat: number, lng: number) {
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

      const response = await fetch(url);

      // if (!response.ok) {
      // }
      const res = await response.json();

      return res;
    }

    async function getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const p = position.coords;
          console.log(`latitude: ${p.latitude}, longitude: ${p.longitude}`);
          const res = await getLocationFromCoordinates(p.latitude, p.longitude);
          console.log(res);
          const location: Location = {
            id: res.place_id,
            name: res.address.county,
            latitude: res.lat,
            longitude: res.lon,
            country: res.address.country,
            country_code: res.address.country_code,
            admin1: res.address.state,
            admin1_id: res.address.postcode,
            country_id: null,
            elevation: null,
            feature_code: null,
            timezone: null,
          };

          setLocation(location);
        },
        () => {
          console.log("Choose a city");
        }
      );
    }

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
      setWeatherData((prevWeatherData) => ({
        ...prevWeatherData,
        weather: currentWeather,
        atmosphere,
      }));
    }

    if (location) {
      fetchWeatherData(location);
    } else {
      getCurrentLocation();
    }
  }, [setWeatherData, location]);

  const setCurrentLocation = useCallback(
    (location: Location | null) => {
      setLocation(location);
    },
    [setLocation]
  );

  const weatherCtxValue = weatherData;

  const locationCtxValue = {
    location,
    setCurrentLocation,
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "dark-theme") {
        return "light-theme";
      }
      return "dark-theme";
    });
  };

  const themeCtxValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeCtxValue}>
      <LocationContext.Provider value={locationCtxValue}>
        <WeatherContext.Provider value={weatherCtxValue}>
          <div className={`root-container ${theme}`}>
            <RootLayout />
          </div>
        </WeatherContext.Provider>
      </LocationContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
