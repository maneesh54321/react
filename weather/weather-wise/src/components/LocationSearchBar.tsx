import React from "react";

const LocationSearchBar = () => {
  return (
    <span className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search city"
      />
      <button className="locate-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="locate-icon"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M256 96V56M256 456v-40"
          />
          <path
            d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z"
            fill="none"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M416 256h40M56 256h40"
          />
        </svg>
      </button>
    </span>
  );
};

export default LocationSearchBar;
