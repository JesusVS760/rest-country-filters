import React, { useState } from "react";
import "./App.css";
import json from "../data.json";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState(json);

  return (
    <div className="app-wrapper">
      <div className="app-nav-container">
        <Navbar />
      </div>
      <div className="app-card-container">
        <Card data={data} className="card" />
      </div>
    </div>
  );
};

export default App;
