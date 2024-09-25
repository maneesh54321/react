import { Location } from "../components/LocationSearchBar";

export const INITIAL_DATA = {
  weatherData: {
    latitude: 13,
    longitude: 77.75,
    generationtime_ms: 0.13899803161621094,
    utc_offset_seconds: 19800,
    timezone: "Asia/Kolkata",
    timezone_abbreviation: "IST",
    elevation: 878,
    current_units: {
      time: "iso8601",
      interval: "seconds",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      apparent_temperature: "°C",
      is_day: "",
      weather_code: "wmo code",
      wind_speed_10m: "km/h",
      visibility: "m",
      surface_pressure: "hPa",
    },
    current: {
      time: "2024-09-23T01:00",
      interval: 900,
      temperature_2m: 22.3,
      relative_humidity_2m: 84,
      apparent_temperature: 24.6,
      is_day: 0,
      weather_code: 3,
      wind_speed_10m: 8.8,
      visibility: 15360,
      surface_pressure: 911.7,
    },
    hourly_units: {
      time: "iso8601",
      temperature_2m: "°C",
      relative_humidity_2m: "%",
      weather_code: "wmo code",
      wind_speed_10m: "km/h",
    },
    hourly: {
      time: [
        "2024-09-23T00:00",
        "2024-09-23T01:00",
        "2024-09-23T02:00",
        "2024-09-23T03:00",
        "2024-09-23T04:00",
        "2024-09-23T05:00",
        "2024-09-23T06:00",
        "2024-09-23T07:00",
        "2024-09-23T08:00",
        "2024-09-23T09:00",
        "2024-09-23T10:00",
        "2024-09-23T11:00",
        "2024-09-23T12:00",
        "2024-09-23T13:00",
        "2024-09-23T14:00",
        "2024-09-23T15:00",
        "2024-09-23T16:00",
        "2024-09-23T17:00",
        "2024-09-23T18:00",
        "2024-09-23T19:00",
        "2024-09-23T20:00",
        "2024-09-23T21:00",
        "2024-09-23T22:00",
        "2024-09-23T23:00",
        "2024-09-24T00:00",
        "2024-09-24T01:00",
        "2024-09-24T02:00",
        "2024-09-24T03:00",
        "2024-09-24T04:00",
        "2024-09-24T05:00",
        "2024-09-24T06:00",
        "2024-09-24T07:00",
        "2024-09-24T08:00",
        "2024-09-24T09:00",
        "2024-09-24T10:00",
        "2024-09-24T11:00",
        "2024-09-24T12:00",
        "2024-09-24T13:00",
        "2024-09-24T14:00",
        "2024-09-24T15:00",
        "2024-09-24T16:00",
        "2024-09-24T17:00",
        "2024-09-24T18:00",
        "2024-09-24T19:00",
        "2024-09-24T20:00",
        "2024-09-24T21:00",
        "2024-09-24T22:00",
        "2024-09-24T23:00",
        "2024-09-25T00:00",
        "2024-09-25T01:00",
        "2024-09-25T02:00",
        "2024-09-25T03:00",
        "2024-09-25T04:00",
        "2024-09-25T05:00",
        "2024-09-25T06:00",
        "2024-09-25T07:00",
        "2024-09-25T08:00",
        "2024-09-25T09:00",
        "2024-09-25T10:00",
        "2024-09-25T11:00",
        "2024-09-25T12:00",
        "2024-09-25T13:00",
        "2024-09-25T14:00",
        "2024-09-25T15:00",
        "2024-09-25T16:00",
        "2024-09-25T17:00",
        "2024-09-25T18:00",
        "2024-09-25T19:00",
        "2024-09-25T20:00",
        "2024-09-25T21:00",
        "2024-09-25T22:00",
        "2024-09-25T23:00",
        "2024-09-26T00:00",
        "2024-09-26T01:00",
        "2024-09-26T02:00",
        "2024-09-26T03:00",
        "2024-09-26T04:00",
        "2024-09-26T05:00",
        "2024-09-26T06:00",
        "2024-09-26T07:00",
        "2024-09-26T08:00",
        "2024-09-26T09:00",
        "2024-09-26T10:00",
        "2024-09-26T11:00",
        "2024-09-26T12:00",
        "2024-09-26T13:00",
        "2024-09-26T14:00",
        "2024-09-26T15:00",
        "2024-09-26T16:00",
        "2024-09-26T17:00",
        "2024-09-26T18:00",
        "2024-09-26T19:00",
        "2024-09-26T20:00",
        "2024-09-26T21:00",
        "2024-09-26T22:00",
        "2024-09-26T23:00",
        "2024-09-27T00:00",
        "2024-09-27T01:00",
        "2024-09-27T02:00",
        "2024-09-27T03:00",
        "2024-09-27T04:00",
        "2024-09-27T05:00",
        "2024-09-27T06:00",
        "2024-09-27T07:00",
        "2024-09-27T08:00",
        "2024-09-27T09:00",
        "2024-09-27T10:00",
        "2024-09-27T11:00",
        "2024-09-27T12:00",
        "2024-09-27T13:00",
        "2024-09-27T14:00",
        "2024-09-27T15:00",
        "2024-09-27T16:00",
        "2024-09-27T17:00",
        "2024-09-27T18:00",
        "2024-09-27T19:00",
        "2024-09-27T20:00",
        "2024-09-27T21:00",
        "2024-09-27T22:00",
        "2024-09-27T23:00",
        "2024-09-28T00:00",
        "2024-09-28T01:00",
        "2024-09-28T02:00",
        "2024-09-28T03:00",
        "2024-09-28T04:00",
        "2024-09-28T05:00",
        "2024-09-28T06:00",
        "2024-09-28T07:00",
        "2024-09-28T08:00",
        "2024-09-28T09:00",
        "2024-09-28T10:00",
        "2024-09-28T11:00",
        "2024-09-28T12:00",
        "2024-09-28T13:00",
        "2024-09-28T14:00",
        "2024-09-28T15:00",
        "2024-09-28T16:00",
        "2024-09-28T17:00",
        "2024-09-28T18:00",
        "2024-09-28T19:00",
        "2024-09-28T20:00",
        "2024-09-28T21:00",
        "2024-09-28T22:00",
        "2024-09-28T23:00",
        "2024-09-29T00:00",
        "2024-09-29T01:00",
        "2024-09-29T02:00",
        "2024-09-29T03:00",
        "2024-09-29T04:00",
        "2024-09-29T05:00",
        "2024-09-29T06:00",
        "2024-09-29T07:00",
        "2024-09-29T08:00",
        "2024-09-29T09:00",
        "2024-09-29T10:00",
        "2024-09-29T11:00",
        "2024-09-29T12:00",
        "2024-09-29T13:00",
        "2024-09-29T14:00",
        "2024-09-29T15:00",
        "2024-09-29T16:00",
        "2024-09-29T17:00",
        "2024-09-29T18:00",
        "2024-09-29T19:00",
        "2024-09-29T20:00",
        "2024-09-29T21:00",
        "2024-09-29T22:00",
        "2024-09-29T23:00",
      ],
      temperature_2m: [
        22.5, 22.1, 21.8, 21.6, 21.5, 21.4, 21.3, 21.6, 22.3, 23.6, 25.2, 27.1,
        28.5, 29.3, 29.4, 29.2, 28.3, 27.4, 25.3, 24.2, 23.3, 23.1, 22.7, 22.3,
        21.8, 21.4, 21.3, 21.1, 21, 20.9, 20.8, 21.3, 22.5, 23.9, 25.7, 26.7,
        27.4, 28.7, 28.7, 28.4, 27.5, 26.2, 25, 24.1, 23.4, 23, 22.7, 22.4, 22,
        21.4, 21, 20.7, 20.6, 20.5, 20.5, 21.3, 22.8, 24.5, 26.1, 26.8, 28,
        28.2, 28.5, 28.2, 27.5, 25.7, 24.7, 24, 23.8, 23.4, 23.1, 22.5, 22.1,
        21.7, 21.3, 21, 20.7, 20.7, 21, 21.6, 22.5, 24.1, 25.9, 27.5, 28.5,
        29.2, 29.5, 29.2, 28.4, 27.5, 26.5, 25.3, 24.3, 23.7, 23.2, 22.8, 22.4,
        22.1, 21.8, 21.3, 20.7, 20.6, 20.9, 21.6, 22.7, 24.5, 26.7, 28.5, 29.7,
        30.4, 30.6, 30.3, 29.4, 28.2, 26.6, 24.7, 23.3, 22.6, 22.5, 22.3, 22.1,
        22, 21.8, 21.4, 21, 21, 21.6, 22.5, 23.6, 24.9, 26.4, 27.7, 28.6, 29.3,
        29.3, 28.5, 27, 25.7, 24.8, 24, 23.4, 22.7, 22.2, 21.7, 21.4, 21.2, 21,
        20.8, 20.5, 20.7, 21.3, 22.4, 23.6, 25.1, 26.8, 28.2, 29.2, 29.8, 30.1,
        30, 29.5, 28.7, 27.3, 25.6, 24.2, 23.3, 22.8, 22.3,
      ],
      relative_humidity_2m: [
        82, 85, 88, 90, 89, 87, 87, 85, 82, 74, 68, 59, 53, 51, 51, 51, 53, 57,
        69, 78, 85, 86, 87, 88, 88, 90, 91, 91, 91, 91, 92, 90, 83, 75, 67, 63,
        60, 56, 55, 57, 61, 66, 72, 77, 83, 84, 84, 84, 85, 87, 89, 90, 91, 92,
        91, 87, 80, 72, 64, 61, 56, 56, 55, 58, 63, 70, 76, 80, 79, 78, 77, 79,
        81, 84, 86, 88, 91, 91, 89, 86, 81, 74, 65, 58, 54, 52, 51, 52, 54, 58,
        63, 69, 75, 79, 83, 86, 88, 88, 89, 91, 93, 93, 91, 88, 83, 75, 65, 57,
        52, 48, 46, 46, 49, 54, 63, 74, 83, 87, 87, 88, 89, 90, 90, 91, 91, 91,
        89, 86, 82, 76, 68, 62, 58, 56, 56, 61, 69, 76, 81, 85, 88, 90, 91, 92,
        93, 93, 93, 94, 94, 94, 93, 90, 86, 79, 70, 62, 57, 53, 50, 49, 49, 52,
        59, 69, 77, 81, 82, 84,
      ],
      weather_code: [
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 80, 95, 95, 80,
        80, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 80, 2, 3, 3, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 80,
        80, 80, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1,
        80, 80, 80, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 80, 80, 80, 3,
        3, 3, 80, 80, 80, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        0, 0, 0, 0, 0, 0,
      ],
      wind_speed_10m: [
        8, 9.4, 10.1, 10.9, 12.6, 13, 11.5, 13, 15.2, 17, 17.7, 18.1, 18.5,
        16.9, 14.8, 13.3, 12.6, 10.4, 10.8, 9.4, 8.4, 9.4, 9.1, 11.1, 11.8,
        11.8, 12.6, 12.2, 12.7, 12.1, 12, 13.8, 16.9, 18.1, 19.2, 18.4, 18.2,
        17.8, 17, 16.2, 14.8, 12.6, 10.9, 8.4, 6.6, 8.8, 11.2, 12.1, 12.9, 12.3,
        12, 12, 12, 12.3, 12.7, 16.1, 18.1, 18.5, 19.2, 19.2, 16.7, 18.4, 17,
        15.6, 15.3, 13.6, 9.7, 7.1, 9.9, 12.9, 14.1, 14.7, 14.1, 12.7, 11.7,
        11.5, 11.5, 12.2, 13.6, 15.2, 16.5, 17.2, 17.4, 17, 16.3, 15.2, 13.8,
        12, 9.4, 7.2, 4.9, 3.4, 3.3, 2.3, 2.6, 4, 4.9, 5.2, 5.2, 5.2, 4.7, 4.7,
        5.8, 6.8, 8, 8.6, 8.4, 8.7, 8.6, 8.7, 8.6, 8.6, 8.3, 6.8, 2.7, 2.2, 5.2,
        3.9, 0.8, 2.2, 2.5, 2.5, 2.3, 2.4, 2.4, 3.1, 4.6, 6.9, 7.9, 7.1, 5.1,
        3.4, 2.6, 2.3, 2.5, 3.2, 4.2, 4.8, 4.7, 4, 3.3, 2.7, 1.8, 1.3, 1.4, 1.8,
        1.8, 1.8, 1.5, 1.8, 3.6, 5.4, 7.1, 8.2, 8.8, 9.3, 9.5, 10, 9.9, 9.7,
        9.4, 8.7, 7.9, 6.6, 5.9, 5.6, 5.9, 5.7,
      ],
    },
    daily_units: {
      time: "iso8601",
      weather_code: "wmo code",
      temperature_2m_max: "°C",
      temperature_2m_min: "°C",
      sunrise: "iso8601",
      sunset: "iso8601",
    },
    daily: {
      time: [
        "2024-09-23",
        "2024-09-24",
        "2024-09-25",
        "2024-09-26",
        "2024-09-27",
        "2024-09-28",
        "2024-09-29",
      ],
      weather_code: [95, 3, 80, 80, 80, 80, 2],
      temperature_2m_max: [29.4, 28.7, 28.5, 29.5, 30.6, 29.3, 30.1],
      temperature_2m_min: [21.3, 20.8, 20.5, 20.7, 20.6, 21, 20.5],
      sunrise: [
        "2024-09-23T06:08",
        "2024-09-24T06:08",
        "2024-09-25T06:08",
        "2024-09-26T06:08",
        "2024-09-27T06:08",
        "2024-09-28T06:08",
        "2024-09-29T06:08",
      ],
      sunset: [
        "2024-09-23T18:14",
        "2024-09-24T18:13",
        "2024-09-25T18:12",
        "2024-09-26T18:12",
        "2024-09-27T18:11",
        "2024-09-28T18:10",
        "2024-09-29T18:10",
      ],
    },
  },
  atmosphericData: {
    latitude: 12.800003,
    longitude: 77.600006,
    generationtime_ms: 0.14793872833251953,
    utc_offset_seconds: 19800,
    timezone: "Asia/Kolkata",
    timezone_abbreviation: "IST",
    elevation: 878,
    current_units: {
      time: "iso8601",
      interval: "seconds",
      us_aqi: "USAQI",
      uv_index: "",
    },
    current: {
      time: "2024-09-23T00:30",
      interval: 3600,
      us_aqi: 37,
      uv_index: 0,
    },
  },
  location: {
    id: -1,
    name: "Bengal",
    latitude: -7.04306,
    longitude: 112.95556,
    elevation: 80,
    feature_code: "PPL",
    country_code: "ID",
    admin1_id: 1642668,
    timezone: "Asia/Jakarta",
    country_id: 1643084,
    country: "Indonesia",
    admin1: "East Java",
  },
  setCurrentLocation: (newValue: Location) => {},
};

export const SEARCH_RESULTS = {
  results: [
    {
      id: 1970940,
      name: "Bengal",
      latitude: -7.04306,
      longitude: 112.95556,
      elevation: 80,
      feature_code: "PPL",
      country_code: "ID",
      admin1_id: 1642668,
      timezone: "Asia/Jakarta",
      country_id: 1643084,
      country: "Indonesia",
      admin1: "East Java",
    },
    {
      id: 3491402,
      name: "Bengal",
      latitude: 18.45,
      longitude: -77.45,
      elevation: 135,
      feature_code: "PPL",
      country_code: "JM",
      timezone: "America/Jamaica",
      country_id: 3489940,
      country: "Jamaica",
    },
    {
      id: 4254381,
      name: "Bengal",
      latitude: 39.47338,
      longitude: -85.92276,
      elevation: 225,
      feature_code: "PPL",
      country_code: "US",
      admin1_id: 4921868,
      admin2_id: 4264684,
      admin3_id: 4258790,
      timezone: "America/Indiana/Indianapolis",
      country_id: 6252001,
      country: "United States",
      admin1: "Indiana",
      admin2: "Shelby",
      admin3: "Hendricks Township",
    },
    {
      id: 4283900,
      name: "Bengal",
      latitude: 37.35923,
      longitude: -85.45719,
      elevation: 220,
      feature_code: "PPL",
      country_code: "US",
      admin1_id: 6254925,
      admin2_id: 4310601,
      timezone: "America/New_York",
      country_id: 6252001,
      country: "United States",
      admin1: "Kentucky",
      admin2: "Taylor",
    },
    {
      id: 4376518,
      name: "Bengal",
      latitude: 36.90061,
      longitude: -93.30991,
      elevation: 379,
      feature_code: "PPL",
      country_code: "US",
      admin1_id: 4398678,
      admin2_id: 4381179,
      admin3_id: 4409438,
      timezone: "America/Chicago",
      country_id: 6252001,
      country: "United States",
      admin1: "Missouri",
      admin2: "Christian",
      admin3: "Township of South Galloway",
    },
    {
      id: 4530324,
      name: "Bengal",
      latitude: 34.83288,
      longitude: -95.06191,
      elevation: 201,
      feature_code: "PPL",
      country_code: "US",
      admin1_id: 4544379,
      admin2_id: 4540696,
      timezone: "America/Chicago",
      country_id: 6252001,
      country: "United States",
      admin1: "Oklahoma",
      admin2: "Latimer",
    },
    {
      id: 5017854,
      name: "Bengal",
      latitude: 47.26827,
      longitude: -93.06603,
      elevation: 412,
      feature_code: "PPL",
      country_code: "US",
      admin1_id: 5037779,
      admin2_id: 5031616,
      admin3_id: 5028246,
      timezone: "America/Chicago",
      country_id: 6252001,
      country: "United States",
      admin1: "Minnesota",
      admin2: "Itasca",
      admin3: "Goodland Township",
    },
    {
      id: 7616824,
      name: "Bengal",
      latitude: 15.9708,
      longitude: 120.2942,
      elevation: 5,
      feature_code: "PPL",
      country_code: "PH",
      admin1_id: 7521301,
      admin3_id: 1724957,
      timezone: "Asia/Manila",
      country_id: 1694008,
      country: "Philippines",
      admin1: "Ilocos",
      admin3: "Binmaley",
    },
    {
      id: 11460647,
      name: "Bengāl",
      latitude: 11.28909,
      longitude: 76.67807,
      elevation: 1823,
      feature_code: "PPL",
      country_code: "IN",
      admin1_id: 1255053,
      admin2_id: 1261391,
      timezone: "Asia/Kolkata",
      country_id: 1269750,
      country: "India",
      admin1: "Tamil Nadu",
      admin2: "The Nilgiris",
    },
    {
      id: 1277333,
      name: "Bengaluru",
      latitude: 12.97194,
      longitude: 77.59369,
      elevation: 920,
      feature_code: "PPLA",
      country_code: "IN",
      admin1_id: 1267701,
      admin2_id: 1277331,
      timezone: "Asia/Kolkata",
      population: 5104047,
      country_id: 1269750,
      country: "India",
      admin1: "Karnataka",
      admin2: "Bengaluru Urban",
    },
  ],
  generationtime_ms: 1.3240576,
};
