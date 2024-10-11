import { createContext, ReactElement, useReducer } from "react";
import { Atmosphere, Weather, WeatherData } from "../utils/data";

const INITIAL_DATA: {
  weatherData: {
    weather: Weather | null;
    atmosphere: Atmosphere | null;
  };
  setWeatherData: (weatherData: WeatherData) => void;
} = {
  weatherData: {
    weather: null,
    atmosphere: null,
  },
  setWeatherData: () => {},
};

export const WeatherContext = createContext(INITIAL_DATA);

type WeatherAction = { type: "SET_WEATHER"; payload: WeatherData };

function weatherReducer(state: WeatherData, action: WeatherAction) {
  if (action.type === "SET_WEATHER") {
    return {
      ...action.payload,
    };
  }
  return state;
}

export default function WeatherContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [weatherData, weatherDispatch] = useReducer(weatherReducer, {
    weather: null,
    atmosphere: null,
  });

  function setWeatherData(weatherData: WeatherData) {
    weatherDispatch({
      type: "SET_WEATHER",
      payload: weatherData,
    });
  }

  const weatherCtxValue = {
    weatherData: {
      ...weatherData,
    },
    setWeatherData: setWeatherData,
  };

  return (
    <WeatherContext.Provider value={weatherCtxValue}>
      {children}
    </WeatherContext.Provider>
  );
}
