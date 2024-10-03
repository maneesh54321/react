import Header from "../components/Header";
import WeatherDashboard from "./WeatherDashboard";
import WeatherForecast from "./WeatherForecast";

const RootLayout = () => {
  return (
    <>
      <div className="root-layout container">
        <header className="header">
          <Header />
        </header>
        <main className="dashboard">
          <WeatherDashboard />
        </main>
        <div className="forecast">
          <WeatherForecast />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
