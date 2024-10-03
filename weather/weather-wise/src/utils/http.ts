export async function getWeatherData(location: {
  latitude: number;
  longitude: number;
}) {
  const currentMetrics = [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "is_day",
    "weather_code",
    "wind_speed_10m",
    "visibility",
    "surface_pressure",
  ];
  const current = currentMetrics.join(",");

  const hourly_metrics = [
    "temperature_2m",
    "relative_humidity_2m",
    "weather_code",
    "wind_speed_10m",
  ];
  const hourly = hourly_metrics.join(",");

  const url = `${import.meta.env.VITE_FORECAST_API_BASE_URL}?latitude=${
    location.latitude
  }&longitude=${
    location.longitude
  }&timezone=auto&current=${current}&hourly=${hourly}&forecast_days=2`;
  const response = await fetch(url);

  // if (!response.ok) {
  // }

  const res = await response.json();
  return res;
}

export async function getDailyWeatherData(location: {
  latitude: number;
  longitude: number;
}) {
  const daily_metrics = [
    "weather_code",
    "temperature_2m_max",
    "temperature_2m_min",
    "sunrise,sunset",
  ];
  const daily = daily_metrics.join(",");

  const url = `${import.meta.env.VITE_FORECAST_API_BASE_URL}?latitude=${
    location.latitude
  }&longitude=${location.longitude}&timezone=auto&daily=${daily}`;
  const response = await fetch(url);
  // if (!response.ok) {
  // }
  const res = await response.json();
  return res;
}

export async function getAtmosphericData(location: {
  latitude: number;
  longitude: number;
}) {
  const atmosphere_metrics = ["us_aqi", "uv_index"];

  const url = `${import.meta.env.VITE_ATMOSPHERE_API_BASE_URL}?latitude=${
    location.latitude
  }&longitude=${location.longitude}&current=${atmosphere_metrics.join(
    ","
  )}&domains=cams_global&timezone=auto`;
  const response = await fetch(url);
  // if (!response.ok) {
  // }

  const res = await response.json();
  return res;
}

export async function searchLocations(searchText: string) {
  const url = `${
    import.meta.env.VITE_LOCATION_API_BASE_URL
  }?name=${searchText}`;
  const response = await fetch(url);
  // if (!response.ok) {
  // }

  const res = await response.json();
  return res;
}

export async function getLocationFromCoordinates(lat: number, lng: number) {
  const url = `${
    import.meta.env.VITE_OPENSTREET_API_BASE_URL
  }?format=jsonv2&lat=${lat}&lon=${lng}`;

  const response = await fetch(url);

  // if (!response.ok) {
  // }
  const res = await response.json();

  return res;
}
