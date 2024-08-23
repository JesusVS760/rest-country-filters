import React, { useState } from "react";
import "./RegionFilter.css";
import arrrowDown from "../assets/arrow-down.png";
const RegionFilter = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleRegion = (region) => {
    console.log(region);
  };

  return (
    <div className="region-filter-container">
      <div className="filter-header">
        <h4 onClick={() => setShowMenu(!showMenu)}>
          Filter by Region
          <img src={arrrowDown} alt="" />
        </h4>
      </div>
      <div className={showMenu ? "filter-options-toggle" : "filter-options"}>
        <li>
          <ul onClick={() => handleRegion("Africa")}>Africa</ul>
          <ul onClick={() => handleRegion("America")}>America</ul>
          <ul onClick={() => handleRegion("Asia")}>Asia</ul>
          <ul onClick={() => handleRegion("Europe")}>Europe</ul>
          <ul onClick={() => handleRegion("Oceania")}>Oceania</ul>
        </li>
      </div>
    </div>
  );
};

export default RegionFilter;
