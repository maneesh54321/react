import React, { Fragment } from "react";
import { appendDayNight, WMO_CODE } from "../utils/util";

export interface HourlyForecastDataRow {
  time: Date;
  weatherCode: number;
  temperature_2m: { value: number; unit: string };
  wind: { speed: number; unit: string };
  humidity: number;
}

const HourlyForecast = ({
  data,
  idx,
}: {
  data: HourlyForecastDataRow;
  idx: number;
}) => {
  return (
    <div
      className="hourly-forecast"
      key={`${data.time.getMilliseconds()}-${idx}`}
    >
      <div className="grid-theme summary">
        <img
          className="sky-icon"
          src={`/src/assets/weather-icons/${appendDayNight(
            WMO_CODE[data.weatherCode].icon,
            true
          )}.svg`}
          alt={WMO_CODE[data.weatherCode].weather}
        />
        <time className="time">
          {data.time.toLocaleTimeString("en-US", {
            timeStyle: "short",
          })}
        </time>
        <div className="sky">
          {WMO_CODE[data.weatherCode].weather.split(":")[0]}
        </div>
      </div>
      <div className="grid-theme details">
        <div className="temperature">
          <span className="value">{data.temperature_2m.value}</span>
          <span className="scale">{data.temperature_2m.unit}</span>
        </div>
        <div className="details-text wind">
          Wind: {data.wind.speed} {data.wind.unit}
        </div>
        <div className="details-text humidity">Humidity: {data.humidity} %</div>
      </div>
    </div>
  );
};

export default HourlyForecast;
