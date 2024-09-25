export const WMO_CODE: { [key: number]: { weather: string; icon: string } } = {
  0: { weather: "Clear sky", icon: "clear_sky" },
  1: { weather: "Mainly clear", icon: "clear_sky" },
  2: { weather: "Partly cloudy", icon: "partly_cloudy" },
  3: { weather: "Overcast", icon: "overcast" },
  45: { weather: "Fog", icon: "fog" },
  48: { weather: "Depositing rime fog", icon: "rime_fog" },
  51: { weather: "Drizzle: Light intensity", icon: "drizzle_light" },
  53: { weather: "Drizzle: Moderate intensity", icon: "drizzle_moderate" },
  55: { weather: "Drizzle: Dense intensity", icon: "drizzle_dense" },
  56: {
    weather: "Freezing Drizzle: Light intensity",
    icon: "freezing_drizzle_light",
  },
  57: {
    weather: "Freezing Drizzle: Dense intensity",
    icon: "freezing_drizzle_dense",
  },
  61: { weather: "Rain: Slight intensity", icon: "rain_slight" },
  63: { weather: "Rain: Moderate intensity", icon: "rain_moderate" },
  65: { weather: "Rain: Heavy intensity", icon: "rain_heavy" },
  66: {
    weather: "Freezing Rain: Light intensity",
    icon: "freezing_rain_light",
  },
  67: {
    weather: "Freezing Rain: Heavy intensity",
    icon: "freezing_rain_heavy",
  },
  71: { weather: "Snow fall: Slight intensity", icon: "snow_slight" },
  73: { weather: "Snow fall: Moderate intensity", icon: "snow_moderate" },
  75: { weather: "Snow fall: Heavy intensity", icon: "snow_heavy" },
  77: { weather: "Snow grains", icon: "snow_grains" },
  80: {
    weather: "Rain showers: Slight intensity",
    icon: "rain_slight",
  },
  81: {
    weather: "Rain showers: Moderate intensity",
    icon: "rain_moderate",
  },
  82: {
    weather: "Rain showers: Violent intensity",
    icon: "rain_heavy",
  },
  85: {
    weather: "Snow showers: Slight intensity",
    icon: "snow_showers_slight",
  },
  86: { weather: "Snow showers: Heavy intensity", icon: "snow_showers_heavy" },
  95: { weather: "Thunderstorm: Slight or moderate", icon: "thunderstorm" },
  96: {
    weather: "Thunderstorm with slight hail",
    icon: "thund-shower-hail",
  },
  99: {
    weather: "Thunderstorm with heavy hail",
    icon: "thunderstorm_hail_heavy",
  },
};

const DUAL_THEMED_ICONS = ["clear_sky", "partly_cloudy"];

export function appendDayNight(iconName: string, isDay: boolean) {
  if (hasNightVersionAvailable(iconName)) {
    return isDay ? iconName + "_day" : iconName + "_night";
  }
  return iconName;
}

function hasNightVersionAvailable(iconName: string) {
  return DUAL_THEMED_ICONS.indexOf(iconName) >= 0;
}
