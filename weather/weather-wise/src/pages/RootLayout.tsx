import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import WeatherDashboard from "./WeatherDashboard";
import WeatherForecast from "./WeatherForecast";
import { ThemeContext } from "../store/ThemeContextProvider";
import { WeatherContext } from "../store/weather-context";
import { Location, WeatherData } from "../utils/data";
import { LocationContext } from "../store/LocationContextProvider";
import {
  getAtmosphericData,
  getDailyWeatherData,
  getWeatherData,
} from "../utils/http";

const RootLayout = () => {
  const { theme } = useContext(ThemeContext);

  const { location, setCurrentLocation } = useContext(LocationContext);

  const [weatherData, setWeatherData] = useState<WeatherData>({
    weather: null,
    atmosphere: null,
  });

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
          const res = await getLocationFromCoordinates(p.latitude, p.longitude);
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

          setCurrentLocation(location);
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
  }, [setWeatherData, location, setCurrentLocation]);

  const weatherCtxValue = weatherData;

  return (
    <WeatherContext.Provider value={weatherCtxValue}>
      <div className={`root-container ${theme}`}>
        <div className="root-layout container">
          <Header />
          <main className="dashboard">
            <WeatherDashboard />
          </main>
          <div className="forecast">
            <WeatherForecast />
          </div>
        </div>
      </div>
    </WeatherContext.Provider>
  );
};

export default RootLayout;
