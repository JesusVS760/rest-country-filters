import React, { useEffect, useState } from "react";
import "./RegionFilter.css";
import arrrowDown from "../assets/arrow-down.png";
const RegionFilter = ({ filterRegion, matchMode }) => {
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
    <div
      className={
        matchMode ? "region-filter-container-dark" : "region-filter-container"
      }
    >
      <div className="filter-header">
        <h4 onClick={() => setShowMenu(!showMenu)}>
          Filter by Region
          <img src={arrrowDown} alt="" />
        </h4>
      </div>
      <div className={showMenu ? "filter-options-toggle" : "filter-options"}>
        <ul>
          <li onClick={() => setRegion("Africa")}>Africa</li>
          <li onClick={() => setRegion("America")}>America</li>
          <li onClick={() => setRegion("Asia")}>Asia</li>
          <li onClick={() => setRegion("Europe")}>Europe</li>
          <li onClick={() => setRegion("Oceania")}>Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default RegionFilter;
