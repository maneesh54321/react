import { useContext } from "react";
import WeatherMetricCard from "../components/WeatherMetricCard";
import { WeatherContext } from "../store/WeatherContextProvider";
import {
  appendDayNight,
  areSameDates,
  convertToTime,
  WMO_CODE,
} from "../utils/util";
import ContentLoader from "react-content-loader";

const WeatherDashboard = () => {
  const { weatherData } = useContext(WeatherContext || {});
  const { weather, atmosphere } = weatherData;
  const { current, current_units } = weather || {};
  const { current: atm_current, current_units: atm_current_units } =
    atmosphere || {};

  if (
    !weather ||
    !current ||
    !current_units ||
    !atm_current ||
    !atm_current_units
  ) {
    return (
      <div className="current-weather">
        <ContentLoader
          speed={2}
          width="100%"
          height="100%"
          viewBox="0 0 900 600"
          backgroundColor="#7a7a7a"
          foregroundColor="#ecebeb"
        >
          <rect x="15" y="35" rx="5" ry="5" width="92" height="11" />
          <circle cx="50" cy="131" r="36" />
          <rect x="15" y="54" rx="5" ry="5" width="92" height="11" />
          <rect x="101" y="101" rx="5" ry="5" width="276" height="11" />
          <rect x="101" y="121" rx="5" ry="5" width="276" height="11" />
          <rect x="102" y="144" rx="5" ry="5" width="276" height="11" />
          <rect x="15" y="203" rx="5" ry="5" width="508" height="12" />
          <circle cx="38" cy="323" r="18" />
          <rect x="65" y="309" rx="2" ry="2" width="74" height="6" />
          <rect x="65" y="326" rx="2" ry="2" width="74" height="6" />
          <circle cx="222" cy="319" r="18" />
          <rect x="249" y="305" rx="2" ry="2" width="74" height="6" />
          <rect x="249" y="322" rx="2" ry="2" width="74" height="6" />
          <circle cx="411" cy="316" r="18" />
          <rect x="438" y="302" rx="2" ry="2" width="74" height="6" />
          <rect x="438" y="319" rx="2" ry="2" width="74" height="6" />
          <circle cx="42" cy="413" r="18" />
          <rect x="69" y="399" rx="2" ry="2" width="74" height="6" />
          <rect x="69" y="416" rx="2" ry="2" width="74" height="6" />
          <circle cx="231" cy="412" r="18" />
          <rect x="258" y="398" rx="2" ry="2" width="74" height="6" />
          <rect x="258" y="415" rx="2" ry="2" width="74" height="6" />
          <circle cx="421" cy="412" r="18" />
          <rect x="448" y="398" rx="2" ry="2" width="74" height="6" />
          <rect x="448" y="415" rx="2" ry="2" width="74" height="6" />
          <circle cx="50" cy="529" r="36" />
          <rect x="103" y="503" rx="5" ry="5" width="276" height="11" />
          <rect x="103" y="523" rx="5" ry="5" width="276" height="11" />
          <rect x="104" y="546" rx="5" ry="5" width="276" height="11" />
        </ContentLoader>
      </div>
    );
  }

  const todayIdx: number = weather.daily.time.findIndex((date) =>
    areSameDates(new Date(date), new Date())
  );

  let sunrise = "";
  let sunset = "";
  if (todayIdx >= 0) {
    sunrise = weather
      ? convertToTime(new Date(weather.daily.sunrise[todayIdx]))
      : "";
    sunset = weather
      ? convertToTime(new Date(weather.daily.sunset[todayIdx]))
      : "";
  }

  return (
    <>
      <div className="current-weather">
        {current && current_units && (
          <div className="current-weather-card">
            <div className="current-weather-header">
              <p className="title">Current Weather</p>
              <p className="temperature-scale">
                {current_units.temperature_2m === "°C"
                  ? "Celcius"
                  : "Fahreinheit"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="dropdown-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
            <div className="current-time">
              <time>
                {new Date(current.time).toLocaleTimeString(undefined, {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </time>
            </div>
            <div className="current-weather-body">
              <img
                className="current-weather-icon"
                src={`/weather-icons/${appendDayNight(
                  WMO_CODE[current.weather_code].icon,
                  current.is_day === 1
                )}.svg`}
                alt={WMO_CODE[current.weather_code].weather}
              />
              <div className="current-temperature">
                <div className="value">{current.temperature_2m}</div>
                <div className="scale">{current_units.temperature_2m}</div>
              </div>
              <div className="weather-condition">
                <p className="title">
                  {WMO_CODE[current.weather_code].weather}
                </p>
                <p className="feels-like">
                  Feels like {current.apparent_temperature}{" "}
                  {current_units.apparent_temperature}
                </p>
              </div>
            </div>
            <p className="weather-summary">
              There will be mostly sunny skies. The high will be 34 deg
            </p>
          </div>
        )}
      </div>
      <div className="weather-metric">
        {atm_current && (
          <WeatherMetricCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon weather-metric-icon"
                fill="currentColor"
                overflow="hidden"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M24.32 788.736c-.46-21.965 10.24-35.84 28.672-46.08 36.813-20.48 72.755-42.547 110.95-65.075-5.939-17.46-12.032-34.048-17.305-51.2-54.835-174.797 18.176-369.869 172.288-460.083 48.23-28.263 101.58-39.63 156.109-43.725a1106.842 1106.842 0 01458.496 62.566c73.472 26.215 82.432 40.602 68.044 118.067A1198.08 1198.08 0 01820.531 750.08C683.06 957.9 402.176 952.986 247.911 795.7c-16.538-16.794-31.386-35.482-48.64-55.092-36.865 21.709-74.036 42.803-110.337 65.434-18.176 11.315-35.225 13.619-53.555 2.252L24.32 788.736zm916.838-520.755c-7.321-5.12-9.062-6.451-11.008-7.475a74.189 74.189 0 00-10.24-4.66c-153.19-53.401-310.016-78.643-471.04-56.32a277.658 277.658 0 00-108.646 39.885C225.638 312.934 173.722 460.8 210.637 594.637c4.045 14.745 9.523 29.081 15.36 46.08 69.478-40.96 135.68-79.872 201.625-119.245a20.173 20.173 0 007.424-12.083c13.415-57.6 25.6-115.456 39.988-172.8a31.13 31.13 0 0146.592-18.279c17.459 10.24 19.865 26.368 15.052 45.005-8.96 34.509-17.561 69.171-27.699 109.005 11.674-6.144 18.74-9.523 25.6-13.414 37.632-22.068 74.855-44.954 112.947-66.15 27.29-15.36 55.45 1.177 55.245 30.72 0 18.534-12.237 27.8-26.163 35.84l-197.274 116.12-19.814 11.726v8.396c32.614 7.988 65.382 15.36 97.843 24.218 27.239 7.168 39.475 24.78 33.536 46.08s-22.784 28.211-50.38 20.48c-50.484-14.08-100.711-28.62-151.245-42.598-6.81-1.895-15.872-4.66-21.095-1.741-35.328 19.558-69.939 40.55-106.137 61.9 6.502 8.295 10.905 14.132 15.36 19.764 121.446 147.865 369.1 161.894 486.4-16.435a1133.107 1133.107 0 00130.201-270.49c18.33-56.32 31.949-113.715 47.155-168.96z"
                ></path>
              </svg>
            }
            title="Air Quality"
            value={atm_current.us_aqi}
          />
        )}
      </div>
      <div className="weather-metric">
        {current && current_units && (
          <WeatherMetricCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon weather-metric-icon"
                fill="currentColor"
                overflow="hidden"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M96 448h423.36c296.96 0 245.76-410.56-17.6-410.56-93.44 0-192 64-199.36 153.92-8.32 96 86.08 139.84 128 85.44a48 48 0 00-32-76.8c0-23.36 45.44-66.88 103.68-66.88 139.2 0 184.96 218.56 17.6 218.56H96A48 48 0 0096 448zm338.88 96H96a48 48 0 000 96h320a124.8 124.8 0 01123.84 124.8c0 148.8-204.48 151.04-221.12 69.12 50.88 55.36 126.08-36.16 55.36-93.12-92.8-74.56-217.92 77.44-111.68 181.76A220.16 220.16 0 00636.8 764.8 224 224 0 00434.88 544zM800 480H672a48 48 0 000 96h136.64a85.44 85.44 0 0162.08 142.72c-13.44-82.88-149.76-61.12-135.68 37.76a101.44 101.44 0 00144 71.04A181.12 181.12 0 00800 480z"
                ></path>
              </svg>
            }
            title="Wind"
            value={`${current.wind_speed_10m} ${current_units.wind_speed_10m}`}
          />
        )}
      </div>
      <div className="weather-metric">
        {current && (
          <WeatherMetricCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon weather-metric-icon"
                fill="currentColor"
                overflow="hidden"
                viewBox="0 0 1024 1024"
              >
                <path d="M784.818 464.15l.689.415-264.3-429.797-264.284 429.798.735-.481c-43.695 56.419-69.97 127.013-69.97 203.887 0 184.197 149.323 333.522 333.518 333.522 184.214 0 333.536-149.325 333.536-333.522 0-76.858-26.258-147.437-69.924-203.823zM521.206 923.306c-141.011 0-255.334-114.323-255.334-255.336 0-70.08 28.256-133.516 73.966-179.657h-.063l161.006-248.526 20.424-33.035 35.817 63.21 135.324 208.89c51.589 46.716 84.21 114.017 84.21 189.118 0 141.013-114.32 255.336-255.35 255.336z"></path>
                <path d="M480.101 640.306c10.867-12.145 16.302-27.967 16.302-47.468 0-19.61-4.924-34.89-14.784-45.869-9.861-10.98-23.574-16.461-41.155-16.461-18.331 0-32.89 5.96-43.71 17.9-10.82 11.938-16.222 28.017-16.222 48.268 0 18.651 5.114 33.611 15.344 44.91 10.228 11.298 23.861 16.94 40.915 16.94 18.009 0 32.44-6.072 43.31-18.22zm-66.007-13.425c-5.961-7.465-8.95-18.059-8.95-31.804 0-13.955 3.068-24.853 9.188-32.685 6.121-7.83 14.465-11.745 25.013-11.745 10.34 0 18.348 3.756 24.053 11.267 5.706 7.51 8.55 18.14 8.55 31.884 0 14.064-2.908 24.964-8.711 32.683-5.8 7.721-14.032 11.588-24.691 11.588-10.339 0-18.492-3.723-24.452-11.188zM588.62 657.088c-18.22 0-32.73 6.042-43.551 18.14-10.82 12.1-16.224 28.257-16.224 48.505 0 18.332 5.083 33.212 15.264 44.672 10.182 11.458 23.847 17.18 40.995 17.18 17.692 0 32.013-6.042 42.994-18.14 10.98-12.1 16.463-27.841 16.463-47.228 0-20.024-4.955-35.562-14.864-46.588s-23.609-16.54-41.077-16.54zm22.774 96.214c-5.8 7.782-14.031 11.665-24.691 11.665-10.34 0-18.492-3.755-24.453-11.266-5.96-7.511-8.95-17.98-8.95-31.404 0-13.955 2.99-24.853 8.95-32.684 5.96-7.832 14.383-11.747 25.252-11.747 10.116 0 18.092 3.675 23.892 11.028 5.803 7.351 8.71 17.948 8.71 31.804 0 13.952-2.907 24.82-8.71 32.604zM577.592 534.184L418.568 783.347h26.692l159.023-249.163z"></path>
              </svg>
            }
            title="Humidity"
            value={`${current.relative_humidity_2m}%`}
          />
        )}
      </div>
      <div className="weather-metric">
        {current && current_units && (
          <WeatherMetricCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon weather-metric-icon"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            }
            title="Visibility"
            value={`${current.visibility} ${current_units.visibility}`}
          />
        )}
      </div>
      <div className="weather-metric">
        {current && current_units && (
          <WeatherMetricCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon weather-metric-icon"
                fill="currentColor"
                overflow="hidden"
                viewBox="0 0 1118 1024"
              >
                <path d="M944.4 588.23a35.51 35.51 0 0035.51-35.51 416.537 416.537 0 10-832.897 0 35.51 35.51 0 1071.021 0 345.517 345.517 0 11690.856 0 35.51 35.51 0 0035.51 35.51z"></path>
                <path d="M559.29 0a559.467 559.467 0 00-330.248 1010.804 35.51 35.51 0 0049.715-7.812 35.51 35.51 0 00-7.812-49.537 488.268 488.268 0 11568.167 5.86 35.51 35.51 0 0040.837 58.236A559.467 559.467 0 00559.289 0z"></path>
                <path d="M617.882 443.88A132.987 132.987 0 00461.636 481.7l-104.756-45.63a35.51 35.51 0 10-28.23 64.983l104.755 45.631A132.987 132.987 0 10617.882 443.88z"></path>
              </svg>
            }
            title="Pressure"
            value={`${current.surface_pressure} ${current_units.surface_pressure}`}
          />
        )}
      </div>
      <div className="weather-metric">
        {atm_current && (
          <WeatherMetricCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon weather-metric-icon"
                fill="currentColor"
                overflow="hidden"
                viewBox="0 0 1024 1024"
              >
                <path d="M512 874.667c-200.533 0-362.667-162.134-362.667-362.667S311.467 149.333 512 149.333 874.667 311.467 874.667 512 712.533 874.667 512 874.667zm0-640C358.4 234.667 234.667 358.4 234.667 512S358.4 789.333 512 789.333 789.333 665.6 789.333 512 665.6 234.667 512 234.667zM512 128c-25.6 0-42.667-17.067-42.667-42.667V42.667C469.333 17.067 486.4 0 512 0s42.667 17.067 42.667 42.667v42.666C554.667 110.933 537.6 128 512 128zM209.067 251.733c-12.8 0-21.334-4.266-29.867-12.8l-29.867-29.866c-17.066-17.067-17.066-42.667 0-59.734s42.667-17.066 59.734 0l29.866 29.867c17.067 17.067 17.067 42.667 0 59.733-8.533 8.534-17.066 12.8-29.866 12.8zM85.333 554.667H42.667C17.067 554.667 0 537.6 0 512s17.067-42.667 42.667-42.667h42.666C110.933 469.333 128 486.4 128 512s-17.067 42.667-42.667 42.667z"></path>
                <path d="M179.2 887.467c-12.8 0-21.333-4.267-29.867-12.8-17.066-17.067-17.066-42.667 0-59.734l29.867-29.866c17.067-17.067 42.667-17.067 59.733 0s17.067 42.666 0 59.733l-29.866 29.867c-8.534 8.533-17.067 12.8-29.867 12.8zM512 1024c-25.6 0-42.667-17.067-42.667-42.667v-42.666C469.333 913.067 486.4 896 512 896s42.667 17.067 42.667 42.667v42.666c0 25.6-17.067 42.667-42.667 42.667zm332.8-136.533c-12.8 0-21.333-4.267-29.867-12.8L785.067 844.8c-17.067-17.067-17.067-42.667 0-59.733s42.666-17.067 59.733 0l29.867 29.866c17.066 17.067 17.066 42.667 0 59.734-8.534 8.533-21.334 12.8-29.867 12.8zm136.533-332.8h-42.666C913.067 554.667 896 537.6 896 512s17.067-42.667 42.667-42.667h42.666c25.6 0 42.667 17.067 42.667 42.667s-17.067 42.667-42.667 42.667zm-166.4-302.934c-12.8 0-21.333-4.266-29.866-12.8-17.067-17.066-17.067-42.666 0-59.733l29.866-29.867c17.067-17.066 42.667-17.066 59.734 0s17.066 42.667 0 59.734L844.8 238.933c-8.533 8.534-21.333 12.8-29.867 12.8zM392.533 640c-59.733 0-106.666-46.933-106.666-106.667v-115.2C290.133 396.8 302.933 384 320 384s34.133 12.8 34.133 34.133V537.6c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667V418.133C435.2 396.8 452.267 384 469.333 384s34.134 12.8 34.134 34.133V537.6c0 55.467-51.2 102.4-110.934 102.4zm238.934 0c-12.8 0-25.6-8.533-29.867-21.333l-76.8-192c-8.533-17.067 0-34.134 17.067-42.667 17.066-4.267 34.133 0 42.666 17.067l46.934 115.2 46.933-115.2C686.933 384 704 375.467 721.067 384c17.066 8.533 25.6 25.6 17.066 42.667l-76.8 192C652.8 631.467 644.267 640 631.467 640z"></path>
              </svg>
            }
            title="UV Index"
            value={atm_current.uv_index}
          />
        )}
      </div>
      <div className="sun-moon-summary">
        <div className="sun-moon-title">Sun & Moon Summary</div>
        <div className="sun-moon-content">
          <div className="sun-moon-sum sun">
            <div className="rise-set">
              <div className="rise-icon"></div>
              <div className="title">Sunrise</div>
              <time className="time">{sunrise}</time>
            </div>
            <img
              className="sun-moon-img"
              src="sun.png"
              alt="Sunrise and Sunset"
            />
            <div className="rise-set">
              <div className="rise-icon rise-icon--set"></div>
              <div className="title">Sunset</div>
              <time className="time">{sunset}</time>
            </div>
          </div>
          <div className="sun-moon-sum moon">
            <div className="rise-set">
              <div className="rise-icon"></div>
              <div className="title">Moonrise</div>
              <time className="time">{sunset}</time>
            </div>
            <img
              className="sun-moon-img"
              src="moon.png"
              alt="Sunrise and Sunset"
            />
            <div className="rise-set">
              <div className="rise-icon rise-icon--set"></div>
              <div className="title">Moonset</div>
              <time className="time">{sunrise}</time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDashboard;
