import React, { useEffect, useState } from "react";
import "./HomePage.css";
import json from "../../data.json";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import RegionFilter from "../components/RegionFilter";

const HomePage = ({ getCountry, getData }) => {
  const [data, setData] = useState(json);
  const [matchMode, setMatchMode] = useState(false);
  const [findingCountry, setFindingCountry] = useState("");
  const [regionfilter, setRegionFilter] = useState("");

  const modeColor = (mode) => {
    setMatchMode(mode);
  };
  const handViewPage = (country) => {
    getCountry(country);
    getData(data);
  };

  const filterRegion = (region) => {
    setRegionFilter(region);
  };

  const findCountry = (country) => {
    setFindingCountry(country);
  };

  return (
    <div className="app-wrapper">
      <div className="app-nav-container">
        <Navbar modeColor={modeColor} />
      </div>
      <div className={matchMode ? "search-dark" : "search"}>
        <Search matchMode={matchMode} searchCountry={findCountry} />
        <RegionFilter filterRegion={filterRegion} matchMode={matchMode} />
      </div>

      <div
        className={matchMode ? "app-card-container-dark" : "app-card-container"}
      >
        <Card
          data={data}
          matchMode={matchMode}
          page={handViewPage}
          findSearch={findingCountry}
          regionFilters={regionfilter}
        />
      </div>
    </div>
  );
};

export default HomePage;
