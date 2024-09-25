import React, { Fragment } from "react";
import { appendDayNight, WMO_CODE } from "../utils/util";

export interface DailyForecastDataRow {
  date: Date;
  weatherCode: number;
  temperature_2m_max: { value: number; unit: string };
  temperature_2m_min: { value: number; unit: string };
  sunrise: Date;
  sunset: Date;
}

const DailyForecast = ({
  data,
  idx,
}: {
  data: DailyForecastDataRow;
  idx: number;
}) => {
  return (
    <div className="daily-grid" key={`${data.date.getTime()}-${idx}`}>
      <p className="daily-forecast-date">
        <span className="day">
          {data.date.toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </span>
        &nbsp;
        <time className="date">
          {data.date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
          })}
        </time>
      </p>
      <div className="daily-summary">
        <img
          className="sky-icon"
          src={`/weather-icons/${appendDayNight(
            WMO_CODE[data.weatherCode].icon,
            true
          )}.svg`}
          alt={WMO_CODE[data.weatherCode].weather}
        />
        <div className="sky">
          {WMO_CODE[data.weatherCode].weather.split(":")[0]}
        </div>
      </div>
      <div className="daily-forecast-temps">
        <span className="max">
          {data.temperature_2m_max.value}
          {data.temperature_2m_max.unit}
        </span>
        <span className="min">
          &nbsp;/&nbsp;{data.temperature_2m_min.value}{" "}
          {data.temperature_2m_min.unit}
        </span>
      </div>
    </div>
  );
};

export default DailyForecast;
