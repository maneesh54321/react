import React from "react";
import LocationSearchBar from "./LocationSearchBar";

const Header = () => {
  return (
    <header>
      <button className="btn burger-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="burger-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <a href="#" className="link banner">
        Weather Wise
      </a>
      <div className="location">
        <span className="location-icon">Location-icon</span>
        <p>Bengaluru, India</p>
      </div>
      <div className="location-search-bar">
        <LocationSearchBar />
      </div>
      <button className="theme-switcher">
        <span className="theme-icon">theme-icon</span>
        <span className="theme-text">Light</span>
      </button>
      <a href="#" className="notification">
        <span className="notification-icon">Notification-icon</span>
      </a>
      <a href="#" className="settings">
        <span className="settings-icon">Settings-icon</span>
      </a>
      <a className="profile">
        <span className="profile-picture">Profile Picture</span>
        <span className="name">Maneesh Singh</span>
      </a>
    </header>
  );
};

export default Header;
