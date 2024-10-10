import { useContext, useEffect, useRef, useState } from "react";
import {
  LocationContext,
  LocationContextType,
} from "../store/LocationContextProvider";
import { Location, SearchResult } from "../utils/data";
import { getLocationFromCoordinates, searchLocations } from "../utils/http";

const initialSearchResults = { results: [], generationtime_ms: 0 };

const LocationSearchBar = ({
  onLocationSelect,
}: {
  onLocationSelect: () => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const { location, setCurrentLocation } =
    useContext<LocationContextType>(LocationContext);
  const [_location, _setLocation] = useState(location);

  const [searchResults, setSearchResults] =
    useState<SearchResult>(initialSearchResults);

  const timerRef = useRef<number>(-1);

  useEffect(() => {
    clearTimeout(timerRef.current);
    setSearchResults(initialSearchResults);
    if (searchText.length > 1) {
      timerRef.current = setTimeout(async () => {
        const response = await searchLocations(searchText);
        setSearchResults(response);
      }, 1000);
    }
  }, [searchText]);

  useEffect(() => {
    async function getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const p = position.coords;
          console.log(`latitude: ${p.latitude}, longitude: ${p.longitude}`);
          const res = await getLocationFromCoordinates(p.latitude, p.longitude);
          const location: Location = {
            id: res.place_id,
            name: res.address.county,
            latitude: res.lat,
            longitude: res.lon,
            country: res.address.country,
            country_code: res.address.country_code,
            admin1: res.address.state,
            admin1_id: res.address.postcode,
            country_id: null,
            elevation: null,
            feature_code: null,
            timezone: null,
          };
          setCurrentLocation(location);
        },
        () => {
          console.log("Choose a city");
        }
      );
    }

    if (!_location) {
      getCurrentLocation();
    }
  }, [_location, setCurrentLocation]);

  const handleOnLocationSelection = (location: Location | null) => {
    setCurrentLocation(location);
    _setLocation(location);
    onLocationSelect();
  };

  const handleOnSelectCurrentLocation = () => {
    _setLocation(null);
    setCurrentLocation(null);
    clearSearchText();
    onLocationSelect();
  };

  const clearSearchText = () => {
    setSearchText("");
  };

  return (
    <span className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search city"
        value={searchText}
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
      <button
        className="locate-button"
        onClick={handleOnSelectCurrentLocation}
        aria-label="locate-me"
      >
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
