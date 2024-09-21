import React from "react";
import Header from "../components/Header";
import WeatherDashboard from "./WeatherDashboard";
import WeatherForecast from "./WeatherForecast";

const RootLayout = () => {
  return (
    <>
      <div className="root-layout">
        <header className="header">
          <Header />
        </header>
        <div className="dashboard">
          <WeatherDashboard />
        </div>
        <div className="forecast">
          <WeatherForecast />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
