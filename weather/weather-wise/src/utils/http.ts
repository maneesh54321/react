export async function getWeatherData(location: {
  latitude: Number;
  longitude: number;
}) {
  const current =
    "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,visibility,surface_pressure";
  const hourly =
    "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m";
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&timezone=auto&current=${current}&hourly=${hourly}&forecast_days=2`;
  const response = await fetch(url);

  if (!response.ok) {
  }

  const res = await response.json();
  return res;
}

export async function getDailyWeatherData(location: {
  latitude: Number;
  longitude: number;
}) {
  const daily =
    "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset";
  const url = `https://api.open-meteo.com/v1/forecast?latitude=12.953507480824232&longitude=77.70945242472098&timezone=auto&daily=${daily}`;
  const response = await fetch(url);
  if (!response.ok) {
  }
  const res = await response.json();
  return res;
}

export async function getAtmosphericData(location: {
  latitude: Number;
  longitude: number;
}) {
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${location.latitude}&longitude=${location.longitude}&current=us_aqi,uv_index&domains=cams_global&timezone=auto`;
  const response = await fetch(url);
  if (!response.ok) {
  }

  const res = await response.json();
  return res;
}

export async function searchLocations(searchText: string) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchText}`;
  const response = await fetch(url);
  if (!response.ok) {
  }

  const res = await response.json();
  return res;
}
