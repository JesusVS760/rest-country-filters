import React, { useEffect, useState } from "react";
import "./HomePage.css";
import json from "../../data.json";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = ({ getCountry, getData }) => {
  const [data, setData] = useState(json);
  const [matchMode, setMatchMode] = useState(false);

  const modeColor = (mode) => {
    // console.log(mode);
    setMatchMode(mode);
  };
  const handViewPage = (country) => {
    getCountry(country);
    getData(data);
    // console.log(country);
  };

  return (
    <div className="app-wrapper">
      <div className="app-nav-container">
        <Navbar modeColor={modeColor} />
      </div>
      <div
        className={matchMode ? "app-card-container-dark" : "app-card-container"}
      >
        <Card data={data} matchMode={matchMode} page={handViewPage} />
      </div>
    </div>
  );
};

export default HomePage;
