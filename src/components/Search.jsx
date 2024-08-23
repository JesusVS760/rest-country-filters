import React, { useEffect, useState } from "react";
import "./Search.css";
import searchIcon from "../assets/search-icon.png";
const Search = ({ matchMode, searchCountry }) => {
  const [searchFor, setSearchFor] = useState("");

  useEffect(() => {
    if (searchFor != "") {
      const countrySearch = () => {
        searchCountry(searchFor);
      };
      countrySearch();
    } else {
      searchCountry("");
    }
  }, [searchFor]);

  return (
    <div className={matchMode ? "search-container-dark" : "search-container"}>
      <img src={searchIcon} alt="search" />
      <input
        type="text"
        placeholder="Search for a country"
        onChange={(e) => setSearchFor(e.target.value)}
      />
    </div>
  );
};

export default Search;
