export interface CurrentWeatherUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  is_day: string;
  weather_code: string;
  wind_speed_10m: string;
  visibility: string;
  surface_pressure: string;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  is_day: number;
  weather_code: number;
  wind_speed_10m: number;
  visibility: number;
  surface_pressure: number;
}

export interface HourlyWeatherUnits {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  weather_code: string;
  wind_speed_10m: string;
}

export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  weather_code: number[];
  wind_speed_10m: number[];
}

export interface DailWeatherUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
}

export interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
}

export interface CurrentAtmosphereUnits {
  time: string;
  interval: string;
  us_aqi: string;
  uv_index: string;
}

export interface CurrentAtmosphere {
  time: string;
  interval: number;
  us_aqi: number;
  uv_index: number;
}

export interface Atmosphere {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentAtmosphereUnits;
  current: CurrentAtmosphere;
}

export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentWeatherUnits;
  current: CurrentWeather;
  hourly_units: HourlyWeatherUnits;
  hourly: HourlyWeather;
  daily_units: DailWeatherUnits;
  daily: DailyWeather;
}

export interface WeatherData {
  weather: Weather | null;
  atmosphere: Atmosphere | null;
}

export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number | null;
  feature_code: string | null;
  country_code: string;
  admin1_id: number;
  timezone: string | null;
  country_id: number | null;
  country: string;
  admin1: string;
}

export interface SearchResult {
  results: Location[];
  generationtime_ms: number;
}

export const SEARCH_RESULTS: {
  results: Location[];
  generationtime_ms: number;
} = {
  results: [],
  generationtime_ms: 1.3240576,
};
