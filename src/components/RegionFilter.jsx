import React, { useEffect, useState } from "react";
import "./RegionFilter.css";
import arrrowDown from "../assets/arrow-down.png";
const RegionFilter = ({ filterRegion }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [region, setRegion] = useState("");

  // const handleRegion = (region) => {
  //   console.log(region);
  //   filterRegion(region);
  // };
  useEffect(() => {
    if (region != "") {
      filterRegion(region);
      console.log(region);
    }
  }, [region, filterRegion]);

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
          <ul onClick={() => setRegion("Africa")}>Africa</ul>
          <ul onClick={() => setRegion("America")}>America</ul>
          <ul onClick={() => setRegion("Asia")}>Asia</ul>
          <ul onClick={() => setRegion("Europe")}>Europe</ul>
          <ul onClick={() => setRegion("Oceania")}>Oceania</ul>
        </li>
      </div>
    </div>
  );
};

export default RegionFilter;
