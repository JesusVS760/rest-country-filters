import React, { useState } from "react";
import "./App.css";
import json from "../data.json";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState(json);
  const [matchMode, setMatchMode] = useState(false);

  const modeColor = (mode) => {
    console.log(mode);
    setMatchMode(mode);
  };

  return (
    <div className="app-wrapper">
      <div className="app-nav-container">
        <Navbar modeColor={modeColor} />
      </div>
      <div
        className={matchMode ? "app-card-container-dark" : "app-card-container"}
      >
        <Card data={data} matchMode={matchMode} />
      </div>
    </div>
  );
};

export default App;
