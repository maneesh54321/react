import React, { useContext, useState } from "react";
import ForecastTable from "../components/ForecastTable";
import { WeatherContext } from "../store/weather-context";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";

function getTomorrow() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
}

enum Tabs {
  TODAY = "today",
  TOMORROW = "tomorrow",
  DAILY = "daily",
}

const IS_TODAY_DATA = ({ time }) => {
  const dataTime = new Date(time);
  dataTime.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime() === dataTime.getTime();
};

const IS_TOMORROW_DATA = ({ time }) => {
  const dataTime = new Date(time);
  dataTime.setHours(0, 0, 0, 0);
  const tomorrow = getTomorrow();
  return tomorrow.getTime() === dataTime.getTime();
};

const WeatherForecast = () => {
  const { weatherData } = useContext(WeatherContext);

  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.TODAY);

  let forecastData: any;
  let forecastCard;
  if (selectedTab === Tabs.DAILY) {
    forecastData = weatherData.daily.time.map((time, idx) => {
      return {
        date: new Date(time),
        weatherCode: weatherData.daily.weather_code[idx],
        temperature_2m_max: {
          value: weatherData.daily.temperature_2m_max[idx],
          unit: weatherData.daily_units.temperature_2m_max,
        },
        temperature_2m_min: {
          value: weatherData.daily.temperature_2m_max[idx],
          unit: weatherData.daily_units.temperature_2m_max,
        },
        sunrise: weatherData.daily.sunrise,
        sunset: weatherData.daily.sunset,
      };
    });
    forecastCard = DailyForecast;
  } else {
    let filter = IS_TODAY_DATA;
    if (selectedTab === Tabs.TOMORROW) {
      filter = IS_TOMORROW_DATA;
    }

    const filteredData = weatherData.hourly.time
      .map((time, idx) => ({
        time,
        idx,
      }))
      .filter(filter);

    forecastData = filteredData.map(({ time, idx }) => ({
      time: new Date(time),
      temperature_2m: {
        value: weatherData.hourly.temperature_2m[idx],
        unit: weatherData.hourly_units.temperature_2m,
      },
      humidity: weatherData.hourly.relative_humidity_2m[idx],
      weatherCode: weatherData.hourly.weather_code[idx],
      wind: {
        speed: weatherData.hourly.wind_speed_10m[idx],
        unit: weatherData.hourly_units.wind_speed_10m,
      },
    }));
    forecastCard = HourlyForecast;
  }

  const selectTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <aside className="weather-forecast">
      <header className="forecast-header">
        <menu className="menu">
          <a
            onClick={() => selectTab(Tabs.TODAY)}
            className={`link menu-item ${
              selectedTab === Tabs.TODAY ? "active" : ""
            }`}
          >
            Today
          </a>
          <a
            onClick={() => selectTab(Tabs.TOMORROW)}
            href="#"
            className={`link menu-item ${
              selectedTab === Tabs.TOMORROW ? "active" : ""
            }`}
          >
            Tomorrow
          </a>
          <a
            onClick={() => selectTab(Tabs.DAILY)}
            href="#"
            className={`link menu-item ${
              selectedTab === Tabs.DAILY ? "active" : ""
            }`}
          >
            10 days
          </a>
          <button className="btn menu-btn">See Monthly Cast</button>
        </menu>
      </header>
      <section className="forecast-data">
        <ForecastTable
          forecastData={forecastData}
          forecastCard={forecastCard}
        />
      </section>
    </aside>
  );
};

export default WeatherForecast;
