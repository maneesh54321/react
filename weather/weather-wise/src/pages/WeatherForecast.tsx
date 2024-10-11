import { useContext, useState } from "react";
import ContentLoader from "react-content-loader";

import DailyForecast, {
  DailyForecastDataRow,
} from "../components/DailyForecast";
import ForecastTable from "../components/ForecastTable";
import HourlyForecast, {
  HourlyForecastDataRow,
} from "../components/HourlyForecast";
import { WeatherContext } from "../store/WeatherContextProvider";

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

const IS_TODAY_DATA = ({ time }: { time: string }) => {
  const dataTime = new Date(time);
  dataTime.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime() === dataTime.getTime();
};

const IS_TOMORROW_DATA = ({ time }: { time: string }) => {
  const dataTime = new Date(time);
  dataTime.setHours(0, 0, 0, 0);
  const tomorrow = getTomorrow();
  return tomorrow.getTime() === dataTime.getTime();
};

const WeatherForecast = () => {
  const { weatherData } = useContext(WeatherContext);

  const { weather } = weatherData;

  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.TODAY);

  if (!weather) {
    return (
      <aside className="weather-forecast">
        <ContentLoader
          speed={2}
          width="100%"
          height={600}
          viewBox="0 0 400 600"
          backgroundColor="#7a7a7a"
          foregroundColor="#ecebeb"
        >
          <circle cx="49" cy="78" r="21" />
          <rect x="85" y="63" rx="4" ry="4" width="287" height="9" />
          <rect x="86" y="81" rx="4" ry="4" width="287" height="9" />
          <circle cx="49" cy="161" r="21" />
          <rect x="85" y="146" rx="4" ry="4" width="287" height="9" />
          <rect x="86" y="164" rx="4" ry="4" width="287" height="9" />
          <circle cx="49" cy="244" r="21" />
          <rect x="85" y="229" rx="4" ry="4" width="287" height="9" />
          <rect x="86" y="247" rx="4" ry="4" width="287" height="9" />
          <circle cx="48" cy="324" r="21" />
          <rect x="84" y="309" rx="4" ry="4" width="287" height="9" />
          <rect x="85" y="327" rx="4" ry="4" width="287" height="9" />
          <circle cx="48" cy="407" r="21" />
          <rect x="84" y="392" rx="4" ry="4" width="287" height="9" />
          <rect x="85" y="410" rx="4" ry="4" width="287" height="9" />
          <circle cx="48" cy="484" r="21" />
          <rect x="84" y="469" rx="4" ry="4" width="287" height="9" />
          <rect x="85" y="487" rx="4" ry="4" width="287" height="9" />
          <circle cx="49" cy="563" r="21" />
          <rect x="85" y="548" rx="4" ry="4" width="287" height="9" />
          <rect x="86" y="566" rx="4" ry="4" width="287" height="9" />
        </ContentLoader>
      </aside>
    );
  }

  let table;

  if (selectedTab === Tabs.DAILY) {
    const forecastData: DailyForecastDataRow[] = weather.daily.time.map(
      (time, idx) => {
        return {
          date: new Date(time),
          weatherCode: weather.daily.weather_code[idx],
          temperature_2m_max: {
            value: weather.daily.temperature_2m_max[idx],
            unit: weather.daily_units.temperature_2m_max,
          },
          temperature_2m_min: {
            value: weather.daily.temperature_2m_max[idx],
            unit: weather.daily_units.temperature_2m_max,
          },
          sunrise: new Date(weather.daily.sunrise[idx]),
          sunset: new Date(weather.daily.sunset[idx]),
        };
      }
    );
    const forecastCard = DailyForecast;
    table = (
      <ForecastTable<DailyForecastDataRow>
        forecastData={forecastData}
        forecastCard={forecastCard}
      />
    );
  } else {
    let filter = IS_TODAY_DATA;
    if (selectedTab === Tabs.TOMORROW) {
      filter = IS_TOMORROW_DATA;
    }

    const filteredData = weather.hourly.time
      .map((time, idx) => ({
        time,
        idx,
      }))
      .filter(filter);

    const forecastData = filteredData.map(({ time, idx }) => ({
      time: new Date(time),
      temperature_2m: {
        value: weather.hourly.temperature_2m[idx],
        unit: weather.hourly_units.temperature_2m,
      },
      humidity: weather.hourly.relative_humidity_2m[idx],
      weatherCode: weather.hourly.weather_code[idx],
      wind: {
        speed: weather.hourly.wind_speed_10m[idx],
        unit: weather.hourly_units.wind_speed_10m,
      },
    }));
    const forecastCard = HourlyForecast;
    table = (
      <ForecastTable<HourlyForecastDataRow>
        forecastData={forecastData}
        forecastCard={forecastCard}
      />
    );
  }

  const selectTab = (tab: Tabs) => {
    setSelectedTab(tab);
  };

  return (
    <aside className="weather-forecast">
      <header className="forecast-header">
        <menu className="menu">
          <a
            onClick={() => selectTab(Tabs.TODAY)}
            href="#"
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
      <section className="forecast-data">{table}</section>
    </aside>
  );
};

export default WeatherForecast;
