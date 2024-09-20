import React from "react";
import WeatherMetricCard from "../components/WeatherMetricCard";

const WeatherDashboard = () => {
  return (
    <div className="dashboard">
      <div className="current-weather-card">
        <div className="current-weather-header">
          <p className="title">Current Weather</p>
          <p className="temperature-scale">
            Celcius
            <span className="arrow-icon">arrow-icon</span>
          </p>
        </div>
        <div className="current-weather-body">
          <time className="current-time">2:59 PM</time>
          <div className="current-weather-icon">current-weather-icon</div>
          <div className="current-temperature">
            <span className="value">12</span>
            <span className="scale">deg C</span>
          </div>
          <div className="weather-condition">
            <p className="title">Rainy</p>
            <p className="feels-like">Feels like 18 deg</p>
          </div>
        </div>
        <p className="weather-summary">
          There will be mostly sunny skies. The high will be 34 deg
        </p>
      </div>
      <div className="weather-metric">
        <WeatherMetricCard icon="" title="Air Quality" value="156" />
      </div>
      <div className="weather-metric">
        <WeatherMetricCard icon="" title="Wind" value="1 mph" />
      </div>
      <div className="weather-metric">
        <WeatherMetricCard icon="" title="Humidity" value="54%" />
      </div>
      <div className="weather-metric">
        <WeatherMetricCard icon="" title="Visibility" value="156" />
      </div>
      <div className="weather-metric">
        <WeatherMetricCard icon="" title="Pressure" value="27.65 in" />
      </div>
      <div className="weather-metric">
        <WeatherMetricCard icon="" title="UV Index" value="2" />
      </div>
      <div className="sun-moon-summary">
        <div className="sun-moon-title"></div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
