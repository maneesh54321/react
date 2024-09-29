import { createContext } from "react";

import { WeatherData } from "../utils/data";

const INITIAL_DATA: WeatherData = {
  weather: null,
  atmosphere: null,
};

export const WeatherContext = createContext<WeatherData>(INITIAL_DATA);
