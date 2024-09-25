import React, { useContext, useEffect, useRef, useState } from "react";
import { searchLocations } from "../utils/http";
import { WeatherContext } from "../store/weather-context";

export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  timezone: string;
  country_id: number;
  country: string;
  admin1: string;
}

interface SearchResult {
  results: Location[];
  generationtime_ms: number;
}

const initialSearchResults = { results: [], generationtime_ms: 0 };

const LocationSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { setCurrentLocation } = useContext(WeatherContext);
  const [searchResults, setSearchResults] =
    useState<SearchResult>(initialSearchResults);

  const timerRef = useRef<number>(-1);

  useEffect(() => {
    clearTimeout(timerRef.current);
    setSearchResults(initialSearchResults);
    if (searchText.length > 1) {
      timerRef.current = setTimeout(async () => {
        const response = await searchLocations(searchText);
        console.log(response);
        setSearchResults(response);
      }, 1000);
    }
  }, [searchText]);

  const handleOnLocationSelection = (location: Location) => {
    console.log("selected location!!");

    setCurrentLocation(location);
  };

  return (
    <span className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search city"
        onChange={(event) => setSearchText(event.target.value)}
      />
      {searchResults.results && (
        <ul className="search-results">
          {searchResults.results.map((result) => (
            <li key={result.id} className="search-result">
              <a onClick={() => handleOnLocationSelection(result)}>
                {result.name}, {result.admin1}, {result.country}
              </a>
            </li>
          ))}
        </ul>
      )}
      <button className="locate-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-icon locate-icon"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M256 96V56M256 456v-40"
          />
          <path
            d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M416 256h40M56 256h40"
          />
        </svg>
      </button>
    </span>
  );
};

export default LocationSearchBar;