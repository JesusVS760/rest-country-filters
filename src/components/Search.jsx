import React from "react";
import "./Search.css";
import searchIcon from "../assets/search-icon.png";
const Search = () => {
  return (
    <div className="search-container">
      <img src={searchIcon} alt="search" />
      <input type="text" placeholder="Search for a country" />
    </div>
  );
};

export default Search;
